import React, { useEffect, useState } from 'react'

import add_shopping_cart from '../../assets/icons/add-shopping-cart.svg';
import { ItemList } from '../ItemList/ItemList';
import { ItemSpinner } from '../ItemSpinner/ItemSpinner';
import './ItemListContainer.css';
import shop_banner from '../../assets/images/shop_banner.png'
import { products } from '../../assets/data/products';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../configs/firebase';


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    // firebase
    useEffect(() => {
        const db = getFirestore();
        const categoriasCollection = db.collection("items");

        categoriasCollection
            .get()
            .then((resp) => {
                if (resp.size === 0) {
                    console.log("Sin datos");
                } else {
                    let arr = []
                    resp.docs.map((c) => arr.push({ id: parseInt(c.id), ...c.data() }));
                    setItems(arr)
                    console.log(items)
                }

            })
            .catch((error) => console.log(error));
    }, []);

    return (

        <div className="container">
            <div className="row mt-3">
                <div className="col-12 banner mb-3 rounded">
                    <img src={shop_banner} alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                    <div className="row">
                        {
                            items.length < 1 ? <ItemSpinner /> : <ItemList items={items} />
                        }

                    </div>
                </div>
                <div className="col-4 porquillo">
                    <div className="cart-wrapper">
                        <div className="card border p-3 ">
                            <img src={add_shopping_cart} className="addCart align-self-center" />
                            <div className="card-body text-secondary text-center">
                                <h5 className="card-title">Cart empty</h5>
                                <p className="card-text">An empty cart is a sad cart :(</p>
                                <p className="card-text">Add some happiness!</p>
                            </div>
                        </div>
                        {/* <div data-v-05e8b5a6="" class="card payment-info background-art mt-3">
                            <div data-v-05e8b5a6="" class="columns">
                                <div data-v-05e8b5a6="" class="column col-8">
                                    <address data-v-05e8b5a6="">
                                        <div data-v-05e8b5a6="">
                                            <strong data-v-05e8b5a6="">SatoshiLabs s.r.o.</strong>
                                        </div>
                                        <div data-v-05e8b5a6="">Kundratka 2359/17a</div>
                                        <div data-v-05e8b5a6="">180 00 Prague 8</div>
                                        <div data-v-05e8b5a6="">Czech Republic</div>
                                        <div data-v-05e8b5a6="">Company ID: 02440032</div>
                                        <div data-v-05e8b5a6="">+420 774 555 756</div>
                                        <div data-v-05e8b5a6=""><a data-v-05e8b5a6="" href="https://trezor.io/support/" title="Contact Us" target="_blank" class="link-dimmed">support@satoshilabs.com</a>
                                        </div>
                                    </address>
                                </div>
                            </div>
                            <div data-v-05e8b5a6="" class="columns">
                                <div data-v-05e8b5a6="" class="column col-8">
                                    <div data-v-05e8b5a6="" class="payment-info-items"><
                                        div data-v-05e8b5a6="" class="card-icon GoPay"></div>
                                        <div data-v-05e8b5a6="" class="card-icon btc"></div>
                                    </div> <div data-v-05e8b5a6="" class="learn-more-button">
                                        <a data-v-05e8b5a6="" href="/faq" title="Visit our FAQ">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
