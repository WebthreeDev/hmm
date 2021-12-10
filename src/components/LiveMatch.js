import React from 'react';
import './LiveMatch.css';
import livematchthumbnail from '../images/trailer_image.jpg';
import thumnailplay from '../images/video_play_icon.png';


class LiveMatch extends React.Component {
    
    render() {

        return (
            <section className="live-match-area pt-90 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title home-four-title text-center mb-60">
                                <h2>Check Our <span>Trailer </span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9">
                            <div className="live-match-wrap">
                                <img src={livematchthumbnail} alt="" />
                                <a href="https://www.youtube.com/watch?v=TKKWnzLZMKo" className="popup-video"><img src={thumnailplay} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LiveMatch;
