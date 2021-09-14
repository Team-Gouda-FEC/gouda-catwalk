import React from 'react';
import Stars from './starRating.jsx';
import Breakdown from './rating_Breakdown.jsx'

class ProductReview extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      rating: 2.5,
      recommendationPercent: 100,
      ratingsCount: {
        5 : 0,
        4 : 0,
        3 : 0,
        2 : 0,
        1 : 0
      }
    };
  }

  setRatingState = () => {
    // update the state with the average of props.ratings
  }

  render () {
    return (
      <div>
        <h2>  {this.state.rating} </h2>
        <Stars rating = {this.state.rating}/>
        <p> {this.state.recommendationPercent}% </p>
        <Breakdown ratings = {this.state.ratingsCount}/>
      </div>
    )
  }
}

export default ProductReview;