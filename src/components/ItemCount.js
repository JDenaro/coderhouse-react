import React, { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    return (
        <div className="cart-action">
            <button className="btn btn-trigger first">-</button>
            <input type="number" min="0" max={stock} className="text-center" placeholder={initial} />
            <button className="btn btn-trigger last">+</button>
        </div >
    )
}
