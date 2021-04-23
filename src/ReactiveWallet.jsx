import React, { useContext, useEffect, useState } from 'react'
import { RouterApp } from './routes/RouterApp';
import CartContext from './context/CartContext'

export const ReactiveWallet = () => {

  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const [cartItemCount, setCartItemCount] = useState(0)


  const addItem = (id, qty, price, manufacturer, title) => {
    let total = 0
    console.log('se recibe item id:', id, ' con cantidad: ', qty)
    const repeated = cart.some(item => item.id === id)
    console.log('repeated:', repeated)
    repeated
      ? setCart(cart.map(item => item.id === id ? { ...item, qty: qty } : item))
      : setCart([...cart, { id, qty, price, manufacturer, title }])
    // setCartTotal(parseInt(cart.map(item => total += item.qty * item.price)).toFixed(2))

  }

  const removeItem = (itemId) => {
    console.log(`se recibio id ${itemId} para eliminar`)
    setCart(cart.filter(item => item.id !== itemId))
    // let total = 0
    // cart.length > 0 && setCartTotal(parseInt(cart.map(item => total += item.qty * item.price)).toFixed(2))
  }

  const calculateTotal = () => {
    if (cart.length > 0) {
      console.log('Calculando total')
      let aux = 0
      cart.map(item => aux += item.qty * item.price)
      setCartTotal(aux)
    }
  }

  const clearCart = () => {
    console.log('Clearing cart')
    setCart([])
    console.log('Cart:', cart)
  }


  return (
    <>
      <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, cartItemCount, cartTotal, setCartTotal, calculateTotal }}>
        <RouterApp />
      </CartContext.Provider>
    </>
  )
}
