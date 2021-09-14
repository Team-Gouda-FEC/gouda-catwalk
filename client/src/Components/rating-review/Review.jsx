import React from 'react';
import Stars from './starRating.jsx';

const ReviewTile = (props) => (
  <div style={{ width: '400px' }}>
    <div id="reviewDetails"> UserName, Month, Date, Year </div>
    <Stars rating = {4}/>
    <h3> Review Heading / Title </h3>
    <p> Review content</p>
    <br/>
    <hr></hr>
  </div>
)

export default ReviewTile;