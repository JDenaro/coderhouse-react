import React, { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const handleAdd = () => {
        if (counter < 5) {
            setCounter(counter + 1)            
        }
    }

    const handleSubstract = () => {
        if (counter > 0) {
            setCounter(counter - 1)            
        }
    }

    return (
        <div className="cart-action">
            <button className="btn border" onClick={handleSubstract}>-</button>
            <input type="number" min="0" max={stock} className="text-center" value={counter} />
            <button className="btn border" onClick={handleAdd}>+</button>
        </div >
    )
}
