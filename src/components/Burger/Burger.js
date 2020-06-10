import React from 'react';
import { useNavButtonMarginAdjustment } from '../hooks';

const Burger = ({open , setOpen}) => {
    
    useNavButtonMarginAdjustment(open);

    return(
        <button className={`burger ${open ? 'open' : ''}`}  open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default Burger;