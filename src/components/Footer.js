import React from 'react';
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
                <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="footer-logo mb-35">
                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="KATANA INU"/></a>
                        </div>
                        <div className="footer-text">
                        <p>See you on the moon.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Products</h5>
                        </div>
                        <div className="fw-link">
                        <ul>
                            <li><a href="/#">Buy Katana Inu (Soon)</a></li>
                            <li><a href="/#">Whitepaper</a></li>
                            <li><a href="/#">Roadmap</a></li>
                            <li><a href="/#">FAQ</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Need Help?</h5>
                        </div>
                        <div className="fw-link">
                        <ul>
                            <li><a href="/#">Contact Us</a></li>
                            <li><a href="/#">Discord</a></li>
                            <li><a href="/#">Medium</a></li>
                            <li><a href="/#">Reddit</a></li>
                            <li><a href="/#">ChainVision Games</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-25">
                        <h5 className="title">Follow us</h5>
                        </div>
                        <div className="footer-social">
                        <ul>
                            <li><a href="/#"><i className="fab fa-instagram" /></a></li>
                            <li><a href="/#"><i className="fab fa-facebook" /></a></li>
                            <li><a href="/#"><i className="fab fa-telegram" /></a></li>
                            <li><a href="/#"><i className="fab fa-tiktok" /></a></li>
                            <li><a href="/#"><i className="fab fa-medium" /></a></li>
                            <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="/#"><i className="fab fa-youtube" /></a></li>
                            <li><a href="/#"><i className="fab fa-reddit" /></a></li>
                        </ul>
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
                        <p>Copyright © 2021 <a href="/#">ChainVision Games.</a> All Rights Reserved.</p>
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
