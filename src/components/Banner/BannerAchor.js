import React from 'react';
import { scrollToSect } from '../hooks';

const BannerAnchor = ({ dataValue }) => {
    return <button onClick={(e) => scrollToSect(e)} className="banner_anchor" data-sect={dataValue}>View Recent Projects</button>
}

export default BannerAnchor;
