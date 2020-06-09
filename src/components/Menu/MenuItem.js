import React from 'react';
import { scrollToSect } from '../hooks';

const MenuItem = ({ text, dataValue, setOpen, open}) => {

    return(
        <a href='/' onClick={(e) => scrollToSect(e, open, setOpen)} data-sect={dataValue}>{text}</a>
    )  
}

export default MenuItem;