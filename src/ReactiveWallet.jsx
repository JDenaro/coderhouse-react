import React, { useState } from 'react'
import { RouterApp } from './routes/RouterApp';
import CartContext from './context/CartContext'

export const ReactiveWallet = () => {

  const [cart, setCart] = useState([])

  const addItem = (id, qty) => {
    console.log('se recibe item id:', id, ' con cantidad: ', qty)
    const repeated = cart.some(item => item.id === id)
    console.log('repeated:', repeated)
    repeated
      ? setCart(cart.map(item => item.id === id && { ...item, qty: (item.qty + qty) }))
      : setCart([...cart, { id, qty }])
  }

  const clearCart = () => setCart([])

  return (
    <>
      <CartContext.Provider value={{ cart: cart, addItem: addItem, clearCart: clearCart }}>
        <RouterApp />
      </CartContext.Provider>
    </>
  )
}
