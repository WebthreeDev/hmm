import React from 'react';
import './Faq.css';
import Contact from './Contact';
import FaqSection from './FaqSection';

class Faq extends React.Component {
    render() {
        return (
            <>
                <FaqSection/>
                <Contact/>
            </>
        )
    }
}

export default Faq;
