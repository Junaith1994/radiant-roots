import React from 'react';
import Banner from '../Banner/Banner';
import Activities from '../Activities/Activities';

const Home = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <Activities></Activities>
        </div>
    );
};

export default Home;