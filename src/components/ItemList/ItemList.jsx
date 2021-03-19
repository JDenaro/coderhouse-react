import React, { useState } from 'react'
import { Item } from '../Item/Item'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemList = (props) => {

    return (

        props.items.map(item => (
            <Item key={item.id} item={item} />

        ))




    )
}
