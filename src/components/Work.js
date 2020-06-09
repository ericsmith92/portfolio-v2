import React from 'react';
import Card from './Card/Card';

const Work = () => {
    return (
        <section className='work' id='work'>
            <div className="work_inner">
                <h2 className="heading_secondary heading_secondary__decorated"><span>Recent</span><span>Work</span></h2>
                <div className="row">
                    <div className="col-1-of-3">
                        <Card 
                            src='/images/covid-19-banner.png' 
                            title='Covid-19 Tracker' 
                            description='Interact with countries on a map to retrieve Covid-19 data.'
                            accomplishments={['JAMstack project with React front-end', 'Error handling and displaying using React Portals', 'Dusted off some highschool math to derive lat and long from an XY coordinate on mouseclick']}
                            githubURL='https://github.com/ericsmith92/web-mercator/'
                            projectURL='https://ericsmith92.github.io/web-mercator/'
                            />
                    </div>
                    <div className="col-1-of-3">
                        <Card 
                            src='/images/instapaper-banner.png'  
                            title='Instapaper' 
                            description='Rearrange and stitch together recent posts from an Instagram account to make a wallpaper.'
                            accomplishments={['Web scraping with a Node JS backend', 'Dependency free vanilla JavaScript front-end', 'Image writing, resizing, and stitching on the fly']}
                            githubURL='https://github.com/ericsmith92/instapaper'
                            projectURL='http://whispering-chamber-94643.herokuapp.com/'
                            />
                    </div>
                    <div className="col-1-of-3">
                        <Card 
                            src='/images/instapaper-search.png' 
                            title='Project 3' 
                            description='Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            accomplishments={['Lorem ipsum dolor sit amet', 'sed do eiusmod tempor incididunt ut labore', ' incididunt ut labore et dolore magna aliqua']}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;