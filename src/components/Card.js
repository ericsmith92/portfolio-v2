import React from 'react';

const Card = ({src}) => {
    return(
        <div className='card'>
            <div className='card_top'>
                <img className='card_img' src={src} alt='' title='' />
            </div>
            <div className='card_bottom'>

            </div>
        </div>
    )
}

export default Card;