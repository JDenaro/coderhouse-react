import React, { useEffect, useState } from 'react'

import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import { ItemList } from '../ItemList/ItemList';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';
import './ItemListContainer.css';
import shop_banner from '../../assets/images/shop_banner.png'
import { products } from '../../assets/data/products';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../configs/firebase';


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

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
                <div className="col-4">
                    <div className="card border p-3">
                        <img src={add_shopping_cart} className="addCart align-self-center" />
                        <div className="card-body text-secondary text-center">
                            <h5 className="card-title">Cart empty</h5>
                            <p className="card-text">An empty cart is a sad cart :(</p>
                            <p className="card-text">Add some happiness!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
