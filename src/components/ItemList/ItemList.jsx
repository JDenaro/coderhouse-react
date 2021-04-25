import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Item } from '../Item/Item'
import './ItemList.css'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemList = (props) => {
    const { cat } = useParams()
    const [category, setCategory] = useState('all')
    let catItems = []

    useEffect(() => {
        // console.log('entando en useEffect, el estado es:', category)
        // console.log('entando en useEffect, categoria es:', cat)
        if (cat === undefined) {
            setCategory('all')
        } else {
            setCategory(cat)
        }

    }, [cat])

    category === 'all' ? catItems = props.items : catItems = props.items.filter(item => item.category === category)

    return (
        <>
            <div className="d-flex justify-content-center pb-3 w-100">
                <Link to="/shop/category/all">
                    <button className="menu-filter mx-2 btn btn-success">
                        All
                    </button>
                </Link>
                <Link to="/shop/category/wallets">
                    <button className="menu-filter mx-2 btn btn-success">
                        Hardware Wallets
                    </button>
                </Link>
                <Link to="/shop/category/accessories">
                    <button className="menu-filter mx-2 btn btn-success">
                        Accesories
                    </button>
                </Link>
            </div>
            {

                catItems.map(item => (
                    <Item key={item.id} item={item} category={category} />

                ))
            }



        </>
    )
}
