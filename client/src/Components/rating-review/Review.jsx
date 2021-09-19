/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Divider from '@material-ui/core/Divider';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import Stars from './starRating.jsx';

const months = {
  '01': 'Janurary',
  '02': 'Feburary',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const ReviewTile = (props) => {
  const getDate = () => {
    let { date } = props.review;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    date = date.slice(10);
    return `${months[month]} ${Number(day)}, ${year}`;
  };

  const getPurchaseVerification = () => {
    if (false) {
      return <CheckCircleRoundedIcon fontSize="small" />;
    }
    return false;
  };

  const getUserRecommendation = () => {
    if (props.review.recommend) {
      return (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <CheckIcon fontSize="small" /> <div>I recommend this product</div>
        </Grid>
      );
    }
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {getPurchaseVerification()} {props.review.reviewer_name}, {getDate()}
      </Grid>
      <Stars rating={props.review.rating} />
      <h3> {props.review.summary} </h3>
      <p> {props.review.body}</p>
      {getUserRecommendation()}
      <Divider />
      <br />
    </div>
  );
};

export default ReviewTile;
