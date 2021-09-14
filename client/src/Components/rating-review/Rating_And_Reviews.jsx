import React from 'react';

import ProductReview from './product_Review.jsx';
import AddReview from './add_Review.jsx';
import MoreReviews from './more_Reviews.jsx';
import SortReviews from './review_Sorting.jsx';
import ReviewList from './review_List.jsx';

class RatingAndReviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <br />
        <h2> Ratings_Reviews </h2>
        <ProductReview />
        <AddReview />
        <MoreReviews />
        <SortReviews />
        <ReviewList reviews = { [] }/>
      </div>
    )
  }
}

export default RatingAndReviews;
