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

const Dashboard = () => {
        let { path, url } = useRouteMatch();
        return (
                <div className="container mt-5 pt-5">
                        <div className="row">

                                <div className="col-lg-4">
                                        <ul>
                                                <li>
                                                        <Link to={`${url}/pay`}>
                                                                Pay
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link to={`${url}`}>
                                                                My Orders
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link to={`${path}/addNewProduct`}>
                                                                Add New Products
                                                        </Link>
                                                </li>
                                        </ul>


                                </div>
                                <div className="col-lg-8">
                                        <Switch>
                                                <Route exact path={path}>
                                                        <MyOrders />
                                                </Route>
                                                <Route path={`${path}/addNewProduct`}>
                                                        <AddNewProduct></AddNewProduct>
                                                </Route>
                                                <Route path={`${url}/pay`}>
                                                        <Pay />
                                                </Route>
                                        </Switch>
                                </div>
                        </div>
                </div>
        );
};

export default Dashboard;