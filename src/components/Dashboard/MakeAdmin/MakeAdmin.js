import React, { useState } from 'react';

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
                <div>
                        <h3>Make An Admin</h3>
                        <form onSubmit={handleAdmin}>
                                <input onBlur={handleOnblur} type="email" />
                                <input type="submit" value="Make An Admin" />
                        </form>
                </div>
        );
};

export default MakeAdmin;