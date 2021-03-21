import React from 'react'
import './ItemSpinner.css'

export const ItemSpinner = () => {
    return (
        <div className="item d-flex border rounded mb-4 bg-white w-100 py-5">
            <div className="col-12 py-4">
                <div class="sk-folding-cube">
                    <div class="sk-cube1 sk-cube"></div>
                    <div class="sk-cube2 sk-cube"></div>
                    <div class="sk-cube4 sk-cube"></div>
                    <div class="sk-cube3 sk-cube"></div>
                </div>
                <h4 className="text-center mt-3">Cargando</h4>
            </div>
        </div>
    )
}