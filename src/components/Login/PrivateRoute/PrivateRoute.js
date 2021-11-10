import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
        // Call UseAuth For User Data:
        const { user, isLoading } = useAuth();

        if (isLoading) {
                return <div style={{ height: '80vh' }} className="d-flex justify-content-center align-items-center">
                        <img src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" className="img-fluid" alt="" />
                </div>
        }
        return (
                <Route
                        {...rest}
                        render={({ location }) =>
                                user?.email ? (
                                        children
                                ) : (
                                        <Redirect
                                                to={{
                                                        pathname: "/login",
                                                        state: { from: location }
                                                }}
                                        />
                                )
                        }>

                </Route>
        );
};

export default PrivateRoute;