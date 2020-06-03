import React from 'react';

const Burger = ({open , setOpen}) => {
    return(
        <div className={`burger ${open ? 'open' : ''}`}  open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger;