/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Stars from './StarRating.jsx';

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
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ReviewTile = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { review } = props;
  const { handleReport } = props;
  const getDate = () => {
    let { date } = review;
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
    if (review.recommend) {
      return (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <CheckIcon fontSize="small" /> <Typography>I recommend this product</Typography>
        </Grid>
      );
    }
  };

  const getHelpfulness = () => (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{ margin: '1em 0' }}
    >
      <Grid item style={{ fontSize: '.7em' }}>
        <Typography>
        Helpful? <u>Yes</u> ({review.helpfulness}) |
        <u style={{marginLeft: ".25em"}} onClick={handleClick} id={review.review_id}>
          Report
        </u>
        </Typography>
      </Grid>
    </Grid>
  );

  const handleClick = (event) => {
    handleReport(event.target.id);
  };

  const generatePics = () => {
    const pics = review.photos.map((image, index) => (
      <Avatar key={index} id="image" src={image.url} />
    ));
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        style={{ maxWidth: '500px' }}
      >
        {pics}
      </Grid>
    );
  };

  const generateResponse = () => {
    if (review.response === null || review.response === '') {
      return;
    }
    const resp = <Typography>Response: {review.response}</Typography>;
    return (
      <div
        style={{
          marginLeft: '1em',
          marginRight: '2em',
          backgroundColor: 'lightgrey',
        }}
      >
        {resp}
      </div>
    );
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {getPurchaseVerification()}{' '}
        <Typography>
          {' '}
          {review.reviewer_name}, {getDate()}{' '}
        </Typography>
      </Grid>
      <Stars rating={review.rating} />
      <Typography variant="body1"> {review.summary} </Typography>
      <Typography variant="body1"> {review.body}</Typography>
      {getUserRecommendation()}
      {generateResponse()}
      {getHelpfulness()}
      {generatePics()}
      <Divider />
      <br />
    </div>
  );
};

export default ReviewTile;
