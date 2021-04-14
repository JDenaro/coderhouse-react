import React from 'react'
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
                    <h1>Your coins are only safe</h1>
                    <h1>with YOU</h1>

                    <p>Hold your crypto with maximum security</p>
                    <div className="badges">
                        <a href="./coins/#BTC"><img src="https://trezor.io/static/images/coins/btc.svg" alt="" data-toggle="tooltip" data-title="Bitcoin" data-original-title="" title="" /></a>
                        <a href="./coins/#LTC"><img src="https://trezor.io/static/images/coins/ltc.svg" alt="" data-toggle="tooltip" data-title="Litecoin" data-original-title="" title="" /></a>
                        <a href="./coins/#BNB"><img src="https://trezor.io/static/images/coins/bnb.svg" alt="" data-toggle="tooltip" data-title="Binance Coin" data-original-title="" title="" /></a>
                        <a href="./coins/#DASH"><img src="https://trezor.io/static/images/coins/dash.svg" alt="" data-toggle="tooltip" data-title="Dash" data-original-title="" title="" /></a>
                        <a href="./coins/#ZEC"><img src="https://trezor.io/static/images/coins/zcash.svg" alt="" data-toggle="tooltip" data-title="Zcash" data-original-title="" title="" /></a>
                        <a href="./coins/#XEM"><img src="https://trezor.io/static/images/coins/xem.svg" alt="" data-toggle="tooltip" data-title="NEM" data-original-title="" title="" /></a>
                        <a href="./coins/#ETH"><img src="https://trezor.io/static/images/coins/eth.svg" alt="" data-toggle="tooltip" data-title="Ethereum" data-original-title="" title="" /></a>
                        <a href="./coins/#ETC"><img src="https://trezor.io/static/images/coins/etc.svg" alt="" data-toggle="tooltip" data-title="Ethereum Classic" data-original-title="" title="" /></a>
                        <a href="./coins/" className="arrow-gray list" >
                            +1000 more
                        <img src="/static/images/arrow-right.svg#default" className="svg" width="14" height="9" />
                            <img src="/static/images/arrow-right.svg#hover" className="svg hover" width="14" height="9" />
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
}
