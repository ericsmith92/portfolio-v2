import React from 'react';
import { useLockBodyScroll, useNavHeighAdjustment } from '../hooks';

const Menu = ({open, setOpen }) => {

        useLockBodyScroll(open);
        useNavHeighAdjustment(open);

        const scrollToSect = (e) => {
            e.preventDefault();
            const sect = document.getElementById(e.target.dataset.sect);
            setOpen(!open);
            sect.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }

    return(
        <nav className={`menu ${open ? 'open' : ''}`}>
            <a onClick={scrollToSect} href='/' data-sect='work'>
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