import React from 'react';
import './Team.css';

class Team extends React.Component {
    render() {
        return (
            <section className="team-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-55">
                        <h2 className="title">OUR <span>TEAM</span> MEMBER</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/marwan-haddad-5541a5157/'>
                            <div className="team-item text-center">
                            <div className="team-thumb">
                                <img src="assets/img/team/team_01.jpg" alt="TEAM" />
                            </div>
                            <div className="team-info">
                                <span>CEO &amp; FOUNDER</span>
                                <h4 className="title">Marwan H.</h4>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/hamzashamsi/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/team_02.jpg" alt="TEAM" />
                        </div>
                        <div className="team-info">
                            <span>CAO</span>
                            <h4 className="title">Hamza S.</h4>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jason-min-93a868207/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/team_03.jpg" alt="TEAM" />
                        </div>
                        <div className="team-info">
                            <span>CTO &amp; SENIOR BLOCKCHAIN ENGINEER</span>
                            <h4 className="title">Jason Min</h4>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/yezdan-n-25b637221/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/team_04.jpg" alt="TEAM" />
                        </div>
                        <div className="team-info">
                            <span>MARKETING MANAGER</span>
                            <h4 className="title">Yezdan N.</h4>
                        </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default Team
