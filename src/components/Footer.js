import React from 'react';
import { Link  } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import PostCard from './PostCard';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
       <footer>
            <div className="footer-top footer-bg">
                <div className="newsletter-area">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="newsletter-wrap">
                        <div className="section-title newsletter-title">
                            <h2 className="title">Our <span>Newsletter</span></h2>
                        </div>
                        <div className="newsletter-form">
                            <form action="#">
                            <div className="newsletter-form-grp">
                                <i className="far fa-envelope" />
                                <input type="email" placeholder="Enter your email..." />
                            </div>
                            <button>SUBSCRIBE <i className="fas fa-paper-plane" /></button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row justify-content-between no-gutter footer-bottom-part">
                    <div className="col-xl-2 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="footer-logo mb-35">
                            <Link to="/"><img src="assets/img/logo/logo.png" alt="KATANA INU"/></Link>
                        </div>
                        <div className="footer-text">
                        <p>See you on the moon.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Products</h5>
                        </div>
                        <div className="fw-link">
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205">Pancakeswap</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15">Uniswap</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/katanainuwhitepaper.pdf">Whitepaper</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/roadmap.png">Roadmap</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/katanainutokenomics.pdf">Tokenomics</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/#">FAQ</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Need Help?</h5>
                        </div>
                        <div className="fw-link">
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="/#contact">Contact Us</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://discord.gg/sruA5AZPAS">Discord</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79">Medium</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/katanainu">Reddit</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://chainvisiongames.com">ChainVision Games</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-2 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Latest Posts</h5>
                        </div>
                        <PostCard/>
                    </div>
                    </div>
                    
                    <div className="col-xl-2 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Follow us</h5>
                        </div>
                        <div className="footer-social">
                            <SocialLinks/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-wrap s-copyright-wrap">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <div className="copyright-text text-center">
                        <p>Copyright © 2021 <a target="_blank" rel="noreferrer" href="https://chainvisiongames.com">ChainVision Games.</a> All Rights Reserved.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>

        )
    }
}

export default Footer;
