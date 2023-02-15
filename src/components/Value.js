import React from 'react';

class Value extends React.Component {
    render() {
        return (
            <section className="value-area" style={{paddingTop: '100px'}}>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="mission-img text-center">
                        <img src="assets/img/images/value_img.png" alt="Samurai Inu"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-45">
                        <span className="sub-title">Our Ecosystem with Samurai Inu</span>
                                <h2 className="title">Complete NFT<span> Ecosystem Integration</span></h2>
                        </div>
                        <div className="mission-content">
                        <p>According to Game Industry Statistics, the Video Game market generated about $162.32 Billion in
revenue by the end of 2020.<br/>
In 2019, this figure was still 151.55 Billion Dollars. So the Game Industry Statistics showed us,a
continuous growth of 9.17% in 2020 -2025.
It is expected that this growth ,will continue in the coming Years.
Likewise, Video Game Trends show us that this Industry is expected to reach a total revenue of
$295.63 Billion in 2026.<br/>
Above all, we make sure that any Investment our Community makes remains secure in the long run.
Therefore, we have implemented various Game-based optimization Strategies to increase the value
of our Tokens. </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        )
    }
}

export default Value;
