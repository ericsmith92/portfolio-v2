import React from 'react';
import MenuItem from './MenuItem';
import { useLockBodyScroll, useNavHeighAdjustment } from '../hooks';

const Menu = ({open, setOpen }) => {

        useLockBodyScroll(open);
        useNavHeighAdjustment(open);

    return(
        <nav className={`menu ${open ? 'open' : ''}`}>
            <MenuItem text='About' setOpen={setOpen} open={open} dataValue='about' />
            <MenuItem text='Work' setOpen={setOpen} open={open} dataValue='work' />
            <MenuItem text='Contact' setOpen={setOpen} open={open} dataValue='contact' />
        </nav>
    )
}

export default Menu;