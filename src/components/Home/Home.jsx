import React from 'react'
import { Link } from 'react-router-dom';
import blockchain from '../../assets/video/blockchain2.mp4'
import shieldIcon from '../../assets/icons/shield.svg';
// import './Home.css';

export const Home = () => {
    return (
        <>
            <div className="video">
                <video autoPlay muted loop id="myVideo" className="video-responsive">
                    <source src={blockchain} type="video/mp4" />
                </video>
                <div className="video-content">
                    <div className="glass text-center border rounded p-3 px-5 animate__animated animate__fadeIn animate__slow animate__delay-2s">
                        <img src={shieldIcon} className="logo align-self-center" alt="logo" />
                        <h1 className="h1-home">Your crypto is only safe</h1>
                        <h1 className="mb-3">with YOU</h1>

                        <p className="mb-3">Hold your crypto with maximum security</p>
                        <div className="badges mb-3">
                            <a><img src="https://trezor.io/static/images/coins/btc.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Bitcoin" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/eth.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Ethereum" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/bnb.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Binance Coin" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/etc.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Ethereum Classic" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/ltc.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Litecoin" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/dash.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Dash" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/zcash.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="Zcash" data-original-title="" title="" /></a>
                            <a><img src="https://trezor.io/static/images/coins/xem.svg" className="crypto-icon" alt="" data-toggle="tooltip" data-title="NEM" data-original-title="" title="" /></a>
                            <a>and more!</a>
                        </div>
                        <Link to="/shop">
                            <button className="btn btn-success px-4 py-2">I want my wallet</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}
