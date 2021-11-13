import React, { useEffect, useState } from 'react';
import Shipped from '../Shipped/Shipped';

const ManageAllOrders = () => {
        const [booking, setBooking] = useState([]);

        // Load All Orders From Backend:
        useEffect(() => {
                fetch('https://sky-lamp.herokuapp.com/orders')
                        .then(res => res.json())
                        .then(data => {
                                setBooking(data);
                        })
        }, [booking])

        // Handle Booking Cancel:
        const handleCancelBooking = id => {
                const response = window.confirm("Are you sure about cancel the tour?")
                if (response === true) {
                        const url = `https://sky-lamp.herokuapp.com/orders/${id}`;
                        fetch(url, {
                                method: 'DELETE'
                        })
                                .then(res => res.json())
                                .then(data => {
                                        if (data.deletedCount) {
                                                // alert("Are you sure about cancel the tour?");
                                        }
                                })
                }
                else {
                        return false
                }

        }

        return (
                <div className="">
                        <h4 className="text-center p-5 fw-bold brand-color">Manage All Orders Summary</h4>
                        <div className="row text-success mx-auto">
                                {/* <h4 className="col-1">S.L</h4> */}
                                <h4 className="col-3 fw-bold">Name</h4>
                                <h4 className="col-2 fw-bold">Lamp Name</h4>
                                <h4 className="col-2 fw-bold">Cancel Order</h4>
                                <h4 className="col-2 fw-bold">Shipped Order</h4>
                                <h4 className="col-2 fw-bold">Status</h4>
                        </div>
                        <hr />
                        {
                                booking?.map(booked =>
                                        <div key={booked._id} className="row mx-auto">
                                                <h6 className="col-3">{booked.name}</h6>
                                                <h6 className="col-2">{booked.booking}</h6>
                                                <h6 className="col-2 text-center">
                                                        <button onClick={() => handleCancelBooking(booked._id)} className="btn btn-danger fw-bolder">Cancel</button>
                                                </h6>
                                                <h6 className="col-2 text-center"><Shipped booked={booked}></Shipped></h6>
                                                <h6 className="col-2 mt-2">
                                                        <span className={booked.status === 'Shipped' ? 'Shipped' : 'Pending'}>{booked.status}</span>
                                                </h6>
                                        </div>
                                )
                        }
                </div >
        );
};

export default ManageAllOrders;