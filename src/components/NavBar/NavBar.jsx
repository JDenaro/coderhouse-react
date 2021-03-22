import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import "./NavBar.css"
import shield from '../../assets/icons/shield.svg';
import { CartWidget } from '../CartWidget/CartWidget'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { Contact } from '../Contact/Contact';
import { Home } from '../Home/Home';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer.jsx';

export const NavBar = () => {
    return (
        <>
            <Router>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container align-items-center">
                        <div className="d-flex">
                            <img src={shield} className="logo align-self-center" alt="logo" />
                            <a className="navbar-brand pl-3" href="#">REACTIVE WALLETS</a>
                        </div>
                        <div>
                            <ul className="nav">
                                <li className="nav-item">
                                    <NavLink to="/home" activeClassName="active" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop">
                                        <a className="nav-link">Shop</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">
                                        <a className="nav-link">Contact</a>
                                    </Link>
                                </li>
                                <CartWidget />
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/shop/items/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/shop">
                        <ItemListContainer />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>

        </>
    )
}
