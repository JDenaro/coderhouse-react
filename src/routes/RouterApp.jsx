import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import { Checkout } from '../components/Checkout/Checkout';
import { Contact } from '../components/Contact/Contact';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar'
import { Home } from '../components/Home/Home'

export const RouterApp = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/shop/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route path="/shop/category/:cat">
                    <ItemListContainer />
                </Route>
                <Route path="/cart/checkout">
                    <Checkout />
                </Route>
                <Route path="/cart">
                    <Cart />
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
            <Redirect to='/' />
        </Router>
    )
}
