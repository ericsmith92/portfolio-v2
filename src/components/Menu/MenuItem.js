import React from 'react';

const MenuItem = ({ text, dataValue, setOpen, open}) => {

    const scrollToSect = (e) => {
        e.preventDefault();
        const sect = document.getElementById(e.target.dataset.sect);
        setOpen(!open);
        sect.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    return(
        <a href='/' onClick={scrollToSect} data-sect={dataValue}>{text}</a>
    )  
}

export default MenuItem;