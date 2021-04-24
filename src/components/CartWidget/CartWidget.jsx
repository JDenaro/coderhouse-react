import React, { useContext } from 'react';
import shopping_cart from '../../assets/icons/shopping-cart.svg';
import CartContext from "../../context/CartContext"
export const CartWidget = () => {

    const context = useContext(CartContext)
    let totalItemQty = 0
    context.cart.map(item => totalItemQty += item.qty)


    return (

        <div className="d-flex">

            <li className="nav-item cart-icon">
                <a className="nav-link text-light"><img className="img-fluid " style={{ maxWidth: 1.5 + 'rem' }} src={shopping_cart} alt="shopping_cart" /></a>
            </li>
            {totalItemQty > 0 && <p className="m-0 align-self-center badge badge-success badge-pill badge-cart cart-counter">{totalItemQty}</p>}
        </div>

    )
}
