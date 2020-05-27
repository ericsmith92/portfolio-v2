import React from 'react';
import CardToggle from './CardToggle';
import CardReveal from './CardReveal';

class Card extends React.Component{
    
    state={
        active: false
    }

    toggleCardState = () =>{
        if(this.state.active){
            this.setState({ active: false });
        }else{
            this.setState({ active: true });
        }
    }

    render(){
        const {
            src,
            title,
            description
        } = this.props;

        return(
            <div className={`card ${this.state.active ? 'active' : ''}`}>
                <div className='card_top'>
                    <img className='card_img' src={src} alt='' title='' />
                </div>
                <div className='card_bottom'>
                    <h3 className='heading_tertiary'>{title}</h3>
                    <CardToggle toggleCardState={this.toggleCardState}/>
                    <p>{description}</p>
                </div>
                <CardReveal toggleCardState={this.toggleCardState}/>
            </div>
        )
    }
}

export default Card;