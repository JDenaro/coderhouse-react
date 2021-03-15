import React from 'react'
import "./NavBar.css"
import shield from '../assets/icons/shield.svg';
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container align-items-center">
                    <div className="d-flex">
                        <img src={shield} className="logo align-self-center" alt="logo" />
                        <a className="navbar-brand pl-1" href="#">REACTIVE WALLETS</a>  
                    </div>
                    <div>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
