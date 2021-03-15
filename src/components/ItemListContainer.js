import React, { useState } from 'react'
import { ItemCount } from './ItemCount'


export const ItemListContainer = () => {

    const onAdd = (e, q) => {
        alert(`Agregaste ${q} elementos al carrito`)
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-8 bg-white">
                    <div className="row border border-light rounded">
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
                    <div className="card border-secondary mb-3">
                        <div className="card-header">Carrito</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Nombre item</h5>
                            <p className="card-text">Cantidad:1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
