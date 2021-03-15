import React, { useState } from 'react'
import add from "../assets/icons/add.svg"
import remove from "../assets/icons/remove.svg"

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
        <div className="d-flex justify-content-between align-items-center">
            <div className="border rounded">
                <button className="btn" onClick={handleSubstract}><img src={remove} /></button>
                <input type="number" min="0" max={stock} className="text-center" value={counter} />
                <button className="btn" onClick={handleAdd}><img src={add} /></button>
            </div>
            <div className="d-block py-auto"><p>Stock: {stock}</p></div>
            
        </div >
    )
}
