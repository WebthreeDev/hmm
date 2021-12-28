import React from 'react';
import './Features.css';

class Features extends React.Component {
    render() {
        return (
            <section className="features-area" id="features">
                <div className="container">
                    <div className="row justify-content-center">
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
                            <p>We will build high-end PC-GAMES with various buyable in-game NFT items. These items can be purchased with the Katana Inu token through our NFT system. The revenue earned from our games is reinvested into the Katana Inu platform to boost its market cap. These Katana Inu games are currently in development and will be released to the public soon.</p>
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
                            <p>We are creating our Marketplace for buying and selling Digital Arts and in-game skins. We are in collaboration with some of the most talented Digital Artists in the world and we’ll help get the best deals for buying and selling their products with Katana Inu tokens. Our NFT Marketplace also will be connected to our games, allowing for transaction of in-game items.</p>
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
                            <p>Katana Inu allows you to stake your coins and generate passive income. You can also earn money while playing the game and In-game rewards will be distributed to gamers. With our play2earn mechanism we have super cool tournaments in which you can take part and win handsome amounts of $KATA tokens. So put on your seat belts, we are coming to rock your world with the best play2earn and free2play games.</p>
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
