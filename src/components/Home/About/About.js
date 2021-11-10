import React from 'react';
import './About.css';
import img from '../../../images/family-tour.png';

const About = () => {
        return (
                <div className="mt-5 pt-5 container">
                        <div className="row">
                                <div className="col-lg-6 mt-4">
                                        <img src={img} className="img-fluid rounded-3 img" alt="" />
                                </div>
                                <div className="col-lg-6 mt-4">
                                        <div className="ps-4">
                                                <h4 className="">About Asia Travel Agency</h4>
                                                <h2 className="fw-bold brand-color">World Best <br /> Travel Agency Company <br /> Since 2015.</h2>
                                        </div>
                                        <p className="ps-4 pe-5 pt-3">Think of Classic Journeys as your well-connected friend. For more than a quarter of a century, we've been handcrafting walking tours that connect guests with our friends around the world—amazing local guides, artisans, winemakers."</p>
                                </div>
                        </div>
                </div>
        );
};

export default About;