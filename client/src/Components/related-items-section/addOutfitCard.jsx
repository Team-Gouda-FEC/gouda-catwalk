
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, makeStyles, IconButton, MoreVertIcon, Button } from '@material-ui/core';
import Stars from '../rating-review/StarRating.jsx';
import AnimatedModal from './animatedModal.jsx';
import axios from 'axios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
  },
  media: {
    height: 150,
  },
  circle: {
    height: 250,
    width: 250,
  },
});

const AddOutfitCard = (props) => {
  const prodId = props.productId;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <AddCircleOutlineIcon className={classes.circle} onClick={() => { props.onClick(prodId)}}/>
          <Typography variant='h5'> ADD OUTFIT </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddOutfitCard;
