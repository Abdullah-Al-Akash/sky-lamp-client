import React from 'react';
import './WhyChooseUs.css'
import img1 from '../../../images/Why Choose Us/1.png'
import img2 from '../../../images/Why Choose Us/2.png'
import img3 from '../../../images/Why Choose Us/3.png'

const WhyChooseUs = () => {
        return (
                <div className="container mt-5 pb-5">
                        <div className="text-center">
                                <h1 className="brand-color fw-bold">Why Sky Lamp Best?</h1>
                                <h6>Here are reasons you should know before purchase!</h6>
                                <div className="row text-center mt-5 pt-3 pb-5">
                                        <div className="col-lg-4 p-2">
                                                <img src={img1} className="img-fluid" width="120" alt="" />
                                                <div className="mt-3">
                                                        <h4 className="brand-color fw-bold">Handpicked Lamp</h4>
                                                        <p className="mt-3 pe-3">We love the modern feel of the Fabric Table Lamp and it will definitely play a vital. Table Lamps handpicked by Justina and good wine inspired.</p>
                                                </div>
                                        </div>
                                        <div className="col-lg-4 p-2">
                                                <img src={img2} className="img-fluid" width="120" alt="" />
                                                <div className="mt-3">
                                                        <h4 className="brand-color fw-bold">World Class Table Lamp</h4>
                                                        <p className="mt-3 pe-3">World class service is defined as vastly exceeding customers' expectations and building brand loyalty as a result.</p>
                                                </div>
                                        </div>
                                        <div className="col-lg-4 p-2">
                                                <img src={img3} className="img-fluid" width="120" alt="" />
                                                <div className="mt-3">
                                                        <h4 className="brand-color fw-bold">Best Price Guarantee</h4>
                                                        <p className="mt-3 pe-3">Our Best Price Guarantee means that you can be sure of booking at the best rate.
                                                                If you find a lower price elsewhere within 24 hours.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default WhyChooseUs;