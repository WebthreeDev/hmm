import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

class Header extends React.Component {
    componentDidMount(){
        //Mobile Nav Hide Show
        if ($('.mobile-menu').length) {

            var mobileMenuContent = $('.menu-area .main-menu').html();
            $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

            //Dropdown Button
            $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(500);
            });
            //Menu Toggle Btn
            $('.mobile-nav-toggler').on('click', function () {
                $('body').addClass('mobile-menu-visible');
            });

            //Menu Toggle Btn
            $('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
                $('body').removeClass('mobile-menu-visible');
            });
        }

        /*=============================================
            =            Header Search            =
        =============================================*/
        $(".header-search > a").on('click', function () {
            $(".search-popup-wrap").slideToggle();
            return false;
        });

        $(".search-close").on('click', function () {
            $(".search-popup-wrap").slideUp(500);
        });
    }
    
    render(){
        return(
            <header>
                <div className="header-top-area">
                    <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-lg-6 d-none d-lg-block">
                        <div className="header-top-offer">
                            <p>SALE COMING SOON - We are still working on Samurai Inu</p>
                        </div>
                        </div> */}
                        <div className="col-lg-6 m-auto">
                        <div className="header-social">
                            <span>Follow us on :</span>
                            {/* <ul>
                            <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
                            <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                            </ul> */}
                            <SocialLinks/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="sticky-header" className="menu-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                            <div className="logo">
                                <Link to="/"><img src="assets/img/logo/logo.png" alt="Samurai Inu" /></Link>
                            </div>
                            <div className="navbar-wrap main-menu d-none d-lg-flex">
                                <ul className="navigation">
                                <li className="active"><a href="/#">Gaming</a></li>
                                <li><a target="_blank" rel="noreferrer" href="/SamuraiInuERCtokenomics.pdf">Tokenomics</a></li>
                                <li><a target="_blank" rel="noreferrer" href="/SamuraiInuERCwhitepaper.pdf">Whitepaper</a></li>
                                <li><a href="/#roadmap">Roadmap</a></li>
                                <li><a href="/#contact">contact</a></li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                </ul>
                            </div>
                            {/* <div className="header-action d-none d-sm-block">
                                <ul>
                                <li className="header-search"><a href="/#"><i className="fas fa-search" /></a></li>
                                </ul>
                            </div> */}
                            </nav>
                        </div>
                        {/* Mobile Menu  */}
                        <div className="mobile-menu">
                            <nav className="menu-box">
                            <div className="close-btn"><i className="fas fa-times" /></div>
                            <div className="nav-logo"><Link to="/"><img src="assets/img/logo/logo.png" alt="Samurai Inu" title="Samurai Inu"/></Link>
                            </div>
                            <div className="menu-outer">
                                {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                            </div>
                            <div className="social-links">
                                {/* <ul className="clearfix">
                                <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                                <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                                <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                                <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                                <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                                </ul> */}
                                <SocialLinks className="clearfix"/>
                            </div>
                            </nav>
                        </div>
                        <div className="menu-backdrop" />
                        {/* End Mobile Menu */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* header-search */}
                {/* <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="search-close"><i className="fas fa-times" /></div>
                    <div className="search-wrap text-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <h2 className="title">... Search Here ...</h2>
                            <div className="search-form">
                            <form action="#">
                                <input type="text" name="search" placeholder="Type keywords here" />
                                <button className="search-btn"><i className="fas fa-search" /></button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
            </header>

        );
    }
}

export default Header;
