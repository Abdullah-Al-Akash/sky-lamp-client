import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Home.css';

const Home = () => {
        return (
                <div>
                        <Banner />
                        <About />
                        <Services />
                        <WhyChooseUs />
                </div>
        );
};

export default Home;