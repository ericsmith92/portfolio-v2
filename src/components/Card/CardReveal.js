import React from 'react';

const CardReveal = ({ toggleCardState, accomplishments }) => {
    
    const accomplishmentsList = accomplishments.map((text, index) => <li key={index}>{text}</li>);
    //TODO: make a new component and wraps keywords in <strong></strong> tags
    return(
       <div className='card_reveal'>
           <div className='card_reveal__heading'>
                <h3 className='heading_tertiary'>Accomplishments</h3>
                <button className='card_reveal__close' onClick={() => toggleCardState()}>&times;</button>
           </div>
           <div className='card_reveal__body'>
                <ul className='card_reveal__ul'>
                    {accomplishmentsList}
                </ul>
           </div>
       </div>
    )
}

export default CardReveal;