import React from 'react';

const Banner = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <div className='mb-3'><h2 className='text-uppercase'>"Empowering Lives, Igniting Hope: Your Support Matters Here."</h2></div>
            <div className='input-group mb-3 d-flex'>
                <input type="text" className="form-control" placeholder="Search" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <button className="btn btn-primary" type="button">Search</button>
            </div>
        </div>
    );
};

export default Banner;