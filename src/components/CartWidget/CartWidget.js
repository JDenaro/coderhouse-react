import React from 'react';
import shopping_cart from '../../assets/icons/shopping-cart.svg';

export const CartWidget = () => {
    return (
        <li className="nav-item">
            <a className="nav-link text-light" href="#"><img className="img-fluid" style={{maxWidth: 1.5 + 'rem'}} src={shopping_cart} alt="shopping_cart" /></a>
        </li>
    )
}
