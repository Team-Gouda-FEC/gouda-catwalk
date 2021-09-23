import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Stars from './starRating.jsx';
import Breakdown from './ratingBreakdown.jsx';
import TraitBreakout from './traitBreakout.jsx';

const ProductReview = (props) => {
  const { filterBy } = props;
  const [rating, setRating] = useState(0);
  const [recommendationPercent, setPercent] = useState(0);
  const [traitObj, setTraitObj] = useState({});
  const [traitsArr, setTraitsArr] = useState([]);
  const [ratingsCount, setRatingCount] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const setTraits = (traits) => {
    const traitNames = Object.keys(traits);
    const tObj = {};
    const ids = {};
    traitNames.map((traitDetails) => {
      tObj[traitDetails] = traits[traitDetails].value;
    });
    setTraitsArr(traitNames);
    setTraitObj(tObj);
  };

  const setReviewCount = (recObj) => {
    const positiveCount = Number(recObj.true);
    const negativeCount = Number(recObj.false);
    props.setTotalReviewCount(positiveCount + negativeCount);
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
    return sum || 0;
  };

  const handleRatingsBreakDown = (breakdownObj) => {
    const newBreakdown = {};
    for (let key in ratingsCount) {
      newBreakdown[key] =
      Number(breakdownObj[key]) || ratingsCount[key];
    }
    setRatingCount(newBreakdown);
  };

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
            setTraits(reviewMetaData.data.characteristics);
          })
          .catch((err) => {
            console.log(err);
            console.log('failed to get review meta data');
          });
      }
    }
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.productId]);

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
      <p> {recommendationPercent || 0}% of reviews recommend this product</p>
      <Breakdown
        filterBy={filterBy}
        ratings={ratingsCount}
        reviewCount={props.totalReviewCount}
        setFilterBy={props.setFilterBy}
      />
      <br />
      <TraitBreakout traits={traitsArr} traitObj={traitObj} />
    </Grid>
  );
};

export default ProductReview;
