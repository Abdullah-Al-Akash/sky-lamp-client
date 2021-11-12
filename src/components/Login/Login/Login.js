import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './Login.css';
import img from '../../../images/login-img.png';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
        const { handleEmail, handlePassword, signInWithGoogle, error, handleUserLogin, saveUser } = useAuth();

        const location = useLocation();
        const history = useHistory();
        const redirect_URI = location.state?.from || '/';
        console.log(redirect_URI);

        // Google Login:
        const handleGoogleLogin = () => {
                signInWithGoogle()
                        .then((result) => {
                                // Save User in Database:
                                saveUser(result.user?.email, result.user?.displayName, 'PUT');
                                history.push(redirect_URI);
                        })
        }

        // Handle User Login With Email And Password:
        const handleLogin = (e) => {
                e.preventDefault();
                handleUserLogin()
                history.push(redirect_URI);
        }

        // Handle Form:
        const [form, setForm] = useState(false)
        const handleForm = (e) => {
                e.preventDefault();
                setForm(true)
        }

        return (
                <div>
                        <Navbar />
                        {
                                !form ?
                                        <div className="container mt-5 pt-5 ">

                                                <div className="row pt-4 p-5">
                                                        <div className="col-lg-6 signInForm">
                                                                <h2 className="text-center brand-color p-4 fw-bold mt-5 mb-3">Please Login</h2>
                                                                <form onSubmit={handleLogin} className="w-75 mx-auto">
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                                                                <input onBlur={handleEmail} type="email" className="form-control" placeholder="Your Email" required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                                                                <input onBlur={handlePassword} type="password" className="form-control" required placeholder="Your Password (at least 6digit)" />
                                                                                {
                                                                                        error ?
                                                                                                <p className="text-danger">{error}</p>
                                                                                                :
                                                                                                ''
                                                                                }
                                                                        </div>

                                                                        <div className="d-grid gap-2">
                                                                                <button type="submit" className="btn brand-btn fw-bold btn-lg login-btn">
                                                                                        Login <i className="fas fa-sign-in-alt"></i>
                                                                                </button>
                                                                        </div>
                                                                        <div className="mb-3 pt-2 ps-2">
                                                                                <p>Need To Create New Account?
                                                                                        <a href="" onClick={handleForm}> Click Here</a>
                                                                                </p>
                                                                        </div>
                                                                </form>

                                                                <div className="d-grid gap-2 w-75 mt-3 mx-auto">
                                                                        <button onClick={handleGoogleLogin} className="btn brand-btn btn-lg fw-bold login-btn">
                                                                                <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="32" alt="" /> Sign In Using Google
                                                                        </button>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6 mx-auto pt-5">
                                                                <img src={img} className="img-fluid" alt="" />
                                                        </div>
                                                </div>
                                        </div>
                                        :
                                        <CreateAccountForm />
                        }
                </div>
        );
};

export default Login;