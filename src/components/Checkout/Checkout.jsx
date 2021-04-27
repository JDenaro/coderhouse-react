import React, { useContext, useState } from 'react';
import CartContext from "../../context/CartContext";

import "firebase/firestore";
import { CheckoutPayout } from '../CheckoutPayout/CheckoutPayout';

export const Checkout = () => {
    const context = useContext(CartContext)
    const [lastId, setLastId] = useState(0);


    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)

    return (
        <CheckoutPayout setLastId={setLastId} lastId={lastId} />
    )
}
