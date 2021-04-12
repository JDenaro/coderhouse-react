import React, { useEffect, useState } from 'react'
import { RouterApp } from './routes/RouterApp';
import CartContext from './context/CartContext'
import { getFirestore } from './configs/firebase';

export const ReactiveWallet = () => {

  const [cart, setCart] = useState([])

  const [cartItemCount, setCartItemCount] = useState(0)

  const addItem = (id, qty, price, manufacturer, title) => {
    console.log('se recibe item id:', id, ' con cantidad: ', qty)
    const repeated = cart.some(item => item.id === id)
    console.log('repeated:', repeated)
    repeated
      ? setCart(cart.map(item => item.id === id ? { ...item, qty: (item.qty + qty) } : item))
      : setCart([...cart, { id, qty, price, manufacturer, title }])
  }

  const removeItem = (itemId) => {
    console.log(`se recibio id ${itemId} para eliminar`)
    setCart(cart.filter(item => item.id != itemId))
  }

  const clearCart = () => {
    console.log('Clearing cart')
    setCart([])
    console.log('Cart:', cart)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, cartItemCount }}>
        <RouterApp />
      </CartContext.Provider>
    </>
  )
}
