import React from 'react';
import './MainSlider.css';
import $ from 'jquery';
import 'slick-carousel';
import { Stream } from '@cloudflare/stream-react';

class MainSlider extends React.Component {
    componentDidMount(){
        /*=============================================
            =    		 Main Slider		      =
        =============================================*/
        this.mainSlider();
    }

    mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.slider-item:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icon/arrow_left.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icon/arrow_right.png" alt=""></button>',
            responsive: [
                { breakpoint: 767, settings: { arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
  
    render() {

        return (
            <section className="slider-area">
                <div className="slider-active">
                    <div className="slider-item slider-bg">
                    <div id="videoBG">
                        <Stream autoplay src='89c4d83d0968a5f98f1898a7aa99a37a'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT PC-Game with an intergrated NFT Marketplace on layer 2 solution (Ethereum). All In-game skins will be an NFT.</p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                <a href="/#" className="btn btn-style-two">COMING SOON</a>
                                <a target="_blank" rel="noreferrer" href="/katanainuwhitepaper.pdf" className="btn btn-style-two">Whitepaper</a>
                                <a href="/#" className="btn btn-style-two">Donate</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    <div id="videoBG">
                        <Stream autoplay src='cd9941ee430d716838bc523ec689a155'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT PC-Game with an intergrated NFT Marketplace on layer 2 solution (Ethereum). All In-game skins will be an NFT.</p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                <a href="/#" className="btn btn-style-two">COMING SOON</a>
                                <a target="_blank" rel="noreferrer" href="/katanainuwhitepaper.pdf" className="btn btn-style-two">Whitepaper</a>
                                <a href="/#" className="btn btn-style-two">Donate</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    <div id="videoBG">
                        <Stream autoplay src='2682a2c00c5ccc042c25142bc0764d87'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT
                                PC-Game with an intergrated NFT Marketplace on layer 2 solution (Ethereum). All In-game skins will be an NFT.
                            </p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                <a href="/#" className="btn btn-style-two">COMING SOON</a>
                                <a target="_blank" rel="noreferrer" href="/katanainuwhitepaper.pdf" className="btn btn-style-two">Whitepaper</a>
                                <a href="/#" className="btn btn-style-two">Donate</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    <div id="videoBG">
                        <Stream autoplay src='0057be5dcca17a95d20f5d72e09fd621'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT
                                PC-Game with an intergrated NFT Marketplace on layer 2 solution (Ethereum). All In-game skins will be an NFT.
                            </p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                <a href="/#" className="btn btn-style-two">COMING SOON</a>
                                <a target="_blank" rel="noreferrer" href="/katanainuwhitepaper.pdf" className="btn btn-style-two">Whitepaper</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    <div id="videoBG">
                        <Stream autoplay src='990101b5a18cc6b439d531ac131e2ee4'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We build a play2earn BattleRoyale NFT
                                PC-Game with an intergrated NFT Marketplace on layer 2 solution (Ethereum). All In-game skins will be an NFT.
                            </p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                <a href="/#" className="btn btn-style-two">COMING SOON</a>
                                <a target="_blank" rel="noreferrer" href="/katanainuwhitepaper.pdf" className="btn btn-style-two">Whitepaper</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default MainSlider;
