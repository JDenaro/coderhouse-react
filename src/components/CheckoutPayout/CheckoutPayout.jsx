import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../../context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../../configs/firebase';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'

export const CheckoutPayout = (props) => {

    const context = useContext(CartContext)
    const [db, setDb] = useState(getFirestore())

    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)


    function createOrder(e) {
        e.preventDefault();
        disableForm();
        document.getElementById("submit-pay").disabled = "true"
        const newOrder = {
            user: {
                id: document.getElementById("id").value,
                name: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
            },
            products: [...context.cart],
            address: document.getElementById("address").value,
            createdOn: firebase.firestore.Timestamp.fromDate(new Date()),
            total: context.cartTotal,
        };

        const orders = db.collection("orders");

        orders.add(newOrder).then((resp) => {
            console.log(resp);
            console.log(resp.id);
            props.setLastId(resp.id);
            handleShow();
        });

    }

    function disableForm() {
        var form = document.getElementById("checkoutForm");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }
    }

    return (
        <div className="container mt-5">
            <div className="row rounded border py-3 bg-white justify-content-center">
                <div className="col-md-8">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" id="checkoutForm" onSubmit={createOrder} novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="John" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="id">ID (Argentinian DNI)</label>
                                <input type="number" className="form-control" id="id" placeholder="30123456" maxlength="8" required />
                                <div className="invalid-feedback">
                                    Please enter a valid ID.
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                            </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <hr className="mb-3" />
                        <h4 className="mb-3">Payment</h4>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" type="text" placeholder="John Doe" required />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="cc-number">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="1234 1234 1234 1234" maxlength="16" required />
                                <div className="invalid-feedback">
                                    Credit card number is required
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label for="cc-expiration">Expiration (MMYY)</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="12/25" maxlength="4" required />
                                <div className="invalid-feedback">
                                    Expiration date required
                            </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="123" maxlength="3" required />
                                <div className="invalid-feedback">
                                    Security code required
                            </div>
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <button className="btn btn-success btn-lg btn-block" id="submit-pay" type="submit" /* onClick={createOrder}  */>Pay $ {context.cartTotal}</button>
                    </form>
                </div>

                <Modal
                    show={modalShow}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    className="glass animate__animated animate__fadeIn"
                >
                    <Modal.Body className="text-center">
                        <h1 className="h1-home">Purchase completed!</h1>

                        <p className="mb-3">A confirmation has been sent to your email</p>
                        <p className="mb-3">Your order ID is: {props.lastId}</p>
                        <Link to="/home">
                            <button className="btn btn-success px-4 py-2">Home</button>
                        </Link>
                    </Modal.Body>
                </Modal>


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
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$ {context.cartTotal}</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
