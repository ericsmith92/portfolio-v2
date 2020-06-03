import React from 'react';
import BannerImg from './BannerImg';
import BannerBio from './BannerBio';
import BannerAnchor from './BannerAchor';

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
        return(
            <div className="banner">
                <div className="banner_inner">
                    {this.state.me ? <BannerImg src={this.state.me.avatar_url}/> : ''}
                    {this.state.me ? <BannerBio text={this.state.me.bio}/> : ''}
                    <BannerAnchor />
                </div>
            </div>
        )
    }
}

export default Banner;