import React from 'react';
import './Features.css';
import feature1 from '../images/gameplayorg.png';
import feature2 from '../images/nftartorg.png';
import feature3 from '../images/charitorgy.png';

class Features extends React.Component {
    render() {
        return (
            <div className='features-area py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className="section-title sm-title mb-3 mt-5">OUR FEATURES</h2>
                            <h2 className="section-title big-title">
                                WHY <span>KATANA INU</span> TOKEN
                            </h2>
                            <span className="divider"></span>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div className='feature-box'>
                                <div className='feature-box-img'>
                                    <img src={feature1} alt="Feature"/>
                                </div>
                                <h2 className='feature-title mt-3'>AAA PC Game</h2>
                                <p className='feature-contents mt-3'>We will build high-end PC-GAMES with various buyable in-game NFT items. These items can be purchased with the Katana token through our NFT system. The revenue accrued from our games is reinvested into the Katana Inu platform to boost its market cap. These Katana Inu games are currently in development and will be released to the public soon.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='feature-box'>
                                <div className='feature-box-img'>
                                    <img src={feature2} alt="Feature"/>
                                </div>
                                <h2 className='feature-title mt-3'>NFT Marketplace</h2>
                                <p className='feature-contents mt-3'>We are creating our Marketplace for buying and selling Digital Arts and in-game skins. We are in collaboration with some of the most talented Digital Artists in the world and we’ll help get the best deals for buying and selling their products with Katana Inu tokens. Our NFT Marketplace also will be connected to our games, allowing for transaction of in-game items.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='feature-box'>
                                <div className='feature-box-img'>
                                    <img src={feature3} alt="Feature"/>
                                </div>
                                <h2 className='feature-title mt-3'>Staking & in-Game Rewards</h2>
                                <p className='feature-contents mt-3'>Katana Inu allows you to stake your coins and generate passive income. You can also earn money while playing the game with In-game rewards will also be distributed to gamers. With our play2earn mechanism we have super cool tournaments in which you can take part and win hamdsome amount of $KATA tokens. So put on your seat belts we are coming to rock your world with best play2earn and free 2 play game.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none">
                    <path d="M350,10L340,0h20L350,10z"></path>
                </svg>
            </div>
        )
    }
}

export default Features
