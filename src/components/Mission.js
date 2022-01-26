import React from 'react';

class Mission extends React.Component {
    render() {
        return (
            <section className="mission-area" id="mission">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <div className="mission-img text-center">
                        <img src="assets/img/images/mission_img.jpg" alt="KATANA INU" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-45">
                        <span className="sub-title">Katana Inu</span>
                                <h2 className="title"><span>Unleash</span> The Warrior Inside</h2>
                        </div>
                        <div className="mission-content">
                                <p>Katana Inu is a battle royale & play2earn multiplayer game with NFT-skins in an interactive open world map. We will develop Katana Inu, to serve as a platform to help drive innovation in the gaming sector by effectively combining traditional gaming and blockchain technology with NFTs.
                            <br />
                                    Unleash your inner spirit animal as a blockchain lover. Own and show off your inner warrior with Katana Inu NFTs. Katana Inu comes with an NFT collection model with over 10,000 NFTs for the community. Every character in the game has a unique skill set and hidden abilities unlocked by completing specific challenges during gameplay. </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Mission;
