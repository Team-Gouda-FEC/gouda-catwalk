/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Stars from './starRating.jsx';

const ReviewTile = (props) => {
  const getDate = () => {
    let { date } = props.review;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    date = date.slice(10);
    return `${month}, ${day}, ${year}`;
  };

  const getCheck = () => {
    if (props.review.recommend) {
      return <CheckCircleRoundedIcon />;
    }
    return false;
  };

  return (
    <div style={{ width: '400px' }}>
      <div id="reviewDetails"> {getCheck()} {props.review.reviewer_name}, {getDate()} </div>
      <Stars rating={props.review.rating} />
      <h3> {props.review.summary} </h3>
      <p> {props.review.body}</p>
      <br />
      {/* eslint-disable-next-line react/self-closing-comp */}
      <hr></hr>
    </div>
  );
};

export default ReviewTile;
