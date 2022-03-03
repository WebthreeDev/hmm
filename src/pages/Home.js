import React from 'react';
import MainSlider from '../components/MainSlider';
import Brand from '../components/Brand';
import PancakeUniswap from '../components/PancakeUniswap';
import Mission from '../components/Mission';
import Gamers from '../components/Gamers';
import Features from '../components/Features';
import Timeline from '../components/Timeline';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Value from '../components/Value';
import Trailer from '../components/Trailer';
import Advisors from '../components/Advisors';
import Brands from '../components/Brands';
import News from '../components/News';
import Nft from '../components/Nft';
// import Ecosystem from '../components/Ecosystem';

export default class Home extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <main>
                <MainSlider/>
                <Brand/>
                <Nft/>
                <Mission/>
                <Trailer/>
                <Value/>
                {/* <Ecosystem/> */}
                <Gamers/>
                <Features/>
                <Brands/>
                <Timeline/>
                <Team/>
                <Advisors/>
                <News/>
                <PancakeUniswap/>
                <Contact/>
            </main>
        )
    }
}