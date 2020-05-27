import React from 'react';

class CardToggle extends React.Component{

    render(){
        const { toggleCardState } = this.props;
        return(
            <div className='card_toggle' onClick={() => toggleCardState()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default CardToggle;