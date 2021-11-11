import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
        const { register, handleSubmit, reset } = useForm();
        const { user } = useAuth();
        const onSubmit = data => {
                console.log(data);
                // Setup POST Request:
                // axios.post('http://localhost:5000/products', data)
                //         .then(res => {
                //                 if (res.data.insertedId) {
                //                         alert("Added New Service Successfully");
                //                         reset();
                //                 }
                //         })
        }
        return (
                <div className="container mt-5 pt-5 pb-5 new-service">
                        <h3 className="text-center p-5 fw-bold brand-color text-decoration-underline">Please Add New Service</h3>
                        <div className="row">
                                <div className="col-lg-6 form-section p-5">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Your Name</label>
                                                        <input className="form-control" defaultValue={user ? user.displayName : ''} {...register("name", { required: true })} readOnly />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Write Your Review</label>
                                                        <textarea className="form-control" {...register("review")} rows="4" placeholder="Write Your Review" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Review(Out of 5)</label>
                                                        <input type="number" className="form-control" {...register("review-number")} placeholder="Review(Out of 5)" />
                                                </div>
                                                <div className="mb-3 d-grid gap-2">
                                                        <input className="btn btn-dark fw-bold fs-4" type="submit" value="Add New Booking" />
                                                </div>
                                        </form>
                                </div>
                                <div className="col-lg-6">
                                        {/* <div className="d-flex justify-content-center">
                                                <img src={img} className="img-fluid" alt="" />
                                        </div> */}
                                </div>
                        </div>
                </div>
        );
};

export default Review;