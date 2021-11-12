import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
        const [services, setServices] = useState([]);
        const history = useHistory();

        // Load Data From JSON File:
        useEffect(() => {
                fetch('http://localhost:5000/products')
                        .then(res => res.json())
                        .then(data => setServices(data));
        }, []);

        // Explore More:
        const exploreMore = () => {
                history.push('/explore')
        }

        return (
                <div id="services" className="container mt-5 pt-5 pb-5">
                        <div className="text-center">
                                <h4 className="fw-bold text-decoration-underline">Our Best Sellers</h4>
                                <h2 className="fw-bold brand-color">POPULAR Choices</h2>
                                {/* Show Services by Mapping */}
                                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                        {
                                                services.length ? services.slice(0, 6).map(service => <Service
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
                                <div className="mt-5">
                                        <button onClick={exploreMore} className="btn brand-btn btn-lg fw-bold">Explore More <i class="fas fa-arrow-right"></i></button>
                                </div>
                        </div>

                </div>
        );
};

export default Services;