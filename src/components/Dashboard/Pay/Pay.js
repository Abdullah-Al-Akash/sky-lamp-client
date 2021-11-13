import React from 'react';

const Pay = () => {
        return (
                <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="makeAdmin">
                                <h3 className="m-5 brand-color fw-bold">Pay with Card</h3>
                                <form>
                                        <div>
                                                <label for="exampleInputEmail1" class="form-label fw-bold">Card Number</label>
                                                <input type="number" className="form-control" placeholder="Card Number" />
                                        </div>
                                        <div className="mt-3">
                                                <label for="exampleInputEmail1" class="form-label fw-bold">Expiry Date</label>
                                                <input type="date" className="form-control" placeholder="Expiry Date" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                                <input type="submit" value="Pay" className="btn brand-btn mt-1 fw-bold" />
                                        </div>
                                </form>
                        </div>
                </div>
        );
};

export default Pay;