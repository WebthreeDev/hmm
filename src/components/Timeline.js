import React from 'react';
import './Timeline.css';

class Timeline extends React.Component {
    render() {
        return (
            <section className="timeline-section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9">
                        <div className="section-title text-center mb-70">
                        <span className="sub-title">THE TIMELINE</span>
                        <h2 className="title">KATANA INU <span>ROADMAP</span></h2>
                        <p className="timeline-desc">Our goal is to create a blockchain game ecosystem with real-world utility and value. With this ambitious project, we can reach the moon! Our team, contributors and investors have laid out key milestones that
                            will put us on a track to success.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="timeline-items">
                    <div className="timeline-item">
                    <div className="timeline-count">1</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 1</h3>
                        <ul className="list">
                        <li>Website Launch</li>
                        <li>NFT-Marketplace Development</li>
                        <li>Coinmarketcap Listing</li>
                        <li>Coingecko listing</li>
                        </ul>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-count">2</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 2</h3>
                        <ul className="list">
                        <li>Website Launch</li>
                        <li>NFT-Marketplace Development</li>
                        <li>Coinmarketcap Listing</li>
                        <li>Coingecko listing</li>
                        </ul>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-count">3</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 3</h3>
                        <ul className="list">
                        <li>Website Launch</li>
                        <li>NFT-Marketplace Development</li>
                        <li>Coinmarketcap Listing</li>
                        <li>Coingecko listing</li>
                        </ul>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-count">4</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 4</h3>
                        <ul className="list">
                        <li>Website Launch</li>
                        <li>NFT-Marketplace Development</li>
                        <li>Coinmarketcap Listing</li>
                        <li>Coingecko listing</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Timeline;
