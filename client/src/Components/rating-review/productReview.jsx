import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Stars from './starRating.jsx';
import Breakdown from './ratingBreakdown.jsx';

const ProductReview = (props) => {
  const [rating, setRating] = useState(0);
  const [recommendationPercent, setPercent] = useState(0);
  const [ratingsCount, setRatingCount] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const setReviewCount = (recObj) => {
    const positiveCount = Number(recObj.true);
    const negativeCount = Number(recObj.false);
    props.setMoreReviews(positiveCount + negativeCount);
  };

  const getPercent = (recObj) => {
    const positiveCount = Number(recObj.true);
    const negativeCount = Number(recObj.false);
    const total = positiveCount + negativeCount;
    return Math.floor((positiveCount * 100) / total);
  };

  const getRatingAverage = (obj) => {
    let sum = 0;
    let count = 0;
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      const value = Number(obj[keys[i]]);
      sum += Number(keys[i]) * value;
      count += value;
    }
    sum = Math.round((sum * 10) / count) / 10;
    return sum;
  };

  const handleRatingsBreakDown = (breakdownObj) => {
    const newBreakdown = {};
    for (let key in ratingsCount) {
      newBreakdown[key] =
      Number(breakdownObj[key]) || ratingsCount[key];
    }
    setRatingCount(newBreakdown);
  };

  // const getStarRating = (ratingObj) => {

  // };

  useEffect(() => {
    if (props.productId !== undefined) {
      const params = {
        product_id: props.productId,
      };
      if (props.productId) {
        axios
          .get('/reviews/meta', { params })
          .then((reviewMetaData) => {
            const rate = getRatingAverage(reviewMetaData.data.ratings);
            setRating(rate);
            props.handleProductRatingChange(rate);
            handleRatingsBreakDown(reviewMetaData.data.ratings);
            setReviewCount(reviewMetaData.data.recommended);
            setPercent(getPercent(reviewMetaData.data.recommended));
            props.setChar(reviewMetaData.data.characteristics);
          })
          .catch((err) => {
            console.log(err);
            console.log('failed to get review meta data');
          });
      }
    }
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.productId]);

  const getRating = () => {
    // get the average of all reviews
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ height: '60px', boxSizing: 'border-box' }}
      >
        <Grid item>
          <Typography style={{ height: '40px', fontSize: '3em' }}>
            {rating}
          </Typography>
        </Grid>
        <Grid item>
          <div style={{ paddingLeft: '25px' }}>
            <Stars rating={rating} />
          </div>
        </Grid>
      </Grid>
      <p> {recommendationPercent}% of reviews recommend this product</p>
      <Breakdown ratings={ratingsCount} reviewCount={props.totalReviewCount} />
    </Grid>
  );
};

export default ProductReview;
