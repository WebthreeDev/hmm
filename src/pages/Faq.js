import React from 'react';
import Contact from '../components/Contact';
import FaqSection from '../components/FaqSection';

export default class Faq extends React.Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }


    render() {
        return (
            <main>
                <FaqSection/>
                <Contact/>
            </main>
        )
    }
}

