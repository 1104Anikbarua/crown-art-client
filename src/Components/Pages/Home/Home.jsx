import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeSlider from './HomeSlider/HomeSlider';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularClassesSection from './PopularClassesSection/PopularClassesSection';
import PopularInstructorSection from './PopularInstructorSection/PopularInstructorSection';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructorSection></PopularInstructorSection>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;