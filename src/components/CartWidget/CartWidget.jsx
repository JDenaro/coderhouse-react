import React, { useContext } from 'react';
import shopping_cart from '../../assets/icons/shopping-cart.svg';
import CartContext from "../../context/CartContext"
export const CartWidget = () => {

    const context = useContext(CartContext)
    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)


    return (

        <div className="d-flex">
            {totalItemQty > 0 && <p className="m-0 align-self-center">{totalItemQty}</p>}
            <li className="nav-item">
                <a className="nav-link text-light" href="#"><img className="img-fluid" style={{ maxWidth: 1.5 + 'rem' }} src={shopping_cart} alt="shopping_cart" /></a>
            </li>
        </div>

    )
}
