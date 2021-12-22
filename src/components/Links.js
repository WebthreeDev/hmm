import React from 'react';
import './Links.css';
import MainSlider from './MainSlider';

class Links extends React.Component {
    render() {
        return (
            <>
                <MainSlider/>
                <div className='links-area py-5'>
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col-md-6 m-auto'>
                                <div className='links py-5'>
                                    <ul className='links-list'>
                                        <li>
                                            <a href='/#'>
                                                <i className="fab fa-youtube"></i>
                                                Youtube
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#' style={{background : '#00acee'}}>
                                                <i className="fab fa-twitter"></i>
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#'  style={{background : 'linear-gradient(45deg, #DD2A7B, #515BD4)'}}>
                                                <i className="fab fa-instagram"></i>
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/#'  style={{background : '#0077b5'}}>
                                                <i className="fab fa-linkedin"></i>
                                                Linkedin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Links
