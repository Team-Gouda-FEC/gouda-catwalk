import React, { useState } from 'react';

import ProductReview from './productReview.jsx';
import AddReview from './addReview.jsx';
import MoreReviews from './moreReviews.jsx';
import SortReviews from './reviewSorting.jsx';
import ReviewList from './reviewList.jsx';

const RatingAndReviews = () => {
  const [data] = useState([]);

  return (
    <div>
      <br />
      <h2> Ratings Reviews </h2>
      <ProductReview />
      <AddReview />
      <MoreReviews />
      <SortReviews />
      <ReviewList reviews={data} />
    </div>
  );
};

export default RatingAndReviews;
