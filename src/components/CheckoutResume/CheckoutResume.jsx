import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import blockchain from '../../assets/video/blockchain2.mp4'
import shieldIcon from '../../assets/icons/shield.svg';

import CartContext from "../../context/CartContext";

export const CheckoutResume = (props) => {

    const context = useContext(CartContext)
    useEffect(() => {
        context.clearCart();

    }, [])

    return (
        <>
            <div className="video">
                <video autoPlay muted loop id="myVideo" className="video-responsive">
                    <source src={blockchain} type="video/mp4" />
                </video>
                <div className="video-content">
                    <div className="glass text-center border rounded p-3 px-5 animate__animated animate__fadeIn animate__slow">
                        <img src={shieldIcon} className="logo align-self-center" alt="logo" />
                        <h1 className="h1-home">Purchase complete</h1>

                        <p className="mb-3">A confirmation email has been sent to your address</p>
                        <p className="mb-3">Your order ID is: {props.lastId}</p>

                        <Link to="/home">
                            <button className="btn btn-success px-4 py-2">Home</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}
