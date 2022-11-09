import React from 'react';
import Services from '../Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import FindUs from './FindUs/FindUs';

const Home = () => {
    return (
        <div className='container'>
           <Banner></Banner>
           <Services></Services>
           <AboutUs></AboutUs>
           <FindUs></FindUs>
        </div>
    );
};

export default Home;