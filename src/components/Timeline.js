import React from 'react';
import './Timeline.css';

class Timeline extends React.Component {
    render() {
        return (
            <div className='timeline-area py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className="section-title sm-title mb-3 mt-5">THE TIMELINE</h2>
                            <h2 className="section-title big-title">
                                KATANA INU <span>ROADMAP</span>
                            </h2>
                            <span className="divider"></span>
                            <p className='timeline-heading-contents mt-3'>Our goal is to create a blockchain game ecosystem with real-world utility and value. With this ambitious project, we can reach the moon! Our team, contributors and investors have laid out key milestones that will put us on a track to success.</p>
                        </div>
                    </div>

                    <div className='row mt-5 pt-5'>
                        <div className='col-md-12'>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;
