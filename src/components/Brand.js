import React from 'react';
import './Brand.css';
import Slider from "react-slick";

class Brand extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            // responsive: [
            //     {
            //         breakpoint: 1200,
            //         settings: {
            //             slidesToShow: 5,
            //             slidesToScroll: 1,
            //             infinite: true,
            //         }
            //     },
            //     {
            //         breakpoint: 992,
            //         settings: {
            //             slidesToShow: 4,
            //             slidesToScroll: 1
            //         }
            //     },
            //     {
            //         breakpoint: 767,
            //         settings: {
            //             slidesToShow: 3,
            //             slidesToScroll: 1,
            //             arrows: false,
            //         }
            //     },
            //     {
            //         breakpoint: 575,
            //         settings: {
            //             slidesToShow: 2,
            //             slidesToScroll: 1,
            //             arrows: false,
            //         }
            //     },
            // ]
        };
        return (
            <div className="brand-area brand-bg home-four-brand">
                <div className="container">
                    <Slider className="row brand-active align-items-center" {...settings}>
                        <div className="col-xl-2">
                            <div className="brand-item">
                            <img src="assets/img/brand/certikwhite-1.png" alt="BRAND" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="brand-item">
                            <img src="assets/img/brand/cmc.png" alt="BRAND" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        )
    }
}

export default Brand;
