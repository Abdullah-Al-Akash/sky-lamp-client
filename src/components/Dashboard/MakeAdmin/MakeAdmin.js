import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
        const [email, setEmail] = useState('');
        const handleOnblur = e => {
                setEmail(e.target.value);
        }

        // Handle Admin Function:
        const handleAdmin = e => {
                e.preventDefault();
                const user = { email };
                fetch('http://localhost:5000/users/admin', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user)
                })
                        .then(res => res.json())
                        .then(data => {
                                console.log(data)
                        })
        }
        return (
                <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="makeAdmin">
                                <h3 className="m-5 brand-color fw-bold">Make An Admin</h3>
                                <form onSubmit={handleAdmin}>
                                        <input onBlur={handleOnblur} type="email" className="form-control" placeholder="Enter Email Address" />
                                        <div className="d-grid gap-2">
                                                <input type="submit" value="Make An Admin" className="btn brand-btn mt-1 fw-bold" />
                                        </div>
                                </form>
                        </div>
                </div>
        );
};

export default MakeAdmin;