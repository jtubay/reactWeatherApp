import React from 'react';

const Weather = () => {
    return(
        <div className="container">
            <div className="cards">
                <h1>London</h1>
                <h5>
                <i className="far fa-sun display-1"></i>
                </h5>
                <h1 className='py-2'>25&deg;</h1>
            </div>
        </div>
    );
}

const minmaxTemp = (min, mx) =>{
    return(
        <div>
            <h3>
                <span className="px-4">
                    {min}&deg;
                </span>
                <span className="px-4">
                    {min}&deg;
                </span>
            </h3>
        </div>
    )
}

export default Weather;