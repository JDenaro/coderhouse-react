import React from 'react'
import { Link } from 'react-router-dom';
import blockchain from '../../assets/video/blockchain2.mp4'
import './Home.css';

export const Home = () => {
    return (
        <>
            <div className="video">
                <video autoPlay muted loop id="myVideo" className="video-responsive">
                    <source src={blockchain} type="video/mp4" />
                </video>
                <div className="video-content">
                    <div className="glass text-center border rounded p-3 px-5 animate__animated animate__fadeIn animate__slow animate__delay-2s">
                        <h1>Your crypto is only safe</h1>
                        <h1 className="mb-3">with YOU</h1>

                        <p className="mb-3">Hold your crypto with maximum security</p>
                        <div className="badges mb-3">
                            <a><img src="https://trezor.io/static/images/coins/btc.svg" alt="" data-toggle="tooltip" data-title="Bitcoin" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/eth.svg" alt="" data-toggle="tooltip" data-title="Ethereum" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/bnb.svg" alt="" data-toggle="tooltip" data-title="Binance Coin" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/etc.svg" alt="" data-toggle="tooltip" data-title="Ethereum Classic" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/ltc.svg" alt="" data-toggle="tooltip" data-title="Litecoin" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/dash.svg" alt="" data-toggle="tooltip" data-title="Dash" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/zcash.svg" alt="" data-toggle="tooltip" data-title="Zcash" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/xem.svg" alt="" data-toggle="tooltip" data-title="NEM" data-original-title="" title="" /></a>
                            <a>and more!</a>
                        </div>
                        <Link to="/shop">
                            <button className="btn btn-success">Get my wallet</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}
