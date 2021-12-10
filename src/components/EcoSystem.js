import React from 'react';
import './EcoSystem.css';
import katanainu00 from '../images/katanainu00.jpg';
import katanainu01 from '../images/katanainu01.png';

class EcoSystem extends React.Component {
    render() {
        return (
            <section className="eco-system py-5">
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-md-6">
                            <div className="katanainu-left">
                                <h2 className="section-title sm-title mb-3">Our Ecosystem with Katana Inu</h2>
                                <h2 className="section-title big-title">
                                    <span>GAMING </span>
                                    MOON MISSION
                                </h2>
                                <span className="divider"></span>
                                <p className="eco-contents">Gaming is our passion, and this is why we developed Katana Inu; to serve as a platform to help drive innovation in the gaming sector by effectively combining gaming and blockchain technology. With team of enterpreneur from germany, we will lead this huge project to create a huge value in the cryptocurrency space. <br/><br/>Our vision is to develop modern high-end games that will increase the value of Katana Inu for our community. These games will be incorporated into the decentralized ecosystem through NFT-Marketplace for Digital-Arts, allowing players to turn skins and into valuable NFTs. These NFT-Skins can be used in-game or can be sold for ethereum or katana inu token.
                                Read the whitepaper for more information.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="katanainu-eco-img">
                                <img src={katanainu00} alt="katanainu"/>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5 mt-5 flex-row-reverse">
                        <div className="col-md-6">
                            <div className="katanainu-left">
                                <h2 className="section-title sm-title mb-3">Our Ecosystem with Katana Inu</h2>
                                <h2 className="section-title big-title">
                                    WORLD GAMING
                                    <span> VALUE</span>
                                </h2>
                                <span className="divider"></span>
                                <p className="eco-contents">Gaming is our passion, and this is why we developed Katana Inu; to serve as a platform to help drive innovation in the gaming sector by effectively combining gaming and blockchain technology. With team of enterpreneur from germany, we will lead this huge project to create a huge value in the cryptocurrency space. <br/><br/>Our vision is to develop modern high-end games that will increase the value of Katana Inu for our community. These games will be incorporated into the decentralized ecosystem through NFT-Marketplace for Digital-Arts, allowing players to turn skins and into valuable NFTs. These NFT-Skins can be used in-game or can be sold for ethereum or katana inu token.
                                Read the whitepaper for more information.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="katanainu-eco-img">
                                <img src={katanainu01} alt="katanainu"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EcoSystem;
