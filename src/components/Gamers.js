import React from 'react';
import './Gamers.css';

class Gamers extends React.Component {
    render() {
        return (
            <>
            <section className='katanainu-values py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className="trailer-bottom-title"><span>KATANA INU</span> TOKEN WILL SHOOT TO VENUS</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="chart-area chart-bg" id="chart">
                <div className="container">
                    <div className="row chart-title-row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title">
                        <h2 className="title">FOR THE <span>GAMERS</span></h2>
                        <p>Our Wallets are 2 ff locked for 2-8 Month and linear Vesting from 2-4 Years.</p>
                        <p><a href='https://katanainu.com/katanainutokenomics.pdf' target="_blank" rel="noreferrer">Check our Tokenomics</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-11">
                        <div className="chart-wrap">
                        <div className="chart-main-img text-center">
                            <img src="assets/img/images/chart_main.png" alt="TRAILER" />
                        </div>
                        <ul className="chart-path-list">
                            <li>
                            <img src="assets/img/images/path_01.png" alt="TRAILER" />
                            <div className="content">
                                <span className="title">6%</span>
                                <label><pre>6%</pre> Advisors</label>
                            </div>
                            </li>
                            <li>
                            <img src="assets/img/images/path_02.png" alt="TRAILER" />
                            <div className="content">
                                <span className="title">12%</span>
                                <label><pre>5%</pre> Liquidity</label>
                                <label><pre>7%</pre> Treasure</label>
                            </div>
                            </li>
                            <li>
                            <img src="assets/img/images/path_03.png" alt="TRAILER" />
                            <div className="content">
                                <span className="title">30%</span>
                                <label><pre>29%</pre> Staking/In-game Rewards</label>
                                <label><pre>1%</pre> Airdrop</label>
                            </div>
                            </li>
                            <li>
                            <img src="assets/img/images/path_04.png" alt="TRAILER" />
                            <div className="content">
                                <span className="title">31%</span>
                                <label><pre>6%</pre> Marketing</label>
                                <label><pre>10%</pre> Development</label>
                                <label><pre>15%</pre> Team</label>
                            </div>
                            </li>
                            <li>
                            <img src="assets/img/images/path_05.png" alt="TRAILER" />
                            <div className="content">
                                <span className="title">21%</span>
                                <label><pre>5%</pre> Seed Sale</label>
                                <label><pre>10%</pre> Private Sale</label>
                                <label><pre>6%</pre> Public Sale</label>
                            </div>
                            </li>
                        </ul>
                        <div className="chart-circle-shape">
                            <img src="assets/img/images/chart_circle_line.png" className="line" alt="TRAILER" />
                            <img src="assets/img/images/chart_circle_shape.png" className="circle rotateme" alt="TRAILER" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="chart-bg-shape"><img src="assets/img/images/chart_shape.png" alt="TRAILER" /></div>
            </section>
            </>
        )
    }
}

export default Gamers
