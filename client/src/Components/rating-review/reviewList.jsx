import React from 'react';
import ReviewTile from './review.jsx';

// render multiple individual review tiles
// based on the arr passed in the property
const ReviewList = (props) => (
  <div>
    Review List
    {props.reviews.map((details) => (
      <ReviewTile review={details} />
    ))}
  </div>
);

export default ReviewList;
