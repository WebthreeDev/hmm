import React from 'react';
import './Footer.css';
import logo from '../images/footer-logo.png';

class Footer extends React.Component {
    render() {
        return (
            <footer className=''>
                <div className='footer-area-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='footer-newsletter'>
                                    <h2 className='section-title big-title'>
                                        OUR
                                        <span>NEWSLETTER</span>
                                    </h2>
                                    <div className="newsletter-form">
                                        <div>
                                            <div className="newsletter-form-grp">
                                                <i className="far fa-envelope" />
                                                <input type="email" name="EMAIL" placeholder="Your email address" required autoComplete="off" />
                                            </div>
                                            <button type="submit">SUBSCRIBE <i className="fas fa-paper-plane" /></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='row py-5 my-5'>
                            <div className='col-md-3 col-sm-12'>
                                <div className='footer-widget'>
                                    <div className='footer-logo mb-4'>
                                        <img src={logo} alt="KATANA INU"/>
                                    </div>
                                    <p className='footer-about'>See you on the moon</p>
                                </div>
                            </div>

                            <div className='col-md-3 col-sm-12'>
                                <div className='footer-widget'>
                                    <h2 className='footer-widget-title'>Katana Inu Menu</h2>
                                    <span className='divider'></span>
                                    <ul className='footer-widget-list'>
                                        <li><a hre="/#">Buy Katana Inu (Soon)</a></li>
                                        <li><a hre="/#">Whitepaper</a></li>
                                        <li><a hre="/#">Roadmap</a></li>
                                        <li><a hre="/#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-md-3 col-sm-12'>
                                <div className='footer-widget'>
                                    <span className='divider'></span>
                                    <ul className='footer-widget-list'>
                                        <li><a hre="/#">Contact Us</a></li>
                                        <li><a hre="/#">Discord</a></li>
                                        <li><a hre="/#">Medium</a></li>
                                        <li><a hre="/#">Reddit</a></li>
                                        <li><a hre="/#">ChainVision Games</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-md-3 col-sm-12'>
                                <div className='footer-widget'>
                                    <h2 className='footer-widget-title'>FOLLOW US</h2>
                                    <span className='divider'></span>
                                    <div className="footer-social">
                                        <span className="social-item">
                                            <a href="https://www.instagram.com/katanainu" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-instagram" /> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://www.facebook.com/Katanainu-104918325117822" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-facebook" /> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://www.t.me/katanainu" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-telegram" /> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://www.tiktok.com/@katanainu" target="_blank" rel='noreferrer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32"><path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" /></svg> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-medium" /> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://www.twitter.com/katanainu" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-twitter" /> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://www.youtube.com/katanainu" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-youtube" /> </a>
                                        </span>
                                        <span className="social-item">
                                            <a href="https://www.reddit.com/r/katanainu" target="_blank" rel='noreferrer'>
                                            <i className="fab fa-reddit" /> </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-area-bottom py-3'>
                    <h2 className="copyrights"><a href="http://www.chainvisiongames.com">Copyright © 2021 and a product of <span className="orange">ChainVision Games.</span> All Rights Reserved.</a></h2>
                </div>
            </footer>
        )
    }
}

export default Footer;
