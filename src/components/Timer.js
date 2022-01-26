import React from 'react';
import $ from 'jquery';
import "jquery-countdown";

class Timer extends React.Component{
    componentDidMount(){
        /*=============================================
            =    		 Countdown  	         =
        =============================================*/
        $('[data-countdown]').each(function () {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<div class="time-count"><span class="value">%D</span><span class="label">Days</span></div><div class="time-count"><span class="value">%H</span><span class="label">Hour</span></div><div class="time-count"><span class="value">%M</span><span class="label">minute</span></div>'));
            });
        });


    }

    render(){
        return (
            <div className="coming-time" data-countdown="2021/12/19 1:00 pm"/>
        )
    }
}

export default Timer;
