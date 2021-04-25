import React from 'react'
import './ItemSpinner.css'

export const ItemSpinner = () => {
    return (
        <div className="item-spinner d-flex bg-transparent w-100 py-5">
            <div className="col-12 py-4">
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
                <h4 className="text-center mt-3">Cargando</h4>
            </div>
        </div>
    )
}
