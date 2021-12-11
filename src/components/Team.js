import React from 'react';
import './Team.css';
import team1 from '../images/marwan8.jpg';
import team2 from '../images/hamza3.jpg';
import team3 from '../images/jason23.jpg';
import team4 from '../images/yedzdan3-1.jpg';

import advisor1 from '../images/wulfkaal.jpg';
import advisor2 from '../images/timo3.jpg';
import advisor3 from '../images/ian3.jpg';

class Team extends React.Component {
    render() {
        return (
            <div>
                <section className="team-area team-bg" style={{backgroundImage: 'url()'}}>
                    <div className="container">
                        <div className="container-inner-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                <div className="kb-section-title text-center white-title mb-55">
                                    <h2 className="title">OUR TEAM MEMBER</h2>
                                    <p />
                                </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={team1} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>CEO &amp; FOUNDER</span>
                                    <h5><a href="https://www.linkedin.com/in/marwan-haddad-5541a5157/">Marwan H.</a></h5>
                                    <p />
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={team2} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>CAO</span>
                                    <h5><a href="https://www.linkedin.com/in/hamzashamsi/">Hamza S.</a></h5>
                                    <p />
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={team3} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>CTO &amp; Senior Blockchain Engineer</span>
                                    <h5><a href="https://www.linkedin.com/in/jason-min-93a868207/">Jason Min</a></h5>
                                    <p />
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={team4} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>Marketing Manager</span>
                                    <h5><a href="https://www.linkedin.com/in/yezdan-n-25b637221/">Yezdan N.</a></h5>
                                    <p />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-area team-bg" style={{backgroundImage: 'url()'}}>
                    <div className="container">
                        <div className="container-inner-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                <div className="kb-section-title text-center white-title mb-55">
                                    <h2 className="title">OUR ADVISOR</h2>
                                    <p />
                                </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={advisor1} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>Blockchain Expert</span>
                                    <h5><a href="https://www.linkedin.com/in/wulf-kaal-6904a65b/">Wulf Kaal</a></h5>
                                    <p>Professor, Digital Assets, NFT &amp; DAO Expert, Co-Founder at DEVxDAO</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={advisor2} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>Strategic Advisor</span>
                                    <h5><a href="https://www.linkedin.com/in/timotrippler/">Timo Trippler</a></h5>
                                    <p>Blockchain &amp; Business Advisor</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                    <img src={advisor3} alt="Team" />
                                    </div>
                                    <div className="team-content">
                                    <span>Global Influencer</span>
                                    <h5><a href="/#">Ian Scarffe</a></h5>
                                    <p>Global Influencer in Blockchain and Fintech</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default Team
