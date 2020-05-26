import React from 'react';
import CardToggle from './CardToggle';

class Card extends React.Component{
    
    state={
        active: false
    }

    toggleCardState = () =>{
        this.setState({ active: true });
    }

    render(){
        const {
            src,
            title,
            description
        } = this.props;

        return(
            <div className='card'>
                <div className='card_top'>
                    <img className='card_img' src={src} alt='' title='' />
                </div>
                <div className='card_bottom'>
                    <h3 className='heading_tertiary'>{title}</h3>
                    <CardToggle toggleCardState={this.toggleCardState}/>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Card;