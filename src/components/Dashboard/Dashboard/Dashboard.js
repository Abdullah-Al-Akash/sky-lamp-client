import React from 'react';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        NavLink,
        Link,
        useParams,
        useRouteMatch,
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './Dashboard.css';
import logo from '../../../images/logo.png';
import defaultUser from '../../../images/default-user.png';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
        let { path, url } = useRouteMatch();
        const { logOut, user, admin } = useAuth();
        return (
                <div className="container-fluid">
                        <div className="row flex-column-reverse flex-md-row">
                                <div className="col-lg-9">
                                        <Switch>
                                                <Route exact path={path}>
                                                        {
                                                                admin ?
                                                                        <ManageAllOrders /> :
                                                                        < MyOrders />
                                                        }
                                                </Route>
                                                <Route exact path={`${path}/review`}>
                                                        <Review />
                                                </Route>
                                                <AdminRoute exact path={`${path}/addNewProduct`}>
                                                        <AddNewProduct></AddNewProduct>
                                                </AdminRoute>
                                                <AdminRoute exact path={`${path}/manageAllOrders`}>
                                                        <ManageAllOrders />
                                                </AdminRoute>
                                                <AdminRoute exact path={`${path}/makeAdmin`}>
                                                        <MakeAdmin />
                                                </AdminRoute>
                                                <AdminRoute exact path={`${path}/manageProducts`}>
                                                        <ManageProducts />
                                                </AdminRoute>
                                                <Route exact path={`${url}/pay`}>
                                                        <Pay />
                                                </Route>
                                        </Switch>
                                </div>

                                <div className="col-lg-3 bg-dark pt-3">
                                        <Link to="/" className="navbar-brand" href="#">
                                                <img src={logo} className="img-fluid rounded-circle m-0 p-0" width="70" alt="" /> <span className="fw-bold m-0 p-0 text-white fs-6"><span className="fw-bold fs-2 brand-color">S</span>ky Lamp</span>
                                        </Link>
                                        <ul className="mt-5">
                                                <li className="dashboard-item">
                                                        {
                                                                user?.email ?
                                                                        <img src={user?.photoURL ? user?.photoURL : defaultUser} className="img-fluid rounded-circle me-3 border border-dark border-3" width="80" alt="" />
                                                                        :
                                                                        ''

                                                        }
                                                </li>
                                                {
                                                        !admin && <div>
                                                                <li className="dashboard-item">
                                                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${url}`}>
                                                                                My Orders
                                                                        </NavLink>
                                                                </li>
                                                                <li className="dashboard-item">
                                                                        <NavLink activeStyle={{
                                                                                fontWeight: "bold",
                                                                                color: "#FF1493"
                                                                        }} style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${url}/pay`}>
                                                                                Pay
                                                                        </NavLink>
                                                                </li>
                                                                <li className="dashboard-item">
                                                                        <NavLink activeStyle={{
                                                                                fontWeight: "bold",
                                                                                color: "#FF1493"
                                                                        }} style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${url}/review`}>
                                                                                Review
                                                                        </NavLink>
                                                                </li>
                                                        </div>
                                                }
                                                {
                                                        admin && <div>
                                                                <li className="dashboard-item">
                                                                        <h5 style={{ textDecoration: 'none', color: 'greenYellow', fontWeight: 'bold' }}>
                                                                                Admin
                                                                        </h5>
                                                                </li>
                                                                <li className="dashboard-item">
                                                                        <NavLink activeStyle={{
                                                                                fontWeight: "bold",
                                                                                color: "#FF1493"
                                                                        }} style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${url}/manageAllOrders`}>
                                                                                Manage All Orders
                                                                        </NavLink>
                                                                </li>
                                                                <li className="dashboard-item">
                                                                        <NavLink activeStyle={{
                                                                                fontWeight: "bold",
                                                                                color: "#FF1493"
                                                                        }} style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${path}/addNewProduct`}>
                                                                                Add New Products
                                                                        </NavLink>
                                                                </li>
                                                                <li className="dashboard-item">
                                                                        <NavLink activeStyle={{
                                                                                fontWeight: "bold",
                                                                                color: "#FF1493"
                                                                        }} style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${url}/makeAdmin`}>
                                                                                Make Admin
                                                                        </NavLink>
                                                                </li>
                                                                <li className="dashboard-item">
                                                                        <NavLink activeStyle={{
                                                                                fontWeight: "bold",
                                                                                color: "#FF1493"
                                                                        }} style={{ textDecoration: 'none', color: 'white' }} className="dashboard-link" to={`${url}/manageProducts`}>
                                                                                Manage Products
                                                                        </NavLink>
                                                                </li>
                                                        </div>
                                                }
                                                <li className="dashboard-item">
                                                        <button onClick={logOut} className="btn brand-btn fw-bolder"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div >
        );
};

export default Dashboard;