import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import Navbar from '../Shared/Navbar/Navbar';

const ExploreMore = () => {
        const [services, setServices] = useState([]);

        // Load Data From JSON File:
        useEffect(() => {
                fetch('https://sky-lamp.herokuapp.com/products')
                        .then(res => res.json())
                        .then(data => setServices(data));
        }, []);
        return (
                <>
                        <Navbar />
                        <div id="services" className="container mt-5 pt-5 pb-5">
                                <div className="text-center pb-5 mt-5">
                                        <h4 className="fw-bold text-decoration-underline">Our Best Sellers</h4>
                                        <h2 className="fw-bold brand-color">Popular Choices</h2>
                                        {/* Show Services by Mapping */}
                                        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                                {
                                                        services.length ? services.map(service => <Service
                                                                key={service._id}
                                                                service={service}
                                                        >

                                                        </Service>)
                                                                :
                                                                <div style={{ height: '80vh' }} className="mx-auto mt-5">
                                                                        <img src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" className="img-fluid" alt="" />
                                                                </div>
                                                }
                                        </div>
                                </div>
                        </div>
                </>
        );
};

export default ExploreMore;