import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { products } from '../../assets/data/products';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';

export const ItemDetailContainer = () => {

    const { id } = useParams()
    // console.log(id)
    const [items, setItems] = useState([]);
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1100);
        }).then((resultado) => setItems(resultado.filter(item => item.id === parseInt(id))));
    }, [id]);

    return (
        <div className="container mt-5">
            {
                items.length < 1 ? <ItemSpinner /> : <ItemDetail items={items[0]} />
            }
        </div>
    )
}
