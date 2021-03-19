import React, { useState } from 'react'

import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = () => {

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-8">
                    <div className="row">
                        <ItemList/>                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="card border p-3">
                        <img src={add_shopping_cart} className="addCart align-self-center" />
                        <div className="card-body text-secondary text-center">
                            <h5 className="card-title">Carrito vacio</h5>
                            <p className="card-text">Un carrito vacio es un carrito triste :(</p>
                            <p className="card-text">Agregale felicidad!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
