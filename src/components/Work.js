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
                            src='/portfolio-v2/images/harness-inspection-cover.png' 
                            title='Harness Inspection App' 
                            description='A fullstack app that guides you through a safety harness inspection that I worked on with another developer.'
                            accomplishments={['Authored a custom WordPress plugin to register custom post types, allowing for querying and creation of custom post type data via GraphQL', 'Built an interactive React SVG component that guides a user through each harness point needing inspection', 'Sign Up for free and test it out!']}
                            githubURL='https://github.com/harness-software/harness-inspection'
                            projectURL='https://inspections.harnessup.com/harness-inspection/register'
                        />
                    </div>
                    <div className="col-1-of-3">
                        <Card 
                            src='/portfolio-v2/images/covid-19-banner.png' 
                            title='Covid-19 Tracker' 
                            description='Interact with countries on a map to retrieve Covid-19 data.'
                            accomplishments={['JAMstack project with React front-end', 'Error handling and displaying using React Portals', 'Dusted off some highschool math to derive lat and long from an XY coordinate on mouseclick']}
                            githubURL='https://github.com/ericsmith92/web-mercator/'
                            projectURL='https://ericsmith92.github.io/web-mercator/'
                            />
                    </div>
                    <div className="col-1-of-3">
                        <Card 
                            src='/portfolio-v2/images/instapaper-banner.png'  
                            title='Instapaper' 
                            description='Rearrange and stitch together random photos from a search term to make a wallpaper.'
                            accomplishments={['Node JS Express backend', 'PUG templating engine used on the front-end', 'Images retrieved using the Unsplash API', 'Image writing, resizing, and stitching on the fly. Images can be rearranged on the front-end to change the order']}
                            githubURL='https://github.com/ericsmith92/collage-maker'
                            projectURL='http://instapapier.herokuapp.com/'
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;
