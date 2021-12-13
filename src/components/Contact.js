import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <section className="contact-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9">
                        <div className="section-title text-center mb-50">
                        <span className="sub-title">I'M READY TO FIGHT - JUST CONTACT ME!</span>
                        <h2 className="title">CONTACT <span>KATANA INU</span></h2>
                        </div>
                    </div>
                    </div>
                    <p className="content-desc">Any questions? Reach out to us and we will get back to you shortly.</p>
                    <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="contact-info-list">
                        <ul>
                            <li><i className="fab fa-telegram" /><a target="_blank" href="https://www.t.me/katanainu" rel="noreferrer">Join us on Telegram &gt;</a></li>
                            <li><i className="fas fa-envelope" /><a href="http://contact@katanainu.com">contact@katanainu.com</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form action="#" className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                        <button type="submit">Submit Now</button>
                        </form>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Contact
