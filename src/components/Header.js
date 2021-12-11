import React from 'react';
import HeaderTopBar from './HeaderTopBar';
import HeaderBottom from './HeaderBottom';

class Header extends React.Component {
    
    render(){
        return(
            <header className="header-style-four">
                <HeaderTopBar/>
                <HeaderBottom/>
            </header>
        );
    }
}

export default Header;
