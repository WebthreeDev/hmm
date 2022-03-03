import React from 'react'
import './Newsletter.css';


class Newsletter extends React.Component{


    render(){
        return (
            <div className="newsletter-wrap">
                <div className="section-title newsletter-title">
                    <h2 className="title">Our <span>Newsletter</span></h2>
                </div>
                <div className="newsletter-form">
                    <form action="#">
                    <div className="newsletter-form-grp">
                        <i className="far fa-envelope" />
                        <input type="email" placeholder="Enter your email..." />
                    </div>
                    <button>
                        SUBSCRIBE 
                        {/* <i className="fas fa-paper-plane" />  */}
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Newsletter;