import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar';
import { RouterApp } from './routes/RouterApp';

export const ReactiveWallet = () => {
  return (
    <>
      {/* <NavBar /> */}
      <RouterApp />
    </>
    // <>
    //   <NavBar />
    //   <Router>
    //     <Switch>
    //       <Route path="/shop">
    //         <ItemListContainer />
    //       </Route>
    //       <Route path="/home">
    //         <Home />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </>
  )
}
