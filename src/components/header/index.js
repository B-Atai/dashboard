import React from 'react';
import Logo from './logo';
import Nav from './nav';
import './style.scss'
const Header = () =>{
    return(
        <div className='header'>
            <Logo />
            <Nav />
        </div>
    );
};
export default Header;