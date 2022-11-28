import React from 'react';
import Campain from '../Campain/Campain';
import Banner from '../Banner/Banner';
import CategoryAll from '../Category/CategoryAll';
import Reviews from '../Review/Reviews'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Campain></Campain>
            <CategoryAll></CategoryAll>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;