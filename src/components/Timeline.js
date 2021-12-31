import React from 'react';
import './Timeline.css';

class Timeline extends React.Component {
    render() {
        return (
            <section className="timeline-section" id="roadmap">
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
                        <li><i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i>Website Launch</li>
                        <li><i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i>Social Media Launch</li>
                        <li>Audit Launch</li>
                        <li>NFT-Marketplace Development</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Game-Trailer development</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Whitepaper launch</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i>  Coinmarketcap Listing</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Coingecko listing</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Seed Sale</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Private Sale 1</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Private Sale 2</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i>  Public sale</li>
                        </ul>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-count">2</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 2</h3>
                        <ul className="list">
                        <li><i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Game-Development</li>
                        <li> Game Trailer</li>
                        <li>E-Commerce Launch</li>
                    
                        <li>Several Updates</li>
                   
                        <li>Creating 3D NFT skins Charity Action</li>
                        <li>Game Blog Website</li>
                        <li> <i className="fas fa-check-circle" style={{ marginRight:'20px'}}></i> Partnership Coop</li>
                        <li>CEX listing</li>
                        </ul>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-count">3</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 3</h3>
                        <ul className="list">
                        <li> More partnership Cooperation’s</li>
                        <li>Charity Action</li>
                        <li>Katana Inu App launch</li>
                        <li> Expand Marketing Strategy</li>
                        <li>Create more 3D Game NFT’s</li>
                        <li>Big game trailer</li>
                        <li>NFT Marketplace Launch</li>
                        <li>Game Demo</li>
                        <li>More CEX listing</li>
                        </ul>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-count">4</div>
                    <div className="timeline-content">
                        <h3 className="title">Phase 4</h3>
                        <ul className="list">
                        <li>Beta Game Launch for PC</li>
                        <li>Charity Projects</li>
                        <li>More Listings</li>
                        <li>More Cooperations</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Timeline;
