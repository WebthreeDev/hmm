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
                                            <a target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=TKKWnzLZMKo'>
                                                <i className="fab fa-youtube"></i>
                                                Youtube
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://twitter.com/katanainu' style={{background : '#00acee'}}>
                                                <i className="fab fa-twitter"></i>
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://instagram.com/katanainu'  style={{background : 'linear-gradient(45deg, #DD2A7B, #515BD4)'}}>
                                                <i className="fab fa-instagram"></i>
                                                Instagram
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a target="_blank" rel="noreferrer" href='/#'  style={{background : '#0077b5'}}>
                                                <i className="fab fa-linkedin"></i>
                                                Linkedin
                                            </a>
                                        </li> */}

                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://www.tiktok.com/@katanainu'  style={{background : '#000'}}>
                                                <i className="fab fa-tiktok"></i>
                                                Tiktok
                                            </a>
                                        </li>

                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79'  style={{background : '#66cdaa'}}>
                                                <i className="fab fa-medium"></i>
                                                Medium
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='/katanainutokenomics.pdf'  style={{background : '#ffa500'}}>
                                                Tokenomics
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='/katanainuwhitepaper.pdf'  style={{background : '#ffa500'}}>
                                                Whitepaper
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='/roadmap.png'  style={{background : '#ffa500'}}>
                                                Roadmap
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://www.reddit.com/r/katanainu'  style={{background : '#FF4301'}}>
                                                Redit
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
