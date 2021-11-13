import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
        const history = useHistory();
        // Back To Home Function:
        const backToHome = () => {
                history.push('/');
                window.scrollTo(0, 0);
        }
        return (
                <>
                        <Navbar />
                        <div className="container mt-5 pt-5 text-center">
                                <h1 className="p-5 text-danger fw-bolder">Page Not Found</h1>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnzbyAAEjnF_Av-GbxiCNo-42B_zmd9IrFFQBWT2nIR8k4m9YNsbTc__2zOdHRxCjets&usqp=CAU" className="img-fluid" alt="" />
                                <div className="mt-4 pb-5">
                                        <button onClick={backToHome} className="btn brand-btn btn-lg fw-bolder"><i className="fas fa-arrow-circle-left"></i> Back To Home</button>
                                </div>
                        </div>
                </>
        );
};

export default NotFound;