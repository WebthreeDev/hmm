import React from 'react';
import MainSlider from '../components/MainSlider';

export default class Links extends React.Component {
    render() {
        return (
            <main>
                <MainSlider/>
                <div className='links-area py-5'>
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col-md-6 m-auto'>
                                <div className='links py-5'>
                                    <ul className='links-list'>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=Samuraiinu'>
                                                <i className="fab fa-youtube"></i>
                                                Youtube
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://twitter.com/SamuraiInuERC' style={{background : '#00acee'}}>
                                                <i className="fab fa-twitter"></i>
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://instagram.com/SamuraiInuERC'  style={{background : 'linear-gradient(45deg, #DD2A7B, #515BD4)'}}>
                                                <i className="fab fa-instagram"></i>
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://t.me/SamuraiInuERC'  style={{background : '#0077b5'}}>
                                                <i className="fab fa-telegram"></i>
                                                Telegram
                                            </a>
                                        </li>

                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://www.tiktok.com/@SamuraiInuERC'  style={{background : '#000'}}>
                                                <i className="fab fa-tiktok"></i>
                                                Tiktok
                                            </a>
                                        </li>

                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://medium.com/@SamuraiInuERC/Samuraiinu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79'  style={{background : '#66cdaa'}}>
                                                <i className="fab fa-medium"></i>
                                                Medium
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='/SamuraiInuERCtokenomics.pdf'  style={{background : '#ffa500'}}>
                                                Tokenomics
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='/SamuraiInuERCwhitepaper.pdf'  style={{background : '#ffa500'}}>
                                                Whitepaper
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='/roadmap.png'  style={{background : '#ffa500'}}>
                                                Roadmap
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://www.reddit.com/r/SamuraiInuERC'  style={{background : '#FF4301'}}>
                                                Reddit
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer" href='https://www.discord.gg/SamuraiInuERC'  style={{background : '#FF4301'}}>
                                                <i className="fab fa-discord"></i>
                                                Discord
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
