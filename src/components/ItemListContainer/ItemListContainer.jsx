import React, { useContext, useEffect, useState } from 'react'

import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg'
import { ItemList } from '../ItemList/ItemList';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';
import './ItemListContainer.css';
import shop_banner from '../../assets/images/shop_banner.png'

import { getFirestore } from '../../configs/firebase';
import CartContext from '../../context/CartContext';


export const ItemListContainer = () => {

    const context = useContext(CartContext)
    const [items, setItems] = useState([]);
    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)

    // firebase
    useEffect(() => {
        const db = getFirestore();
        const categoriasCollection = db.collection("items");

        categoriasCollection
            .get()
            .then((resp) => {
                if (resp.size === 0) {
                    console.log("Sin datos");
                } else {
                    let arr = []
                    resp.docs.map((c) => arr.push({ id: parseInt(c.id), ...c.data() }));
                    setItems(arr)
                    console.log(items)
                }

            })
            .catch((error) => console.log(error));
    }, []);


    useEffect(() => {
        context.calculateTotal();

    }, [context.cart])

    return (

        <div className="container">
            <div className="row mt-3">
                <div className="col-12 banner mb-3 rounded">
                    <img src={shop_banner} alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                    <div className="row">
                        {
                            items.length < 1 ? <ItemSpinner /> : <ItemList items={items} />
                        }

                    </div>
                </div>

                <div className="col-4 porquillo">
                    <div className="cart-wrapper">
                        <div className="card border p-3 ">
                            {context.cart < 1 ?
                                <>
                                    <img src={add_shopping_cart} className="addCart align-self-center" />
                                    <div className="card-body text-secondary text-center">
                                        <h5 className="card-title">Cart empty</h5>
                                        <p className="card-text">An empty cart is a sad cart :(</p>
                                        <p className="card-text">Add some happiness!</p>
                                    </div>
                                </>
                                :
                                <>

                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Your cart</span>
                                        <span className="badge badge-secondary badge-pill">{totalItemQty}</span>
                                    </h4>
                                    <ul className="list-group mb-3">

                                        {context.cart.map(item => (
                                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                                <div>
                                                    <h6 className="my-0">{item.manufacturer} {item.title}</h6>
                                                    <small className="text-muted">x {item.qty}</small>
                                                </div>
                                                <span className="text-muted">${(item.price * item.qty).toFixed(2)}</span>
                                            </li>
                                        ))}
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Total (USD)</span>
                                            <strong>{context.cartTotal}</strong>
                                        </li>
                                    </ul>

                                    {/* <form className="card p-2">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Promo code" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-secondary">Redeem</button>
                                            </div>
                                        </div>
                                    </form> */}
                                </>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
