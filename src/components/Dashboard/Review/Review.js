import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
        const { register, handleSubmit, reset } = useForm();
        const { user } = useAuth();
        console.log(user)
        const onSubmit = data => {
                console.log(data);
                // Setup POST Request:
                axios.post('http://localhost:5000/reviews', data)
                        .then(res => {
                                if (res.data.insertedId) {
                                        alert("Review Added");
                                        reset();
                                }
                        })
        }
        return (
                <div className="pb-5 new-service">
                        <h3 className="text-center p-5 fw-bold brand-color text-decoration-underline">Please Add New Service</h3>
                        <div className="row container ">
                                <div className="col-lg-12 form-section p-5 mx-auto">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Your Name</label>
                                                        <input className="form-control" defaultValue={user ? user.displayName : ''} {...register("name", { required: true })} readOnly />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Your Image Link</label>
                                                        <input className="form-control" {...register("img")} defaultValue={
                                                                user?.photoURL ? user.photoURL : 'https://i.ibb.co/mqmyxwX/default-user.png'
                                                        } readOnly />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Write Your Review</label>
                                                        <textarea className="form-control" {...register("review")} rows="4" placeholder="Write Your Review" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Rating(Out of 5)</label>
                                                        <input type="number" className="form-control" {...register("rating")} placeholder="Review(Out of 5)" />
                                                </div>
                                                <div className="mb-3 d-grid gap-2">
                                                        <input className="btn btn-dark fw-bold fs-4" type="submit" value="Add New Booking" />
                                                </div>
                                        </form>
                                </div>
                                {/* <div className="col-lg-6">
                                        <div className="d-flex justify-content-center">
                                                <img src={img} className="img-fluid" alt="" />
                                        </div>
                                </div> */}
                        </div>
                </div>
        );
};

export default Review;