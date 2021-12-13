import React from 'react';

class Trailer extends React.Component {
    render() {
        return (
            <section className="trailer-area">
                <div className="trailer-bg"></div>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="section-title text-center mb-55">
                        <h2 className="title">CHECK OUR <span>TRAILER</span></h2>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9">
                        <div className="trailer-wrap">
                        <img src="assets/img/images/trailer_image.jpg" alt="TRAILER" />
                        <a href="https://www.youtube.com/watch?v=TKKWnzLZMKo" className="popup-video"><img src="assets/img/icon/video_play_icon.png" alt="TRAILER" /></a>
                        </div>
                    </div>
                    </div>
                    <h2 className="trailer-bottom-title"><span>KATANA INU</span> TOKEN WILL SHOOT TO VENUS</h2>
                </div>
            </section>

        )
    }
}

export default Trailer;
