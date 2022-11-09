import React from 'react';
import Services from '../Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='container'>
           <Banner></Banner>
           <Services></Services>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;