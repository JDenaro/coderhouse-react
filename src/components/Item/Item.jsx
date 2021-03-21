import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = (props) => {
    return (
        <div>
            <div className="item d-flex border rounded mb-4 bg-white">
                <div className="col-5 py-4 d-flex justify-content-center">
                    <img src={props.item.pictureUrl} alt="{props.item.title}" className="img-fluid" style={{ maxWidth: 300 }} />
                </div>
                <div className="col-7">
                    <div className="card-block py-3 px-3">
                        <h4 className="card-title">{props.item.title}</h4>
                        <p className="card-text">{props.item.description}</p>
                        {<ItemCount initial={1} stock={5} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
