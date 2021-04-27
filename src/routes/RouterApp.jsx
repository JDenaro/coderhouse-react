import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import { Checkout } from '../components/Checkout/Checkout';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar'
import { Home } from '../components/Home/Home'

export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route path="/shop/item/:id">
                    <NavBar />
                    <ItemDetailContainer />
                </Route>
                <Route path="/shop/category/:cat">
                    <NavBar />
                    <ItemListContainer />
                </Route>

                <Route path="/cart/checkout">
                    <NavBar />
                    <Checkout />
                </Route>
                <Route path="/cart">
                    <NavBar />
                    <Cart />
                </Route>
                <Route path="/shop">
                    <NavBar />
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
