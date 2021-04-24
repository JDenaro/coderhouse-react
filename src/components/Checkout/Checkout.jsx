import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../../context/CartContext";

import firebase from "firebase/app";

import "firebase/firestore";
import { getFirebase, getFirestore } from '../../configs/firebase';
import { useHistory } from 'react-router-dom';

export const Checkout = () => {
    const context = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [lastId, setLastId] = useState();
    const [db, setDb] = useState(getFirestore())

    const history = useHistory();

    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)


    function createOrder(e) {
        e.preventDefault();
        disableForm();
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
        <div className="container mt-5">
            <div className="row rounded border py-3 bg-white justify-content-center">
                <div className="col-md-8">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" id="checkoutForm" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="John Doe" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" required="" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <hr className="mb-3" />
                        <h4 className="mb-3">Payment</h4>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" type="text" placeholder="" required="" />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="cc-number">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label for="cc-expiration">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <button className="btn btn-success btn-lg btn-block" type="submit" onClick={createOrder}>Pay $ {context.cartTotal}</button>
                    </form>
                </div>


                <div className="col-md-4 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">{totalItemQty}</span>
                    </h4>
                    <ul className="list-group mb-3">

                        {context.cart.map(item => (
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{item.manufacturer} {item.title}</h6>
                                    <small className="text-muted">x {item.qty}</small>
                                </div>
                                <span className="text-muted">$ {(item.price * item.qty).toFixed(2)}</span>
                            </li>
                        ))}
                        {/* <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>GET10OFF</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li> */}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$ {context.cartTotal}</strong>
                        </li>
                    </ul>

                    {/* <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    )
}
