import React from 'react';
import Rating from 'react-rating';
import './ReviewItem.css';

const ReviewItem = (props) => {
        const { name, review, rating, img } = props.review;
        return (
                <div>
                        <img src="https://gifimages.us/wp-content/uploads/2021/07/Light-Pink-Background-47.jpg" className="img-fluid" style={{ height: '750px' }} alt="Rating" />
                        <div style={{ marginTop: '-680px' }} className="pb-5">
                                <img src={img} className="img-fluid rounded-circle mb-3 border border-dark border-3" style={{ width: '170px', height: '170px' }} alt="" />
                                <h3 className="fw-bold pb-3 mt-3">{name}</h3>
                                <p>{review}</p>
                                <Rating
                                        initialRating={rating}
                                        emptySymbol="far fa-star fa-2x rate"
                                        fullSymbol="fas fa-star fa-2x rate"
                                        readonly
                                />
                        </div>
                </div>
        );
};

export default ReviewItem;