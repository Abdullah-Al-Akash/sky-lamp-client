import React from 'react';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useParams,
        useRouteMatch,
        NavLink
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';

const Dashboard = () => {
        let { path, url } = useRouteMatch();
        const { logOut } = useAuth();
        return (
                <div className="container-fluid mt-5 pt-5">
                        <div className="row">

                                <div className="col-lg-9">
                                        <Switch>
                                                <Route exact path={path}>
                                                        <MyOrders />
                                                </Route>
                                                <Route path={`${path}/addNewProduct`}>
                                                        <AddNewProduct></AddNewProduct>
                                                </Route>
                                                <Route path={`${path}/manageAllOrders`}>
                                                        <ManageAllOrders />
                                                </Route>
                                                <Route path={`${path}/review`}>
                                                        <Review />
                                                </Route>
                                                <Route path={`${url}/pay`}>
                                                        <Pay />
                                                </Route>
                                        </Switch>
                                </div>

                                <div className="col-lg-3">
                                        <ul>
                                                <li>
                                                        <Link to={`${url}`}>
                                                                My Orders
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link to={`${url}/pay`}>
                                                                Pay
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link to={`${url}/review`}>
                                                                Review
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link to={`${url}/manageAllOrders`}>
                                                                Manage All Orders
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link to={`${path}/addNewProduct`}>
                                                                Add New Products
                                                        </Link>
                                                </li>
                                                <li>
                                                        <button onClick={logOut} className="btn brand-btn fw-bolder"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                                                </li>
                                        </ul>


                                </div>
                        </div>
                </div>
        );
};

export default Dashboard;