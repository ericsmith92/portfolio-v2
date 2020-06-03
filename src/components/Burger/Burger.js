import React from 'react';

const Burger = ({open , setOpen}) => {
    return(
        <button className={`burger ${open ? 'open' : ''}`}  open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default Burger;