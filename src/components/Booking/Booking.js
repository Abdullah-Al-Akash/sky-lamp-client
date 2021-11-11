import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
        const { id } = useParams();
        const history = useHistory();

        // State For Data:
        const [service, setService] = useState({});

        // Load Data From Server Site:
        useEffect(() => {
                fetch(`http://localhost:5000/products/${id}`)
                        .then(res => res.json())
                        .then(data => setService(data))
        }, [])

        // User Information:
        const { user } = useAuth();
        // React Hook Form:
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
                data.booking = service?.name;
                data.img = service?.img;
                data.fee = service?.fee;
                data.status = 'Pending';
                console.log(data)
                fetch('http://localhost:5000/orders', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(data)
                })
                        .then(res => res.json())
                        .then(result => {
                                if (result.insertedId) {
                                        alert("Successfully Booked! Have a safe journey!");
                                        reset()
                                        history.push('/dashboard')
                                }
                        })
        };
        return (
                <div className="container booking mt-5 pt-5 pb-5">
                        <h3 className="text-center fw-bolder mt-5">Please Confirm Booking</h3>
                        <div className="row pt-5">
                                <div className="col-lg-5 tour-details">
                                        <h2 className="brand-color fw-bold text-center">{service.name}</h2>
                                        <img src={service.img} className="img-fluid p-4" alt="" />
                                        <div className="d-flex justify-content-between ps-4 pe-4 fw-bold text-success">
                                                <h3>${service.fee}</h3>
                                                <h3>Family Package</h3>
                                        </div>
                                        <div className="ps-4 pe-4">
                                                <p>{service.description}</p>
                                        </div>
                                </div>
                                <div className="col-lg-1"></div>
                                {/* Order Form */}
                                <div className="col-lg-6 form-section p-5">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                        <label className="form-label">Your Name</label>
                                                        <input className="form-control" defaultValue={user ? user.displayName : ''} {...register("name", { required: true })} readOnly />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label">Your Email</label>
                                                        <input className="form-control" defaultValue={user ? user.email : ''} {...register("email", { required: true })} readOnly />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label">Package</label>
                                                        <input className="form-control" defaultValue="Family Package" {...register("package", { required: true })} readOnly />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label">Your Phone Number</label>
                                                        <input className="form-control" type="number" {...register("phone", { required: true })} />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label">Your Address</label>
                                                        <input className="form-control" {...register("address", { required: true })} />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label">Your City</label>
                                                        <input className="form-control" {...register("city", { required: true })} />
                                                </div>
                                                <div className="d-grid gap-2">
                                                        <input className="btn btn-dark fw-bold fs-4" type="submit" value="Confirm Booking" />
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Booking;