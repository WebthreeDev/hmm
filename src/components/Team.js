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
                                <div className='d-flex justify-content-center align-items-center mt-3'>
                                    <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href='https://www.linkedin.com/in/marwan-haddad-5541a5157/'
                                    style={{marginRight:'10px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                        style={{width:'30px', height:'30px'}} fill="#0e76a8"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/marwanSamuraiInuERC/'>
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 448 512"
                                        style={{width:'30px', height:'30px'}}
                                        fill="#833AB4"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
                                    </a>
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
                    {/* <div className="col-lg-3 col-sm-6">
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
                    </div> */}
                    <div className="col-lg-3 col-sm-6">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/behrsin/'>
                        <div className="team-item text-center">
                        <div className="team-thumb">
                            <img src="assets/img/team/tim.jpg" alt="TEAM" />
                        </div>
                        <div className="team-info">
                            <span>CTO</span>
                            <h4 className="title">Tim B.</h4>
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
