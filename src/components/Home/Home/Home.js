import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DisplayReviews from '../Reviews/DisplayReviews/DisplayReviews';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Home.css';

const Home = () => {
        return (
                <div>

                        <Navbar />
                        <Banner />
                        <About />
                        <Services />
                        <WhyChooseUs />
                        <DisplayReviews />
                </div>
        );
};

export default Home;