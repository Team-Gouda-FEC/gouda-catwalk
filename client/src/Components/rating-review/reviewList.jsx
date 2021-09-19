import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ReviewTile from './review.jsx';
import AddReview from './addReview.jsx';
import MoreReviews from './moreReviews.jsx';

// render multiple individual review tiles
// based on the arr passed in the property
const ReviewList = (props) => {
  const { reviews } = props;
  const { setReviewCount } = props;
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

  const incrementCount = () => {
    setReviewCount(count + 2);
  };

  const moreReviewsButton = () => {
    const element =
      count >= reviews.length ? (
        ''
      ) : (
        <MoreReviews setReviewCount={incrementCount} />
      );
    return element;
  };

  return (
    <div>
      <div style={{ maxHeight: 400, overflow: 'scroll' }}>
        {/* eslint-disable-next-line react/prop-types */}
        {getReviews().map((details, index) => (
          <ReviewTile key={index.toString()} review={details} />
        ))}
      </div>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item>{moreReviewsButton()}</Grid>
          <Grid item>
            <AddReview />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ReviewList;
