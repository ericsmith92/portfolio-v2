import React from 'react';

const CardReveal = ({ toggleCardState, accomplishments,  githubURL, projectURL }) => {
    
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
           <div className='card_reveal__footing'>
                <a target="_blank" rel="noopener noreferrer" href={githubURL}>
                    <i class="fa fa-github"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={projectURL}>
                    <i class="fa fa-link"></i>
                </a>
           </div>
       </div>
    )
}

export default CardReveal;