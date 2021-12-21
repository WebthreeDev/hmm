import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_3vunswn', 'template_zd4ta2q',e.target, 'user_3maxhTqQjJL5Xcwy9Okjq')
        .then((result) => {
            console.log(result.text);
            this.setState({
                name: '',
                email:'',
                message: ''
            });
        }).catch((error) => {
            console.log(error.text);
        });
        
    }


    render() {
        return (
            <section className="contact-area" id="contact">
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
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Your Name" name='name' value={this.state.name} onChange={(event)=> this.setState({name: event.target.value})}/>
                            <input type="email" placeholder="Your Email" name='email' value={this.state.email} onChange={(event)=> this.setState({email: event.target.value})}/>
                            <textarea id="message" placeholder="Your Message" name="message" value={this.state.message} onChange={(event)=> this.setState({message: event.target.value})}/>
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
