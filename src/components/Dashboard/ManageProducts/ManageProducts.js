import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
        const [products, setProducts] = useState([]);

        // Load All Orders From Backend:
        useEffect(() => {
                fetch('https://sky-lamp.herokuapp.com/products')
                        .then(res => res.json())
                        .then(data => {
                                setProducts(data);
                        })
        }, [products])

        // Handle Booking Cancel:
        const handleCancelBooking = id => {
                const response = window.confirm("Are you sure about Delete the Product?")
                if (response === true) {
                        const url = `https://sky-lamp.herokuapp.com/products/${id}`;
                        fetch(url, {
                                method: 'DELETE'
                        })
                                .then(res => res.json())
                                .then(data => {
                                        if (data.deletedCount) {

                                        }
                                })
                }
                else {
                        return false
                }

        }

        return (
                <div className="pb-5">
                        <h4 className="text-center p-5 fw-bold brand-color">Manage All Orders Summary</h4>
                        <div className="row text-success ">
                                <h4 className="col-5 fw-bold">Product Name</h4>
                                <h4 className="col-2 fw-bold">Price</h4>
                                <h4 className="col-2 fw-bold ms-5">Action</h4>
                        </div>
                        <hr />
                        {
                                products?.map(product =>
                                        <div key={product._id} className="row ">
                                                <h6 className="col-5">{product.name}</h6>
                                                <h6 className="col-2">${product.fee}</h6>
                                                <h6 className="col-2 text-center">
                                                        <button onClick={() => handleCancelBooking(product._id)} className="btn btn-danger fw-bolder">Delete Product</button>
                                                </h6>
                                        </div>
                                )
                        }
                </div >
        );
};

export default ManageProducts;