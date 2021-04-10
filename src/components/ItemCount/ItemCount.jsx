import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import add from "../../assets/icons/add.svg"
import remove from "../../assets/icons/remove.svg"
import CartContext from "../../context/CartContext"

export const ItemCount = ({ initial, stock, id, price, manufacturer, title }) => {

    const context = useContext(CartContext)

    const [counter, setCounter] = useState(initial)

    const [finish, setFinish] = useState(false)

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            setFinish(false)
        }
    }

    const handleSubstract = () => {
        if (counter > 0) {
            setCounter(counter - 1)
            setFinish(false)
        }
    }

    const onAdd = (e) => {
        // e.preventDefault();
        if (counter != 0) {
            setFinish(true);

        } else {
            alert('Cantidad no puede ser 0')
        }
    }


    return (
        <>
            {console.log("el context es:", context)}
            <div className="d-flex justify-content-between align-items-center">
                <div className="border rounded">
                    <button className="btn" onClick={handleSubstract}><img src={remove} /></button>
                    <input type="number" min="0" max={stock} className="text-center" value={counter} />
                    <button className="btn" onClick={handleAdd}><img src={add} /></button>
                </div>
                <div className="d-block py-auto"><p className="m-0">Stock: {stock}</p></div>
            </div >
            <button className={`btn btn-success px-4 py-2 mt-3 mx-1 ${counter > 0 ? "" : "disabled"}`} onClick={() => { context.addItem(id, counter, price, manufacturer, title); onAdd() }}>Add to cart</button>
            <NavLink to="/cart">
                <button className={`btn btn-success px-4 py-2 mt-3 mx-1 ${!finish ? "d-none" : ""}`}>Finish purchase</button>
            </NavLink>

        </>
    )
}
