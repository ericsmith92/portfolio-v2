import React from 'react';
import Card from './Card';

const Work = () => {
    return (
        <section className='work' id='work'>
            <div className="work_inner">
                <div className="row">
                    <div className="col-1-of-3">
                        <Card />
                    </div>
                    <div className="col-1-of-3">
                        <Card />
                    </div>
                    <div className="col-1-of-3">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;