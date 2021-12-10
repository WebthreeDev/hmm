import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {
    render() {
        return (
            <section className="count-down-area py-5">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-12">
                            <h2 className="section-title sm-title">Our SALE</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="section-title big-title">
                                        KATANA INU
                                        <span> SALE - Comming soon</span>
                                    </h2>
                                    <span className="divider"></span>
                                </div>
                            </div>
                            <div className="count-down-clock mt-5 pt-3">
                                <div className="clock">
                                    <div className="clock-time">
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                    <div className="clock-label">Days</div>
                                </div>
                                <div className="clock-divider">:</div>
                                <div className="clock">
                                    <div className="clock-time">
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                    <div className="clock-label">HRS</div>
                                </div>
                                <div className="clock-divider">:</div>
                                <div className="clock">
                                    <div className="clock-time">
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                    <div className="clock-label">MINS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Countdown;
