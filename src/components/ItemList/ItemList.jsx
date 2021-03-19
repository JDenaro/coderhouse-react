import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemList = () => {
    const onAdd = (e, q) => {
        alert(`Agregaste ${q} elementos al carrito`)
    }
    return (
        <div className="item d-flex border rounded mb-4 bg-white">
            <div className="col-5 py-4">
                <img src="https://shop.trezor.io/static/img/product/T2.jpg" alt="" style={{ maxWidth: 300 }} />
            </div>
            <div className="col-7">
                <div className="card-block py-3 px-3">
                    <h4 className="card-title">Trezor Model T</h4>
                    <p className="card-text">
                        The Trezor Model T is an advanced cryptocurrency hardware wallet. Store Bitcoin, passwords, tokens and other keys with confidence. Invented for your digital independence.
                            </p>
                    {<ItemCount initial={1} stock={5} onadd={onAdd} />}
                </div>
            </div>
        </div>
    )
}
