import React from 'react';
import '../styles/Reviews.css';

const Reviews = ({ reviews }) => {
    return (
        <div className="reviews">
            <h2>User Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} className="review">
                    <p>{review.text}</p>
                    <p><strong>- {review.user}</strong></p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
