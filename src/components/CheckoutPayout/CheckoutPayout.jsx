import React, { useContext, useState } from 'react';
import CartContext from "../../context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../../configs/firebase';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { SpinnerBuy } from '../Spinners/SpinnerBuy/SpinnerBuy';
// import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const CheckoutPayout = (props) => {

    const context = useContext(CartContext)
    const [db, setDb] = useState(getFirestore())
    const [loading, setLoading] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)

    // CREATE ORDER 2

    function createOrder2(e) {
        console.log('en order2')
        setLoading(true);
        disableForm();
        const newOrder = {
            user: {
                id: e.id,
                name: e.firstName,
                lastName: e.lastName,
                email: e.email,
            },
            products: [...context.cart],
            address: e.address,
            createdOn: firebase.firestore.Timestamp.fromDate(new Date()),
            total: context.cartTotal,
        };

        const orders = db.collection("orders");

        orders.add(newOrder).then((resp) => {
            console.log(resp);
            console.log(resp.id);
            props.setLastId(resp.id);
            context.clearCart();
            setLoading(false);
            handleShow();
        });
    }

    function disableForm() {
        var form = document.getElementById("checkoutForm2");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }
        setLoading(true)
    }

    // YUP

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        id: Yup.number()
            // .max(8, 'Must be 8 numbers or less')
            .required('Required'),
        phone: Yup.string()
            // .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        confirmEmail: Yup.string()
            .email('Email is invalid')
            .oneOf([Yup.ref('email'), null], 'Email must match')
            .required('Email confirmation is required'),
        address: Yup.string()
            // .oneOf([Yup.ref('email'), null], 'Email must match')
            .required('Required'),
        cardName: Yup.string()
            .required('Required'),
        cardNumber: Yup.number()
            .required('Required'),
        cardExpiration: Yup.number()
            .required('Required'),
        cardCVV: Yup.number()
            .required('Required'),

    })

    return (
        <div className="container mt-5">
            <div className="row rounded border py-3 bg-white">
                <div className="col-md-8">
                    <h4 className="mb-3">Billing address</h4>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            id: '',
                            phone: '',
                            email: '',
                            confirmEmail: '',
                            address: '',
                            cardName: '',
                            cardNumber: '',
                            cardExpiration: '',
                            cardCVV: '',

                        }}
                        validationSchema={validate}
                        // onSubmit={values => {
                        //     createOrder2(values)

                        // }}
                        onSubmit={createOrder2}
                    >
                        {formik => (
                            <>
                                <Form id="checkoutForm2">
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <TextField label="First Name" name="firstName" type="text" />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <TextField label="Last Name" name="lastName" type="text" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <TextField label="ID (Argentinian DNI)" name="id" type="number" />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <TextField label="Phone number" name="phone" type="number" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <TextField label="Email" name="email" type="email" />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <TextField label="Confirm Email" name="confirmEmail" type="email" />
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <TextField label="Shipping address" name="address" type="text" />
                                    </div>
                                    <hr className="mb-4"></hr>
                                    <h4 className="mb-3">Payment</h4>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <TextField label="Name on card" name="cardName" type="text" />
                                            <small className="text-muted">Full name as displayed on card</small>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <TextField label="Credit card number" name="cardNumber" type="number" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <TextField label="Expiration dd-MM" name="cardExpiration" type="number" maxLength="4" />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <TextField label="CVV" name="cardCVV" type="number" maxlength="3" />
                                        </div>
                                    </div>
                                    <hr className="mb-4"></hr>
                                    <button className="btn btn-success btn-lg btn-block" id="submit-pay" type="submit">{loading ? <SpinnerBuy /> : <>Pay ${context.cartTotal}</>}</button>
                                </Form>
                            </>
                        )}
                    </Formik>
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
                        <h1 className="h1-home mt-3">Purchase completed!</h1>

                        <p className="mb-3">A confirmation has been sent to your email</p>
                        <p className="mb-3">Your order ID is: {props.lastId}</p>
                        <Link to="/home">
                            <button className="btn btn-success px-4 py-2 mb-3">Home</button>
                        </Link>
                    </Modal.Body>
                </Modal>


                <div className="col-md-4 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-success badge-pill">{totalItemQty}</span>
                    </h4>
                    <ul className="list-group mb-3">

                        {context.cart.map(item => (
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{item.manufacturer} {item.title}</h6>
                                    <small className="text-muted">x {item.qty}</small>
                                </div>
                                <span className="text-muted">${(item.price * item.qty).toFixed(2)}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${context.cartTotal}</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
