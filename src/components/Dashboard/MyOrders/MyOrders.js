import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrderCard from '../MyOrderCard/MyOrderCard';

const MyOrders = () => {
        const { user } = useAuth()
        const [booking, setBooking] = useState([]);

        // Load All Orders From Backend:
        useEffect(() => {
                fetch('http://localhost:5000/orders')
                        .then(res => res.json())
                        .then(data => {
                                setBooking(data)
                        })
        }, [booking]);

        // Find Users Orders:
        const usersBooking = booking?.filter(booked => booked.email === user?.email)
        return (
                <div>
                        <div className="container pt-5">
                                <h3 className="text-center brand-color fw-bold mt-5">My Bookings</h3>
                                <div className="row text-success mt-5 mx-auto">
                                        <h4 className="col-3 fw-bold">Name</h4>
                                        <h4 className="col-2 fw-bold">Tour Place</h4>
                                        <h4 className="col-2 fw-bold">Order Cancel</h4>
                                        <h4 className="col-2 fw-bold">Status</h4>
                                </div>
                                <hr />
                                {

                                        usersBooking?.map(booked => <MyOrderCard
                                                key={booked._id}
                                                booked={booked}
                                        >

                                        </MyOrderCard>)
                                }
                        </div>
                </div>
        );
};

export default MyOrders;