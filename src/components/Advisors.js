import React from 'react';

class Advisors extends React.Component {
    render() {
        return (
          <section className="advisor-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-55">
                        <h2 className="title">OUR <span>ADVISOR</span></h2>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/wulf-kaal-6904a65b/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/advisor_01.jpg" alt="ADVISOR" />
                        </div>
                        <div className="team-info">
                            <span>BLOCKCHAIN EXPERT</span>
                            <h4 className="title">Wulf Kaal</h4>
                            <p>Professor, Digital Assets, NFT &amp; DAO Expert, Co-Founder at DEVxDAO</p>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/timotrippler/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/advisor_02.jpg" alt="ADVISOR" />
                        </div>
                        <div className="team-info">
                            <span>STRATEGIC ADVISOR</span>
                            <h4 className="title">Timo Trippler</h4>
                            <p>Blockchain &amp; Business Advisor</p>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ianscarffe/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/advisor_03.jpg" alt="ADVISOR" />
                        </div>
                        <div className="team-info">
                            <span>GLOBAL INFLUENCER</span>
                            <h4 className="title">Ian Scarffe</h4>
                            <p>Global Influencer in Blockchain and Fintech</p>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://yeadh.com'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/yeadh.jpg" alt="ADVISOR" />
                        </div>
                        <div className="team-info">
                            <span>WEB DEVELOPER</span>
                            <h4 className="title">Yeadh Hasan</h4>
                            <p>Web Developer</p>
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

export default Advisors
