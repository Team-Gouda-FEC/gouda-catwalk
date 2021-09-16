import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductReview from './productReview.jsx';
import SortReviews from './reviewSorting.jsx';
import ReviewList from './reviewList.jsx';
import dummyData from './dummy_data.jsx';

const RatingAndReviews = (props) => {
  const [productId] = useState('38325');
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [sortOrder] = useState('relevent');

  useEffect(() => {
  //   const headers = {
  //     page: 1,
  //     count: 5,
  //     sort: 'relevent',
  //     product_id: productId,
  //   };
  //   axios.get('/reviews', headers)
  //     .then((data) => {
  //       console.log(data);
    // });
    // change results to be the results prop from axios return
    const results = dummyData.dummyData;
    setReviews(results);
  }, []);

  return (
    <div>
      <br />
      <h2> Ratings Reviews </h2>
      <ProductReview />
      <SortReviews
        sortType={sortOrder}
        count={reviews.length}
      />
      <ReviewList
        reviews={reviews}
        count={reviewCount}
        setReviewCount={setReviewCount}
      />
    </div>
  );
};

export default RatingAndReviews;
