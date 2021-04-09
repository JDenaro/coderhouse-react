import React, { useContext } from 'react';
import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import CartContext from "../../context/CartContext"

export const Cart = () => {
    const context = useContext(CartContext)

    return (
        <>
            {console.log("el context cart es:", context.cart)}
            <div className="container">
                <div className="row mt-3 justify-content-center">
                    <div className="col-4">
                        <div className="card border p-3">
                            <img src={add_shopping_cart} className="addCart align-self-center" />
                            <div className="card-body text-secondary text-center">
                                <h5 className="card-title">Cart empty</h5>
                                <p className="card-text">An empty cart is a sad cart</p>
                                <p className="card-text">Add some happiness!</p>
                                {context.cart.map((item) => {
                                    <p>item.id</p>
                                    console.log('item id:', item.id)
                                    console.log('item qty:', item.qty)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
