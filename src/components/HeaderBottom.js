import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './HeaderBottom.css';

class HeaderBottom extends React.Component{
    render(){
        return(
            <div id="sticky-header" className="header-four-wrap">
                <div className="container custom-container-two">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-menu menu-style-two">
                                <nav>
                                    <h1 className="logo"><Link to="/"><img loading="lazy" width={135} height={45} src={logo} className="custom-logo" alt="Katana Inu" /></Link><span className="screen-reader-text">Katana Inu</span></h1> 
                                    <div id="mobile-menu" className="navbar-wrap d-none d-lg-flex" style={{display: 'block'}}>
                                        <ul id="menu-categories-1" className="menu"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-178"><a href="/#gaming" aria-current="page">Gaming</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-179"><a href="/#tokenomics" aria-current="page">Tokenomics</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-180"><a href="/#why" aria-current="page">Why Katana Inu</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-181"><a href="/#roadmap" aria-current="page">roadmap</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-182"><a href="/#contact" aria-current="page">contact</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1334">
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                        </ul> 
                                    </div>
                                    <div className="header-action">
                                        <ul>
                                            <li className="header-search"><a href="/#" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search" /></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="mobile-menu"></div>
                        </div>
                        <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <form action="" method="get">
                                        <input type="search" name="s"/>
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HeaderBottom;
