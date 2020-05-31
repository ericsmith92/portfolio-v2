import React from 'react';
import Highlighter from "react-highlight-words";

const CardReveal = ({ toggleCardState, accomplishments,  githubURL, projectURL }) => {
    const keyWords = ['Node', 'Node JS', 'JavaScript', 'JAMstack', 'React', 'stitching'];
    const accomplishmentsList = accomplishments.map((text, index) => <li key={index}><Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={keyWords}
    autoEscape={true}
    textToHighlight={text}
/></li>);
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
                    <i className="fa fa-github"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={projectURL}>
                    <i className="fa fa-link"></i>
                </a>
           </div>
       </div>
    )
}

export default CardReveal;