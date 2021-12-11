import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact-area py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                        <h2 className="section-title sm-title mb-3 mt-5">I'M READY TO FIGHT - JUST CONTACT ME!</h2>
                            <h2 className="section-title big-title">
                                CONTACT <span>KATANA INU</span>
                            </h2>
                            <span className="divider"></span>
                            <h2 className='contact-heading-contents mt-4'>Any questions? Reach out to us and we will get back to you shortly.</h2>
                        </div>
                    </div>
                    <div className='row mt-3 pb-5 mb-4'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='contact-left'>
                                <ul className='mt-5 pt-3 px-5'>
                                    <li>
                                        <a href='/#'>
                                            <i aria-hidden="true" className="fab fa-telegram mr-4"></i>
                                            <span>Join us on Telegram</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href='/#'>
                                            <i aria-hidden="true" className="fas fa-envelope mr-4"></i>
                                            <span>contact@katanainu.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div className='contact-form'>
                                <form>
                                    <div className='form-group'>
                                        <input type="text" placeholder='Your Name'/>
                                    </div>
                                    <div className='form-group'>
                                        <input type="text" placeholder='Your Email'/>
                                    </div>
                                    <div className='form-group'>
                                       <textarea placeholder='Your Message' rows={4}></textarea>
                                    </div>
                                    <button className='btn form-btn'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
