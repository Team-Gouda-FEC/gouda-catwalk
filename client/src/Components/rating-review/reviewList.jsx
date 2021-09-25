import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReviewTile from './review.jsx';
import AddReview from './addReview.jsx';
import MoreReviews from './moreReviews.jsx';
import ReviewForm from './reviewForm.jsx';

// render multiple individual review tiles
// based on the arr passed in the property
const ReviewList = (props) => {
  const { filterBy, maxCount, reviews, setReviewCount, count, productId } = props;

  const getReviews = () => {
    const filter = Number(filterBy);
    const reviewList = [];
    let cutOff = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      // a catch just incase reviews count is too high
      // needed since reported messages iterfeers with overall interview count
      if (reviews[i] === undefined) {
        break;
      }
      // only render "count" components
      if (cutOff >= count || cutOff >= maxCount) {
        break;
      }
      if (reviews[i].rating === filter || filter === 0) {
        reviewList.push(reviews[i]);
        cutOff += 1;
      }
    }
    return reviewList;
  };

  const incrementCount = () => {
    setReviewCount(count + 2);
  };

  const moreReviewsButton = () => {
    if (count >= props.totalReviewCount || count >= maxCount) {
      return <div />
    }
    return <MoreReviews setReviewCount={incrementCount} />
  };

  // const handleScroll = (event) => {
  //   const bottom = event.target.scrollHeight - event.target.scrollTop -1 <= event.target.clientHeight;
  //   // console.log(event.target.scrollHeight - event.target.scrollTop);
  //   if (bottom) {
  //     console.log('Reached the bottom');;
  //   }
  // };

  return (
    <div>
      <div style={{ maxHeight: 450, overflow: 'scroll' }}>
        {/* eslint-disable-next-line react/prop-types */}
        {getReviews().map((details, index) => (
          <ReviewTile
            key={index.toString()}
            review={details}
            handleReport={props.handleReport}
          />
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
            <AddReview
              // eslint-disable-next-line react/destructuring-assignment
              updateReviews={props.updateReviews}
              product_id={productId}
              // eslint-disable-next-line react/destructuring-assignment
              characteristics={props.characteristics}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ReviewList;
