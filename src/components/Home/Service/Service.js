import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
        const { _id, name, img, description, fee } = props.service;

        // Use History:
        const history = useHistory();
        const booking = () => {
                history.push(`/booking/${_id}`)
        }
        return (
                <div>
                        <div className="col p-3">
                                <div className="h-100 service-card">
                                        <div className="service-img">
                                                <img src={img} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="card-body">
                                                <h3 className="card-title brand-color fw-bold">{name}</h3>
                                                <p className="text-start">{description.slice(0, 100)}</p>
                                        </div>
                                        <div className="d-flex h-100 justify-content-between align-items-center p-3 pt-0">
                                                <h3 className="fw-bold brand-color">${fee}</h3>
                                                <button onClick={booking} className="btn fw-bold brand-btn align-items-center"><i className="fas fa-calendar-check"></i> Book Now</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Service;