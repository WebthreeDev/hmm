import React from 'react';
import './Features.css';

class Features extends React.Component {
    render() {
        return (
            <section className="features-area" id="mission">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="section-title text-center">
                                <h2 className="title">You want to stake your <span>$KATA</span> Token?</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-6 text-center m-auto'>
                            <p className='text-dark'>You can stake on Binance Smart chain and Ethereum Network.</p>
                            <a 
                            className='btn btn-style-two' 
                            href='https://staking.katanainu.com/' 
                            target="_blank" 
                            rel='noreferrer'>
                                Go Here
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-xl-7 col-lg-9">
                        <div className="section-title text-center mb-50">
                        <span className="sub-title">OUR FEATURES</span>
                        <h2 className="title">WHY <span>KATANA INU</span> TOKEN</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-9">
                        <div className="features-item text-center">
                        <div className="features-icon">
                            <img src="assets/img/icon/features_icon01.png" alt="FAUTURE" />
                        </div>
                        <div className="features-content">
                            <h4 className="title">High Graphics PC-Game</h4>
                            <p>It will be a high end PC Game where you can buy NFT Items directly in the Game. These iIems can
be purchased with Katana Inu Tokens through our NFT System. All revenues from the Game will be
reinvested directly into the Katana Inu Platform to increase Market Cpitalization. These Katana Inu
Games are currently in development and will be released to the Public soon.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-9">
                        <div className="features-item text-center">
                        <div className="features-icon">
                            <img src="assets/img/icon/features_icon02.png" alt="FAUTURE" />
                        </div>
                        <div className="features-content">
                            <h4 className="title">NFT Marketplace</h4>
                            <p>We are creating our Marketplace for buying and selling Digital Arts and in-Game skins. We are in
collaboration with some of the most talented Digital Artists in the World and we’ll help get the best
Deals for buying and selling their Products with Katana Inu Tokens. Our NFT Marketplace also will
be connected to our Games, allowing for transaction of In-Game Items.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-9">
                        <div className="features-item text-center">
                        <div className="features-icon">
                            <img src="assets/img/icon/features_icon03.png" alt="FAUTURE" />
                        </div>
                        <div className="features-content">
                            <h4 className="title">Staking &amp; in-Game Rewards</h4>
                            <p>Katana Inu allows you to use Coins directly in the Game and Earn passive Income. While playing
the Game, you can also earn Money. Also, In-Game Rewards are distributed to the Players. With
our Play2Earn Mechanism, we have cool Tournaments where you can participate and win $KATA
Tokens. So buckle up, we are coming to Rock your World with the best Play2Earn and Free2Play
Games.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Features
