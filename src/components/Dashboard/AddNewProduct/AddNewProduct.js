import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../images/add-service.png';
import './AddNewProduct.css';

const AddNewProduct = () => {
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
                console.log(data);
                // Setup POST Request:
                axios.post('http://localhost:5000/products', data)
                        .then(res => {
                                if (res.data.insertedId) {
                                        alert("Added New Service Successfully");
                                        reset();
                                }
                        })
        }
        return (
                <div className="container mt-5 pt-5 pb-5 new-service">
                        <h3 className="text-center p-5 fw-bold brand-color text-decoration-underline">Please Add New Service</h3>
                        <div className="row">
                                <div className="col-lg-6 form-section p-5">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Tour Area</label>
                                                        <input className="form-control" {...register("name", { required: true })} placeholder="Tour Area" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Place Details</label>
                                                        <input className="form-control" {...register("description")} placeholder="Place Details" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Tour Fee</label>
                                                        <input className="form-control" type="number" {...register("fee")} placeholder="Fee" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Provide Tour Places Image</label>
                                                        <input className="form-control" {...register("img")} placeholder="Image URL" />
                                                </div>
                                                <div className="mb-3 d-grid gap-2">
                                                        <input className="btn btn-dark fw-bold fs-4" type="submit" value="Add New Booking" />
                                                </div>
                                        </form>
                                </div>
                                <div className="col-lg-6">
                                        <div className="d-flex justify-content-center">
                                                <img src={img} className="img-fluid" alt="" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default AddNewProduct;