import React from 'react';
import './Banner.css';

const Banner = () => {
        return (
                <div className="banner">
                        <div className="text-light p-2">
                                <div className="">
                                        <h1 className="m-0 p-0 brand-color">Find</h1>
                                        <h2 className="m-0 p-0">Your Table Lamp</h2>
                                        <p className="pt-4">Discover your next great adventure, become an explorer to get started!</p>
                                </div>
                                <div className="mt-4">
                                        <a href="#services">
                                                <button className="btn btn-lg fw-bold brand-btn">Book Now <i className="fas fa-arrow-alt-circle-right"></i></button>
                                        </a>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;