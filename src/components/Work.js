import React from 'react';
import Card from './Card/Card';

const Work = () => {
    return (
        <section className='work' id='work'>
            <div className="work_inner">
                <div className="row">
                    <div className="col-1-of-3">
                        <Card src='http://localhost:3000/covid-19-tracker-sm.png' title='Covid-19 Tracker' description='Interact with countries on a map to fetch Covid-19 data.'/>
                    </div>
                    <div className="col-1-of-3">
                        <Card src='http://localhost:3000/instapaper-sm.png'  title='Instapaper' description='Rearrange and stitch together recent posts from an Instagram account to make a wallpaper.'/>
                    </div>
                    <div className="col-1-of-3">
                        <Card src='http://localhost:3000/instapaper-search.png' title='Project 3' description='Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;