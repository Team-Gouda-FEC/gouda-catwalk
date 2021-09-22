import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import AddToCart from './AddToCart.jsx';
import Stars from '../../rating-review/StarRating.jsx';
import StyleSelector from './StyleSelector.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: 15,
    minWidth: 100,
  },
  formControlSize: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  formControlQuantity: {
    margin: 15,
    minWidth: 100,
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 5,
    margin: 10,
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: 5,
    margin: 10,
    border: '1px solid black',
  },
}));

function RightOfCarousel(props) {
  const classes = useStyles();
  const {
    currentStylesObj,
    currentItem,
    currentItemInfo,
    handleUpdateCarousel,
    productRating,
  } = props;

  const [styleIndex, setCurrentStyle] = useState();

  const handleUpdateCurrentStyle = (event) => {
    setCurrentStyle(event.target.value);
    handleUpdateCarousel(event.target.value);
  };

  if (currentItemInfo) {
    return (
      <div className={classes.root}>
        <Grid container elevation={0} className={classes.root}>
          <Grid item xs={12}>
            <Stars rating={productRating}/>
            <Typography variant="subtitle2">Read all reviews</Typography>
            <Typography variant="body2">{currentItem.category}</Typography>
            <Typography variant="h3">{currentItem.name}</Typography>
            <Typography variant="subtitle2">
              $ {currentItem.default_price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root2}>
              <Grid container item xs={12}>
                <StyleSelector
                  currentStylesObj={currentStylesObj}
                  handleUpdateCurrentStyle={handleUpdateCurrentStyle}
                  handleUpdateCarousel={handleUpdateCarousel}
                />
              </Grid>
            </div>
          </Grid>
          <>
            <AddToCart currentStylesObj={currentStylesObj} />
          </>
        </Grid>
      </div>
    );
  }
  return <CircularProgress />;
}

export default RightOfCarousel;
