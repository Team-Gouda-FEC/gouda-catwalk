import React, { useState } from 'react';
import Stars from './starRating.jsx';
import Breakdown from './ratingBreakdown.jsx';

const ProductReview = () => {
  const [rating] = useState(2.5);
  const [recommendationPercent] = useState(100);
  const [ratingsCount] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  // const setRatingState = () => {
  //   // update the state with the average of props.ratings
  // }

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h2>  {rating} </h2>
      <Stars rating={rating} />
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p> {recommendationPercent}% </p>
      <Breakdown ratings={ratingsCount} />
    </div>
  );
};

export default ProductReview;
