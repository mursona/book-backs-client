import React from 'react';
import Banner from './Banner';
import BookCategories from './Category/BookCategories';
import Reviews from './Review/Reviews';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <BookCategories></BookCategories>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;