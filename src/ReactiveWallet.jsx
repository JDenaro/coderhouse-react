import React, { useState } from 'react'
import { RouterApp } from './routes/RouterApp';

export const ReactiveWallet = () => {

  const [cart, setCart] = useState([])
  return (
    <>
      <RouterApp />
    </>
  )
}
