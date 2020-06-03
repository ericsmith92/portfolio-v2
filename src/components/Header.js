import React from 'react';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

const Header = ({open, setOpen}) => {
    return(
        <header>
            <a className="logo" href="/">
                ES
            </a>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} />
        </header>
    ) 
}

export default Header;