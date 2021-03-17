import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';


export const ItemListContainer = () => {

    const onAdd = (e, q) => {
        alert(`Agregaste ${q} elementos al carrito`)
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-8 bg-white">
                    <div className="row border rounded">
                        <div className="col-5 py-4">

                            <img src="https://shop.trezor.io/static/img/product/T2.jpg" alt="" style={{ maxWidth: 300 }} />
                        </div>
                        <div className="col-7">
                            <div className="card-block py-3 px-3">
                                <h4 className="card-title">Trezor Model T</h4>
                                <p className="card-text">
                                    The Trezor Model T is an advanced cryptocurrency hardware wallet. Store Bitcoin, passwords, tokens and other keys with confidence. Invented for your digital independence.
                            </p>
                                <ItemCount initial={1} stock={5} onadd={onAdd} />
                            </div>
                        </div>
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
