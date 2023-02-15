import React from 'react';
import { Link  } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import PostCard from './PostCard';
import Newsletter from './Newsletter';
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
                        <Newsletter/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row justify-content-between no-gutter footer-bottom-part">
                    <div className="col-xl-2 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="footer-logo mb-35">
                            <Link to="/"><img src="assets/img/logo/logo.png" alt="Samurai Inu"/></Link>
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
                            <li><a target="_blank" rel="noreferrer" href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x000&chain=mainnet">Uniswap</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/SamuraiInuERCwhitepaper.pdf">Whitepaper</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/roadmap.png">Roadmap</a></li>
                            <li><a target="_blank" rel="noreferrer" href="/SamuraiInuERCtokenomics.pdf">Tokenomics</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://raritysniper.com/">NFT Rarity</a></li>
                            <li><Link to='/faq'>Faq</Link></li>
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
                            <li><a target="_blank" rel="noreferrer" href="https://www.discord.gg/SamuraiInuERC">Discord</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://medium.com/@SamuraiInuERC">Medium</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/SamuraiInuERC">Reddit</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://chainvisiongames.com">ChainVision Games</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://claim.SamuraiInuERC.com">Claim your token</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://staking.SamuraiInuERC.com">Stake your $Samurai</a></li>
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
