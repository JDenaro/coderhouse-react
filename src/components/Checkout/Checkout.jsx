import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../../context/CartContext";

import firebase from "firebase/app";

import "firebase/firestore";
import { getFirebase, getFirestore } from '../../configs/firebase';
import { useHistory } from 'react-router-dom';
import { CheckoutPayout } from '../CheckoutPayout/CheckoutPayout';
import { CheckoutResume } from '../CheckoutResume/CheckoutResume';

export const Checkout = () => {
    const context = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [lastId, setLastId] = useState(0);
    const [db, setDb] = useState(getFirestore())

    const history = useHistory();

    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)


    function createOrder(e) {
        e.preventDefault();
        disableForm();
        document.getElementById("submit-pay").disabled = "true"
        const newOrder = {
            user: { id: 1, name: document.getElementById("firstName").value, lastName: document.getElementById("lastName").value, email: document.getElementById("email").value },
            products: [...context.cart],
            createOn: firebase.firestore.Timestamp.fromDate(new Date()),
            total: context.cartTotal,
        };

        const orders = db.collection("orders");

        orders.add(newOrder).then((resp) => {
            disableForm();

            console.log(resp);
            console.log(resp.id);
            setLastId(resp.id);
            alert(`Your Order ID is: ${resp.id}. Thanks for your purchase!`);
            document.getElementById("checkoutForm").reset();
            context.clearCart();
            enableForm();
            history.push('/shop');
        });
    }

    function disableForm() {
        var form = document.getElementById("checkoutForm");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }
    }

    function enableForm() {
        var form = document.getElementById("checkoutForm");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = false;
        }
    }

    return (
        lastId == 0 ? <CheckoutPayout setLastId={setLastId} /> : <CheckoutResume lastId={lastId} />
    )
}
