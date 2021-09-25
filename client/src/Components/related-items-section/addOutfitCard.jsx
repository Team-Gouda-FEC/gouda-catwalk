import React, { useState, useEffect } from 'react';
import {
  Card,
  Grid,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  MoreVertIcon,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Stars from '../rating-review/StarRating.jsx';
import AnimatedModal from './animatedModal.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
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
  const { handleAddOutfitClick, productId } = props;
  const classes = useStyles();

  function handleClick(id) {
    handleAddOutfitClick(id);
  }

  return (
    <div>
      <Card className={classes.root}>
        <Grid container justifyContent="center" alignItems="center">
          <CardContent>
            <AddCircleOutlineIcon
              className={classes.circle}
              onClick={() => {
                handleClick(productId);
              }}
            />
            <Typography variant="h5" align="center">
              {' '}
              ADD OUTFIT{' '}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </div>
  );
};

export default AddOutfitCard;
