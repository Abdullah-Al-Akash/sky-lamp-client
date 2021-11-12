import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReviewItem from '../ReviewItem/ReviewItem';
const DisplayReviews = () => {
        const [reviews, setReviews] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5000/reviews')
                        .then(res => res.json())
                        .then(data => {
                                console.log(data)
                                setReviews(data)
                        });
        }, [])
        return (
                <Carousel showArrows={true} >
                        {
                                reviews.map(review => <ReviewItem
                                        key={review._id}
                                        review={review}
                                >

                                </ReviewItem>)
                        }
                </Carousel>
        );
};

export default DisplayReviews;