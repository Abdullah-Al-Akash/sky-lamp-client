import React from 'react';
import './About.css';
import img from '../../../images/about.png';

const About = () => {
        return (
                <div className="mt-5 pt-5 container">
                        <div className="row">
                                <div className="col-lg-6 mt-4">
                                        <img src={img} className="img-fluid rounded-3 img" style={{ height: '500px' }} alt="" />
                                </div>
                                <div className="col-lg-6 mt-5 pt-5">
                                        <div className="">
                                                <h4 className="fw-bold">About SKY Lamp</h4>
                                                <h2 className="fw-bold brand-color">World Best <br /> Table Lamp Company <br /> Since 2015.</h2>
                                        </div>
                                        <p className="pe-5 pt-3">Our style guides help you discover the look you wish to achieve, and make finding the perfect lighting fixture easier and more enjoyable.
                                                <br />
                                                Explore our top styles and jump to the lighting designs you're sure to love.</p>
                                </div>
                        </div>
                </div>
        );
};

export default About;