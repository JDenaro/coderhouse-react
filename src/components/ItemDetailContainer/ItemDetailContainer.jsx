import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { products } from '../../assets/data/products';
import { getFirestore } from '../../configs/firebase';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [db, setDb] = useState(getFirestore())
    const [itemDetailed, setItemDetailed] = useState([]);
    const [itemDetailedById, setItemDetailedById] = useState([]);

    // firebase
    useEffect(() => {
        const productos = db.collection("items").doc(id);

        productos.get().then((res) => {
            console.log(res.data());
            setItemDetailedById(res.data());
        });

    }, [id]);

    // firebase
    // useEffect(() => {
    //     const itemsCollection = db.collection("items")
    //     itemsCollection
    //         .get()
    //         .then((resp) => {
    //             if (resp.size === 0) {
    //                 console.log("Sin datos");
    //             } else {
    //                 let arr = []
    //                 resp.docs.map((c) => arr.push({ id: parseInt(c.id), ...c.data() }));
    //                 setItemDetailed(arr.filter(item => item.id === parseInt(id)))
    //                 console.log(itemDetailed)
    //             }
    //         })
    //         .catch((error) => console.log(error));
    // }, [id]);

    return (
        <div className="container mt-5">
            {
                itemDetailedById.length < 1 ? <ItemSpinner /> : <ItemDetail items={itemDetailedById} />
            }
        </div>
    )
}
