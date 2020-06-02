import React from 'react';
import Burger from './Burger/Burger';

const Header = ({open, setOpen}) => {
    return(
        <header>
            <a className="logo" href="/">
                ES
            </a>
            <Burger open={open} setOpen={setOpen} />
        </header>
    ) 
}

export default Header;