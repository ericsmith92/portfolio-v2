import React from 'react';
import { useLockBodyScroll } from '../hooks';

const Menu = ({open}) => {

        useLockBodyScroll(open);

    return(
        <nav className={`menu ${open ? 'open' : ''}`}>
            <a href='/'>
                About
            </a>
            <a href='/'>
                Work
            </a>
            <a href='/'>
                Contact
            </a>
        </nav>
    )
}

export default Menu;