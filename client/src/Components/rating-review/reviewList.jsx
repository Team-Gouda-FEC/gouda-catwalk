import React, { useState, useEffect } from 'react';
import ReviewTile from './review.jsx';
import AddReview from './addReview.jsx';
import MoreReviews from './moreReviews.jsx';

// render multiple individual review tiles
// based on the arr passed in the property
const ReviewList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { reviews } = props;
  // eslint-disable-next-line react/prop-types
  const { setReviewCount } = props;
  // eslint-disable-next-line react/prop-types
  const { count } = props;

  const getReviews = () => {
    const reviewList = [];
    for (let i = 0; i < count; i += 1) {
      if (reviews[i] === undefined) {
        break;
      }
      reviewList.push(reviews[i]);
    }
    return reviewList;
  };

  useEffect(() => {
    console.log(getReviews());
    console.log(count);
  }, [props], count);

  const incrementCount = () => {
    setReviewCount(count + 2);
  };

  return (
    <div>
      <div>
        Review List
        {/* eslint-disable-next-line react/prop-types */}
        {getReviews().map((details) => (
          <ReviewTile review={details} />
        ))}
      </div>
      <div>
        <AddReview />
        <MoreReviews
          setReviewCount={incrementCount}
        />
      </div>
    </div>
  );
};

export default ReviewList;
