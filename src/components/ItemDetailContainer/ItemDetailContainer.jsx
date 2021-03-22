import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const { id } = useParams()
    console.log(id)
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
                        stock: 5
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
                        stock: 7
                    },
                ]);
            }, 2500);
        }).then((resultado) => setItems(resultado.filter(item => item.id === parseInt(id))));
    });

    return (
        <div className="container">
            <p>En ItemDetailContainer</p>
            <ItemDetail items={items} />
        </div>
    )
}
