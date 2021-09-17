/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Stars from '../../rating-review/StarRating.jsx';
import StyleSelector from './StyleSelector.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ProductInfo(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container elevation={0}>
        <Grid item xs={12}>
          <Stars />
          <Typography variant="subtitle2">Read all reviews</Typography>
          <Typography variant="body2">{props.currentItem.category}</Typography>
          <Typography variant="h3">{props.currentItem.name}</Typography>
          <Typography variant="subtitle2">$ {props.currentItem.default_price}</Typography>
        </Grid>
        <Grid item xs={12}>
          <StyleSelector
            currentItemId={props.currentItemId}
            currentItem={props.currentItem}
            currentStyles={props.currentStyles}
          />
        </Grid>
      </Grid>
    </div>
  );
}
