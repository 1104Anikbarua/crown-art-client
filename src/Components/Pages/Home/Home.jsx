import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeSlider from './HomeSlider/HomeSlider';
import PopularClasses from './PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;