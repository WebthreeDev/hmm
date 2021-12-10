import React from 'react';
import sliderVideo1 from '../videos/a.mp4';
import sliderVideo2 from '../videos/b.mp4';
import sliderVideo3 from '../videos/c.mp4';
import Slider from "react-slick";
import './MainSlider.css';

class MainSlider extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <section className="slider-area home-four-slider">
                <Slider {...settings}>
                    <div className="single-slider slider-bg slider-style-two">
                        <video id="videoBG" autoPlay muted loop>
                            <source src={sliderVideo1} type="video/mp4"/>
                        </video>
                        <div className="container custom-container-two">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-11">
                                    <div className="slider-content">
                                        <h6 data-animation="fadeInUp" data-delay=".4s">KATANA INU</h6>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT PC-Game with an intergrated NFT Marketplace on layer 2 soluition (Ethereum). All In-game skins will be an NFT. </p>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">COMING SOON</a>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">Whitepaper</a>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">Donate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider slider-bg slider-style-two">
                        <video id="videoBG" autoPlay muted loop>
                            <source src={sliderVideo2} type="video/mp4"/>
                        </video>
                        <div className="container custom-container-two">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-11">
                                    <div className="slider-content">
                                        <h6 data-animation="fadeInUp" data-delay=".4s">KATANA INU</h6>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT PC-Game with an intergrated NFT Marketplace on layer 2 soluition (Ethereum). All In-game skins will be an NFT. </p>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">COMING SOON</a>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">Whitepaper</a>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">Donate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider slider-bg slider-style-two">
                        <video id="videoBG" autoPlay muted loop>
                            <source src={sliderVideo3} type="video/mp4"/>
                        </video>
                        <div className="container custom-container-two">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-11">
                                    <div className="slider-content">
                                        <h6 data-animation="fadeInUp" data-delay=".4s">KATANA INU</h6>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT PC-Game with an intergrated NFT Marketplace on layer 2 soluition (Ethereum). All In-game skins will be an NFT. </p>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">COMING SOON</a>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">Whitepaper</a>
                                        <a href="#game" className="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">Donate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}

export default MainSlider;
