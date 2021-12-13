import React from 'react';
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';

class CommingSoon extends React.Component {
    componentDidMount(){
        /*=============================================
            =    		 Countdown  	         =
        =============================================*/
        // const el = findDOMNode(this.ref.countdown);
        // $(el).each(function () {
        //     var $this = $(this), finalDate = $(this).data('countdown');
        //     $this.countdown(finalDate, function (event) {
        //         $this.html(event.strftime('<div class="time-count"><span class="value">%D</span><span class="label">Days</span></div><div class="time-count"><span class="value">%H</span><span class="label">Hour</span></div><div class="time-count"><span class="value">%M</span><span class="label">minute</span></div><div class="time-count"><span class="value">%S</span><span class="label">Secs</span></div>'));
        //     });
        // });
    }

    render() {
        return (
            <section className="coming-soon-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center">
                        <span className="sub-title">Our SALE</span>
                        <h2 className="title">KATANA INU <span>SALE - Coming soon</span></h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="coming-time" data-countdown="2021/12/28"/>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default CommingSoon
