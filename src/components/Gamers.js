import React from 'react';
import './Gamers.css';
import gammers from '../images/katanainu-gamers.png';
import path1 from '../images/path_01.png';
import path2 from '../images/path_02.png';
import path3 from '../images/path_03.png';
import path4 from '../images/path_04.png';
import path5 from '../images/path_05.png';
import circle from '../images/gamers_circle_shape.png';
import shape from '../images/gamers_circle_line.png';
import chart from '../images/just_gamers_chart.png';

class Gamers extends React.Component {
    render() {
        return (
            <section className="just-gamers-area just-gamers-bg pt-115 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-8 col-md-10">
                            <div className="section-title title-style-three white-title mb-70 katanainu_title">
                                <h2>JUST FOR <span>GAMERS</span></h2>
                                <p>Compete with 100 players on a remote island for winner. Play for NFTs and earn money while playing and having fun. Our Tokenomics:</p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-10">
                            <div className="just-gamers-img d-flex">
                                <img src={gammers} alt="Gamer" className="just-gamers-character" />
                                <div className="chart-paths">
                                    <ul>
                                        <li><img src={path1} alt="path"/></li>
                                        <li><img src={path2} alt="path"/></li>
                                        <li><img src={path3} alt="path"/></li>
                                        <li><img src={path4} alt="path"/></li>
                                        <li><img src={path5} alt="path"/></li>
                                    </ul>
                                </div>
                                <div className="chart-paths-content">
                                    <ul>
                                    <li>
                                        <span>6%</span>
                                        <pre>6%</pre> Advisors<br/> </li>
                                    <li>
                                        <span>12%</span>
                                        <pre>5%</pre> Liquidity<br/> <pre>7%</pre> Treasure </li>
                                    <li>
                                        <span>30%</span>
                                        <pre>29%</pre> Staking/In-game Rewards<br/> <pre>1%</pre> Airdrop </li>
                                    <li>
                                        <span>31%</span>
                                        <pre>6%</pre> Marketing<br/> <pre>25%</pre> Team/Develop. </li>
                                    <li>
                                        <span>21%</span>
                                        <pre>5%</pre> Seed Sale<br/> <pre>10%</pre> Private Sale<br/> <pre>6%</pre>Public sale </li>
                                    </ul>
                                </div>
                                <div className="just-gamers-circle-shape">
                                    <img src={shape} alt="Line" />
                                    <img src={circle} alt="Shape" className="rotateme" />
                                </div>
                            </div>
                        </div>
                        <img src={chart} alt="Chart" className="gamers-chart-shape" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Gamers
