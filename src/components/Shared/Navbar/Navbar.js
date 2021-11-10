import React from 'react';
import { Link } from 'react-router-dom';
import defaultUser from '../../../images/default-user.png'
import logo from '../../../images/logo.png'
import './Navbar.css';

const Navbar = () => {
        // const { user, logOut } = useAuth();
        // // Use History For Login:
        // const history = useHistory()

        // const handleLogin = () => {
        //         history.push('/login');
        // }
        return (
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-bg">
                        <div className="container">
                                <Link to="/" className="navbar-brand" href="#">
                                        <img src={logo} className="img-fluid rounded-circle m-0 p-0" width="70" alt="" /> <span className="fw-bold m-0 p-0 text-white fs-6"><span className="fw-bold fs-2 brand-color">SKY</span>Lights</span>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                        <Link to="/home" className="nav-link active fw-bold me-3" aria-current="page">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link to="/addNewProduct" className="nav-link active fw-bold me-3" aria-current="page">Add New Product</Link>
                                                </li>

                                                {/* {
                                                        user?.email ?
                                                                <li className="nav-item">
                                                                        <Link to="/myBookings" className="nav-link active fw-bold" aria-current="page">My Bookings</Link>
                                                                </li>
                                                                :
                                                                ''
                                                }

                                                {
                                                        user?.email ?
                                                                <li className="nav-item">
                                                                        <Link to="/manageAllBookings" className="nav-link active fw-bold" aria-current="page">Manage All Bookings</Link>
                                                                </li>
                                                                :
                                                                ''
                                                }

                                                {
                                                        user?.email ?
                                                                <li className="nav-item">
                                                                        <Link to="/addNewService" className="nav-link active fw-bold" aria-current="page">Add New Booking</Link>
                                                                </li>
                                                                :
                                                                ''
                                                }
                                                <li className="nav-item">
                                                        <p style={{ color: 'orangered' }} className="nav-link active fw-bold">
                                                                {
                                                                        user?.email ?
                                                                                user?.displayName :
                                                                                ''
                                                                }
                                                        </p>
                                                </li>
                                                <li className="nav-item">
                                                        {
                                                                user?.email ?
                                                                        <img src={user?.photoURL ? user?.photoURL : defaultUser} className="img-fluid rounded-circle me-3 border border-dark border-3" width="50" alt="" />
                                                                        :
                                                                        ''

                                                        }
                                                </li>
                                                <li className="nav-item">
                                                        {
                                                                user?.email ?
                                                                        <button onClick={logOut} className="btn brand-btn fw-bolder"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                                                                        :
                                                                        <button style={{ backgroundColor: 'orangered' }} onClick={handleLogin} className="btn brand-btn fw-bold">Login <i className="fas fa-sign-in-alt"></i></button>
                                                        }
                                                </li> */}
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;