import React from 'react';
import Banner from '../Banner/Banner';
import Campain from '../Campaign/Campain';
import Categorie from '../Category/Categorie';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorie></Categorie>
            <Campain></Campain>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;