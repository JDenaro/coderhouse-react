import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import shield from '../../assets/icons/shield.svg';
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {
    return (
        <>
            {/* <Router> */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container align-items-center">
                    <div className="d-flex align-items-center">
                        <NavLink to="/home" activeClassName="active">
                            <img src={shield} className="logo align-self-center" alt="logo" />
                            <a className="navbar-brand pl-3" href="#">REACTIVE WALLETS</a>
                        </NavLink>

                    </div>
                    <div>
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/home" activeClassName="active">
                                    <a className="nav-link">Home</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop">
                                    <a className="nav-link">Shop</a>
                                </NavLink>
                            </li>
                            <NavLink to="/cart">
                                <CartWidget />
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
