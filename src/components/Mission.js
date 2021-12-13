import React from 'react';

class Mission extends React.Component {
    render() {
        return (
            <section className="mission-area">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <div className="mission-img text-center">
                        <img src="assets/img/images/mission_img.jpg" alt="KATANA INU" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-45">
                        <span className="sub-title">Our Ecosystem with Katana Inu</span>
                        <h2 className="title"><span>GAMING</span> MOON MISSION</h2>
                        </div>
                        <div className="mission-content">
                        <p>Gaming is our passion. This is why we developed Katana Inu, to serve as a platform to help drive innovation in the
                            gaming sector by effectively combining gaming and blockchain technology. With a team of entrepreneurs from Germany, we
                            will lead this huge project to create massive value in the cryptocurrency space.
                            <br />
                            Our vision is to develop modern high-end games that will increase the value of Katana Inu for our community. These games will be incorporated into the decentralized ecosystem through an NFT-Marketplace for Digital-Arts, allowing players to turn skins into valuable NFTs. These NFT-Skins can be used in-game or can be sold for ethereum or katana inu token. Read the whitepaper for more information.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Mission;
