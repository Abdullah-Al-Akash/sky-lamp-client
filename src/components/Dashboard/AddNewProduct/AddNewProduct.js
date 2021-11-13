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
                axios.post('https://sky-lamp.herokuapp.com/products', data)
                        .then(res => {
                                if (res.data.insertedId) {
                                        alert("Added New Service Successfully");
                                        reset();
                                }
                        })
        }
        return (
                <div className="container pb-5 new-service">
                        <h3 className="text-center p-5 fw-bold brand-color text-decoration-underline">Please Add New Product</h3>
                        <div className="row">
                                <div className="col-lg-3">

                                </div>
                                <div className="col-lg-6 form-section p-5">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Product Name</label>
                                                        <input className="form-control" {...register("name", { required: true })} placeholder="Product Name" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Product Details</label>
                                                        <input className="form-control" {...register("description")} placeholder="Product Details" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Product Charge</label>
                                                        <input className="form-control" type="number" {...register("fee")} placeholder="Product Charge" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label fw-bold fs-5">Provide Products Image</label>
                                                        <input className="form-control" {...register("img")} placeholder="Image URL" />
                                                </div>
                                                <div className="mb-3 d-grid gap-2">
                                                        <input className="btn btn-dark fw-bold fs-4" type="submit" value="Add New Product" />
                                                </div>
                                        </form>
                                </div>
                                <div className="col-lg-3">

                                </div>
                        </div>
                </div>
        );
};

export default AddNewProduct;