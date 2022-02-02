import React from 'react';
import Contact from '../components/Contact';
import FaqSection from '../components/FaqSection';

export default class Faq extends React.Component {
    render() {
        return (
            <main>
                <FaqSection/>
                <Contact/>
            </main>
        )
    }
}

