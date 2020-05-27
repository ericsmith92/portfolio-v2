import React from 'react';

const CardReveal = ({ toggleCardState }) => {
    return(
       <div className='card_reveal'>
           <div className='card_reveal__heading'>
                <h3 className='heading_tertiary'>Accomplishments</h3>
                <button className='card_reveal__close' onClick={() => toggleCardState()}>&times;</button>
           </div>
       </div>
    )
}

export default CardReveal;