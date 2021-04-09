import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css';
export const Item = (props) => {

    const onAdd = () => {
        // console.log(`Adding ${props.item.title} to your cart`)
    }

    return (
        <div className="item d-flex border rounded mb-4 bg-white animate__animated animate__fadeIn">
            <div className="col-5 py-4 d-flex justify-content-center">
                <Link to={`/shop/item/${props.item.id}`}>
                    <img src={props.item.pictureUrl} alt="{props.item.title}" className="img-fluid" style={{ maxWidth: 300, maxHeight: 300 }} />
                </Link>
            </div>
            <div className="col-7">
                <div className="card-block py-3 pr-3">
                    <Link to={`/shop/item/${props.item.id}`}>
                        <h4 className="card-title mb-3">{props.item.manufacturer} <span>{props.item.title}</span></h4>
                    </Link>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link to={`/shop/item/${props.item.id}`}>
                            <button className="btn btn-success px-4 py-2" onClick={onAdd}>Add to cart</button>
                        </Link>
                        <p className="m-0">{props.item.price} USD</p>
                    </div>

                    <p className="card-text">{props.item.description}</p>

                </div>
            </div>
        </div>
    )
}
