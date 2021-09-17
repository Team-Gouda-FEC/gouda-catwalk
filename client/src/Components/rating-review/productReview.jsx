import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    return Math.floor((sum * 10) / count) * 0.1;
  };

  const handleRatingsBreakDown = (breakdownObj) => {
    const newBreakdown = {};
    for (let key in ratingsCount) {
      newBreakdown[key] = breakdownObj[key] || ratingsCount[key];
    }
    setRatingCount(newBreakdown);
  };

  // const getStarRating = (ratingObj) => {

  // };

  useEffect(() => {
    const params = {
      product_id: props.productId,
    };

    axios
      .get('/reviews/meta', { params })
      .then((reviewMetaData) => {
        const rate = getRatingAverage(reviewMetaData.data.ratings);
        setRating(rate);
        handleRatingsBreakDown(reviewMetaData.data.ratings);
        setPercent(getPercent(reviewMetaData.data.recommended));
      })
      .catch((err) => {
        console.log(err);
        console.log('failed to get review meta data');
      });
  }, [props]);

  const getRating = () => {
    // get the average of all reviews
  };

  return (
    <div>
      <h1> {rating} </h1>
      <Stars rating={rating} />
      <p> {recommendationPercent}% of reviews recommend this product</p>
      <Breakdown ratings={ratingsCount} />
    </div>
  );
};

export default ProductReview;
