import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Contact } from '../components/Contact/Contact';
import { Home } from '../components/Home/Home';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar'

export const RouterApp = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/shop/item/:id">
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
    )
}
