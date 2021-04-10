import React, { useEffect, useState } from 'react'

import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import { ItemList } from '../ItemList/ItemList';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';
import './ItemListContainer.css';
import shop_banner from '../../assets/images/shop_banner.png'
import { products } from '../../assets/data/products';
import { Link } from 'react-router-dom';


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1100);
        }).then((resultado) => setItems(resultado));
    });

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
