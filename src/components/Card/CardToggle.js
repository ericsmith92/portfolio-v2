import React from 'react';

class CardToggle extends React.Component{

    render(){
        const { toggleCardState } = this.props;
        return(
            <button className='card_toggle' onClick={() => toggleCardState()}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        )
    }
}

export default CardToggle;