import React from 'react';
import BannerImg from './BannerImg';
import BannerBio from './BannerBio';
import BannerAnchor from './BannerAchor';
import BannerLoader from './BannerLoader';

class Banner extends React.Component{

    state = {
        me: {}
    }

    componentDidMount(){
        fetch('https://api.github.com/users/ericsmith92')
            .then(resp => resp.json())
            .then(json => {
                    this.setState({ me: json });
                }
            )
            .catch(err => console.log(err));
    }

    render(){
        if(Object.keys(this.state.me).length){
            return(
                <div className="banner">
                    <div className="banner_inner">
                        {this.state.me ? <BannerImg src={this.state.me.avatar_url}/> : ''}
                        {this.state.me ? <BannerBio text={this.state.me.bio}/> : ''}
                        <BannerAnchor dataValue='work'/>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="banner">
                    <div className="banner_inner">
                        <BannerLoader />
                    </div>
                </div>
            )
        }
    }
}

export default Banner;