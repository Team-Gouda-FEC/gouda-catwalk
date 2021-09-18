import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import ProductReview from './productReview.jsx';
import SortReviews from './reviewSorting.jsx';
import ReviewList from './reviewList.jsx';
import dummyData from './dummy_data.jsx';

const RatingAndReviews = (props) => {
  const [productId, setProductId] = useState(props.productId);
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [sortOrder, setSortOrder] = useState('relevent');

  useEffect(() => {
    const params = {
      page: 1,
      count: 5,
      sort: sortOrder,
      product_id: productId,
    };

    axios.get('/reviews', {params})
      .then((reviews) => {
        setReviews(reviews.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
<<<<<<< HEAD
  }, [productId, sortOrder]);
=======
  }, [productId]);
>>>>>>> master

  useEffect(() => {
    setProductId(props.productId);
  }, [props]);

  return (
    <div>
      <br />
      <Grid container direction="row" justifyContent="space-around" alignItems="flex-start">
        <Grid item xs={3}>
          <h2> Ratings Reviews </h2>
          <ProductReview productId={productId} />
        </Grid>

        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <SortReviews
              sortType={sortOrder}
              count={reviews.length}
<<<<<<< HEAD
              changeSort={setSortOrder}
=======
>>>>>>> master
            />
            <ReviewList
              reviews={reviews}
              count={reviewCount}
              setReviewCount={setReviewCount}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingAndReviews;
