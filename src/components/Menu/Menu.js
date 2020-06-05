import React from 'react';
import { useLockBodyScroll, useNavHeighAdjustment } from '../hooks';

const Menu = ({open}) => {

        useLockBodyScroll(open);
        useNavHeighAdjustment(open);

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