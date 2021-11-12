import React from 'react';


const Shipped = (props) => {
        const { booked } = props;
        const { _id } = props.booked;
        const handleStatus = id => {
                const url = `http://localhost:5000/orders/${id}`;
                fetch(url, {
                        method: 'PUT',
                        headers: {
                                'content-type': 'application/json'
                        },
                        body: JSON.stringify(booked)
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data.matchedCount > 0) {
                                        alert("Successfully Shipped Status")
                                }
                        })
        }
        return (
                <div>
                        <button onClick={() => handleStatus(_id)} className="btn btn-success fw-bold">Shipped</button>
                </div>
        );
};

export default Shipped;