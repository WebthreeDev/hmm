import React from 'react';
import './HeaderTopBar.css';

class HeaderTopBar extends React.Component {
    
    render(){
        return (
            <div className="header-top-area s-header-top-area d-none d-lg-block">
                <div className="container custom-container-two">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="header-top-offer">
                                <p>SALE COMING SOON - We are still working on Katana Inu</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-social">
                                <span>Follow us on :</span>
                                <ul>
                                    <li>
                                    <a href="https://www.instagram.com/katanainu/">
                                        <i aria-hidden="true" className="fab fa-instagram" /> </a>
                                    </li>
                                    <li>
                                    <a href="https://twitter.com/katanainu">
                                        <i aria-hidden="true" className="fab fa-twitter" /> </a>
                                    </li>
                                    <li>
                                    <a href="https://t.me/katanainu">
                                        <i aria-hidden="true" className="fab fa-telegram-plane" /> </a>
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com/company/74030427">
                                        <i aria-hidden="true" className="fab fa-linkedin-in" /> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HeaderTopBar
