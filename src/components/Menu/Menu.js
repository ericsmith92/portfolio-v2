import React from 'react';

const Menu = ({open}) => {
    return(
        <nav className={`menu ${open ? 'open' : ''}`}>
            <a href='/'>
                Top
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