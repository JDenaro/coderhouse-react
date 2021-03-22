import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ItemDetail = (props) => {
    return (
        <>
            <p>Item Detail con id {props.items.id}</p>
            <p>{props.items.id}</p>
            <p>{props.items.title}</p>
            <p>{props.items.manufacturer}</p>
            <p>{props.items.price}</p>
            <p>{props.items.pictureUrl}</p>
            <p>{props.items.description}</p>
            <p>{props.items.stock}</p>
        </>
    )
}
