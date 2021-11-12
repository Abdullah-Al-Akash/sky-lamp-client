import React from 'react';

const ReviewItem = (props) => {
        const { name, review, rating, img } = props.review;
        return (<div>
                <img src="https://wallpapercave.com/wp/wp2665743.jpg" />
                <div className="legend">
                        <img src={img} className="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }} alt="" />
                        <h3>{name}</h3>
                        <p>{review}</p>
                        <p>{rating}</p>
                </div>
        </div>
        );
};

export default ReviewItem;