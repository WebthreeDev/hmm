import React from 'react';
import './MainSlider.css';
import Slider from 'react-slick';
import { Stream } from '@cloudflare/stream-react';
import { Modal } from 'react-bootstrap';

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><img src="assets/img/icon/arrow_left.png" alt="PREV"/></button>
    );
}
  
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><img src="assets/img/icon/arrow_right.png" alt="NEXT"/></button>
    );
}

class MainSlider extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false,
            modal: false
        }
    }

    handleShow(){
        this.setState({show: true})
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec':'token'
                }
            } 
        });
        console.log(window.dotq)
    }

    fireMintButton(){
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec':'mint'
                }
            }
        });

        console.log(window.dotq)
    }

    openModal(){
        this.setState({modal:true})
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec':'discord'
                }
            } 
        });
        console.log(window.dotq)
    }

    render() {
        const settings = {
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            lazyLoad:true,
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>,
            responsive: [
                { breakpoint: 767, settings: { arrows: false } }
            ]
        };

        return (
            <section className="slider-area">
                <Slider {...settings} className='slider-active'>
                    <div className="slider-item slider-bg">
                    {/* <video id="videoBG" autoPlay muted loop>
                        <source src="assets/video/a.mp4" type="video/mp4" />
                    </video> */}

                    <div id="videoBG">
                        <Stream autoplay loop muted src='89c4d83d0968a5f98f1898a7aa99a37a'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We have developed a Play2Earn BattleRoyal NFT PC Game with its own integrated
NFT Marketplace.A Layer-2- Solution in the Ethereum Domain .All skins available in the Game
will be NFTs.</p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                {/* <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer" className="btn btn-style-two">Uniswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.fireMintButton() }>NFT Page</a>
                                {/* <a href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205" target="_blank" rel="noreferrer" className="btn btn-style-two">Pancakeswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.handleShow() }>Buy Token</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.openModal() }>Discord/Telegram</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    {/* <video id="videoBG" autoPlay muted loop>
                        <source src="assets/video/DoFire.mp4" type="video/mp4" />
                    </video> */}
                    <div id="videoBG">
                        <Stream autoplay loop muted src='cd9941ee430d716838bc523ec689a155'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We have developed a Play2Earn BattleRoyal NFT PC Game with its own integrated
NFT Marketplace.A Layer-2- Solution in the Ethereum Domain .All skins available in the Game
will be NFTs.</p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                {/* <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer" className="btn btn-style-two">Uniswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.fireMintButton() }>NFT Page</a>
                                {/* <a href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205" target="_blank" rel="noreferrer" className="btn btn-style-two">Pancakeswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.handleShow() }>Buy Token</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.openModal() }>Discord/Telegram</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    {/* <video id="videoBG" autoPlay muted loop>
                        <source src="assets/video/b.mp4" type="video/mp4" />
                    </video> */}
                    <div id="videoBG">
                        <Stream autoplay loop muted src='2682a2c00c5ccc042c25142bc0764d87'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We have developed a Play2Earn BattleRoyal NFT PC Game with its own integrated
NFT Marketplace.A Layer-2- Solution in the Ethereum Domain .All skins available in the Game
will be NFTs.
                            </p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                {/* <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer" className="btn btn-style-two">Uniswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.fireMintButton() }>NFT Page</a>
                                {/* <a href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205" target="_blank" rel="noreferrer" className="btn btn-style-two">Pancakeswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.handleShow() }>Buy Token</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.openModal() }>Discord/Telegram</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    {/* <video id="videoBG" autoPlay muted loop>
                        <source src="assets/video/c.mp4" type="video/mp4" />
                    </video> */}
                    <div id="videoBG">
                        <Stream autoplay loop muted src='0057be5dcca17a95d20f5d72e09fd621'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We have developed a Play2Earn BattleRoyal NFT PC Game with its own integrated
NFT Marketplace.A Layer-2- Solution in the Ethereum Domain .All skins available in the Game
will be NFTs.
                            </p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                {/* <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer" className="btn btn-style-two">Uniswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.fireMintButton() }>NFT Page</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.handleShow() }>Buy Token</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.openModal() }>Discord/Telegram</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-item slider-bg">
                    {/* <video id="videoBG" autoPlay muted loop>
                        <source src="assets/video/d.mp4" type="video/mp4" />
                    </video> */}
                     <div id="videoBG">
                        <Stream autoplay loop muted src='990101b5a18cc6b439d531ac131e2ee4'/>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-11">
                            <div className="slider-content">
                            <h6 className="sub-title" data-animation="fadeInUp" data-delay=".2s">KATANA INU</h6>
                            <h2 className="title" data-animation="fadeInUp" data-delay=".4s">PC-Game with <span>NFT Ecosystem</span></h2>
                            <p className="desc" data-animation="fadeInUp" data-delay=".6s">Katana Inu - We have developed a Play2Earn BattleRoyal NFT PC Game with its own integrated
NFT Marketplace.A Layer-2- Solution in the Ethereum Domain .All skins available in the Game
will be NFTs.
                            </p>
                            <div className="slider-btn-wrap" data-animation="fadeInUp" data-delay=".8s">
                                {/* <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer" className="btn btn-style-two">Uniswap</a> */}
                                <a className="btn btn-style-two" href="/#" onClick={() => this.fireMintButton() }>NFT Page</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.handleShow() }>Buy Token</a>
                                <a className="btn btn-style-two" href="/#" onClick={() => this.openModal() }>Discord/Telegram</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Slider>
                <Modal 
                show={this.state.show} 
                onHide={()=>this.setState({show:false})}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Body className='p-5'>
                            <p><a className='btn d-block btn-primary' href='https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15' rel='noreferrer' target='_blank'>Uniswap</a></p>
                            <p><a className='btn d-block' href='https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205' rel='noreferrer' target='_blank'>Pancake Swap</a></p>
                            <p><a className='btn d-block btn-success' href='https://www.bitmart.com/trade/en?symbol=KATA_USDT' rel='noreferrer' target='_blank'>Bitmart</a></p>
                            <p><a className='btn d-block btn-danger' href='https://www.hotbit.io/exchange?symbol=KATA_USDT' rel='noreferrer' target='_blank'>Hotbit</a></p>
                            <p><a className='btn d-block btn-secondary' href='https://www.probit.com/app/exchange/KATA-USDT' rel='noreferrer' target='_blank'>Probit</a></p>
                    </Modal.Body>
                </Modal>

                <Modal
                show={this.state.modal} 
                onHide={()=>this.setState({modal:false})}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Body className='p-5'>
                            <p>
                                <a className='btn d-block' target="_blank" rel="noreferrer" href='https://t.me/katanainu'  style={{background : '#0077b5'}}>
                                    <i className="fab fa-telegram" style={{marginRight:'15px'}}></i>
                                    <span>Telegram</span>
                                </a>
                            </p>
                            <p>
                                <a className='btn d-block' target="_blank" rel="noreferrer" href='https://www.discord.gg/katanainu'  style={{background : '#FF4301'}}>
                                    <i className="fab fa-discord" style={{marginRight:'15px'}}></i>
                                    <span>Discord</span>
                                </a>
                            </p>
                    </Modal.Body>
                </Modal>

            </section>

        )
    }
}

export default MainSlider;
