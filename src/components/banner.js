import React from 'react';

// importing svg as a react component
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

const Banner = ({title}) => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique brands is</span>
                        </div>
                        <div className="line">
                            <span>what we do.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">
                            More about us <RightArrow/>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Banner;
