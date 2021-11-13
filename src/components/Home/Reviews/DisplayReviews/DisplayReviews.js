import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReviewItem from '../ReviewItem/ReviewItem';
const DisplayReviews = () => {
        const [reviews, setReviews] = useState([]);

        useEffect(() => {
                fetch('https://sky-lamp.herokuapp.com/reviews')
                        .then(res => res.json())
                        .then(data => {
                                console.log(data)
                                setReviews(data)
                        });
        }, [])
        return (
                <>
                        <h2 className="brand-color text-center mt-5 pt-5 pb-5 fw-bold">See Our Customer Reviews</h2>
                        <Carousel showArrows={true} >
                                {
                                        reviews.map(review => <ReviewItem
                                                key={review._id}
                                                review={review}
                                        >
                                        </ReviewItem>)
                                }
                        </Carousel>
                </>
        );
};

export default DisplayReviews;