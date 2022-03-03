import React, { Component } from 'react';
import './Nft.css';

export class Nft extends Component {
    fireMintButton(){
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec':'mint'
                }
            }
        });

        console.log(window.dotq)
    }
    
    render() {
        return (
            <section className="mission-area">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                    <div className="mission-img text-center mission_gif">
                        <img src="assets/img/images/38431.gif" alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="section-title mb-20 mint_title mt-30 text-center">
                        <h2 className="title"><span>Katana Inu</span> NFT-Gaming</h2>
                        <p className='text-white mt-3 comming-soon-title'>COMING SOON JOIN DISCORD FOR WHITELIST</p>
                    </div>
                    <div className="mission-content text-center c_buy_d">
                        <p>You can purchase our Katana Inu Token on <span>Uniswap</span> and <span>exchanges</span>. Check <a target="_balnk" rel="noreferrer" href="https://coinmarketcap.com/de/currencies/katana-inu/ ">coinmarketcap</a>.
We will lead this huge Project to create massive Value in the Cryptocurrency Space. Soon we are selling our NFTs join us on discord:
                        </p>
                        <div className="mt-10 c_price">Current Price</div>
                        <h3 className="c_rate font-weight-bold">1 NFT = 0.1 ETH / max 3 NFT per wallet</h3>
                        {/* <ul className="mint_nft">
                        <li><a href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205" target="_blank" rel="noreferrer"><img src="assets/img/images/a.png" alt="Nft" /></a></li>
                        <li><a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer"><img src="assets/img/images/b.png" alt="Nft" /></a></li>
                        </ul> */}

                        <a className="btn mt-4 d-flex align-items-center w-50 m-auto nft-btn" target="_blank" rel="noreferrer" href='https://discord.com/invite/katanainu'><i className="fab fa-discord mr-3" style={{ fontSize:'40px', marginRight:'10px'}}></i> <span>Join Discord Now</span></a>
                        <a className="btn mt-4 d-block w-50 m-auto nft-btn" href="https://nft.katanainu.com">Go to NFT Page</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Nft
