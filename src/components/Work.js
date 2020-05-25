import React from 'react';
import Card from './Card';

const Work = () => {
    return (
        <section className='work' id='work'>
            <div className="work_inner">
                <div className="row">
                    <div className="col-1-of-3">
                        <Card src='http://localhost:3000/covid-19-tracker-sm.png' />
                    </div>
                    <div className="col-1-of-3">
                        <Card src='http://localhost:3000/instapaper-sm.png'  />
                    </div>
                    <div className="col-1-of-3">
                        <Card src='http://localhost:3000/instapaper-search.png'  />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;