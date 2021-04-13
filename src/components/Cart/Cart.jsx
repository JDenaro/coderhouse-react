import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import CartContext from "../../context/CartContext"

export const Cart = () => {
    const context = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalAux = 0
        context.cart.map(item => {
            totalAux = totalAux + (item.price * item.qty)
            console.log(`sumando ${item.qty} ${item.manufacturer} ${item.title}`)
            console.log(`totalAux es ${totalAux}`)
        })
        setTotal(totalAux)
    }, [context])

    return (
        <>
            {console.log("el context cart es:", context.cart)}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-8 card border p-3">
                        <img src={add_shopping_cart} className="addCart align-self-center" />
                        <div className="card-body text-secondary text-center">


                            {context.cart.length > 0
                                ?
                                <>
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-3">
                                            <h4 className="p-0 m-0">Item</h4>
                                        </div>
                                        <div className="col-3">
                                            <h4 className="p-0 m-0">Quantity</h4>
                                        </div>
                                        <div className="col-3">
                                            <h4 className="p-0 m-0">Price</h4>
                                        </div>
                                        <div className="col-3">
                                            <h4 className="p-0 m-0">Remove</h4>
                                        </div>
                                    </div>
                                    <hr />
                                    {context.cart.map(item => {
                                        return (<>
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-3">
                                                    <p className="p-0 m-0">{item.manufacturer} {item.title}</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="p-0 m-0">{item.qty}</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="p-0 m-0">${(item.qty * item.price).toFixed(2)}</p>
                                                </div>
                                                <div className="col-3">
                                                    <button className={`btn btn-success px-3 py-1 my-1`} onClick={() => context.removeItem(item.id)}>X</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                        )
                                    })}

                                    <h1>Total: {total.toFixed(2)}</h1>
                                    <button className={`btn btn-success px-4 py-2 mt-3 mx-1`} onClick={() => context.clearCart()}>Clear cart</button>
                                    <Link to="/cart/checkout">
                                        <button className={`btn btn-success px-4 py-2 mt-3 mx-1`}>Checkout</button>
                                    </Link>
                                </>

                                :
                                <>
                                    <p>Your cart is empty</p>
                                    <Link to="/shop">
                                        <button className={`btn btn-success px-4 py-2 mt-3 mx-1`}>Go to Shop</button>
                                    </Link>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
