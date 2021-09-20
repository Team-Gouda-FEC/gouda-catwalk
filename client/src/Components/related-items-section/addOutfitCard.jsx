
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
});

const AddOutfitCard = (props) => {
  const prodId = props.productId;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <AddCircleOutlineIcon onClick={() => { props.onClick(prodId)}}/>
          The current product id is: {prodId}
        </CardContent>
      </Card>
    </div>
  );
}

export default AddOutfitCard;
