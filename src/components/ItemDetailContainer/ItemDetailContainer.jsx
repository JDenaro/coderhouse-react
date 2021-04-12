import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { products } from '../../assets/data/products';
import { getFirestore } from '../../configs/firebase';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';

export const ItemDetailContainer = () => {

    const { id } = useParams()
    // console.log(id)

    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 1100);
    //     }).then((resultado) => setItems(resultado.filter(item => item.id === parseInt(id))));
    // }, [id]);


    const [itemDetailed, setItemDetailed] = useState([]);

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
                    setItemDetailed(arr.filter(item => item.id === parseInt(id)))
                    console.log(itemDetailed)
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="container mt-5">
            {
                itemDetailed.length < 1 ? <ItemSpinner /> : <ItemDetail items={itemDetailed[0]} />
            }
        </div>
    )
}
