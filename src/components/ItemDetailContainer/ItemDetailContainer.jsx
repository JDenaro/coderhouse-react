import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../configs/firebase';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [db, setDb] = useState(getFirestore())
    const [itemDetailedById, setItemDetailedById] = useState([]);

    // firebase
    useEffect(() => {
        const productos = db.collection("items").doc(id);

        productos.get().then((res) => {
            setItemDetailedById({ id, ...res.data() });
        });
    }, [id]);


    return (
        itemDetailedById.length < 1 ? <ItemSpinner /> : <ItemDetail items={itemDetailedById} />

    )
}
