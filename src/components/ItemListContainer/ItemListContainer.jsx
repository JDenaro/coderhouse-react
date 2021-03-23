import React, { useEffect, useState } from 'react'

import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import { ItemList } from '../ItemList/ItemList';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';
import './ItemListContainer.css';
import shop_banner from '../../assets/images/shop_banner.png'


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        title: "Trezor Model T",
                        manufacturer: "Trezor",
                        price: 177.56,
                        pictureUrl: "https://shop.trezor.io/static/img/product/T2.jpg",
                        description: "The Trezor Model T is an advanced cryptocurrency hardware wallet. Store Bitcoin, passwords, tokens and other keys with confidence. Invented for your digital independence.",
                        stock: 5,
                        size: "64 mm x 39 mm x 10 mm",
                        weight: "22 g",
                        connector: "USB-C"
                    },
                    {
                        id: 2,
                        title: "Trezor One Black",
                        manufacturer: "Trezor",
                        price: 58.10,
                        pictureUrl: "https://shop.trezor.io/static/img/product/T1.png",
                        description: "The Trezor Model One is the most secure hardware wallet choice for everyone, whether you're new to Bitcoin or already an expert. Get yours today!",
                        stock: 4
                    },
                    {
                        id: 3,
                        title: "Trezor One White",
                        manufacturer: "Trezor",
                        price: 58.10,
                        pictureUrl: "https://shop.trezor.io/static/img/product/T1_white.png",
                        description: "The Trezor Model One is the most secure hardware wallet choice for everyone, whether you're new to Bitcoin or already an expert. Get yours today!",
                        stock: 6
                    },
                    {
                        id: 4,
                        title: "Trezor One Metallic",
                        manufacturer: "Trezor",
                        price: 595.80,
                        pictureUrl: "https://shop.trezor.io/static/img/product/metallic_front.png",
                        description: "An exclusive Trezor Model One device handmade from anodized aluminum, with an engraving commemorating the 5th anniversary of SatoshiLabs, the makers of Trezor.",
                        stock: 3
                    },
                    {
                        id: 5,
                        title: "Ledger Nano S",
                        manufacturer: "Ledger",
                        price: 58.10,
                        pictureUrl: "https://cdn.shopify.com/s/files/1/2974/4858/files/lns-comparison_242x.png?v=1566478847",
                        description: "The original hardware wallet. Easily start your crypto journey: buy crypto, secure your assets and manage them in one single-app.",
                        stock: 7,
                        size: "56.95 mm x 17.4 mm x 9.1 mm",
                        weight: "16.2 g",
                        connector: "USB Type Micro-B"
                    },
                ]);
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
