/* eslint-disable react/destructuring-assignment */
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
import Stars from '../../rating-review/StarRating.jsx';
import StyleSelector from './StyleSelector.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: 15,
  },
  formControlSize: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  formControlQuantity: {
    margin: 15,
    minWidth: 100,
  },
  button: {
    margin: theme.spacing(2),
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

  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  if (props.currentItemInfo.features && props.currentStyles.results) {
    return (
      <div className={classes.root}>
        <Grid container elevation={0} className={classes.root}>
          <Grid item xs={12}>
            <Stars />
            <Typography variant="subtitle2">Read all reviews</Typography>
            <Typography variant="body2">
              {props.currentItem.category}
            </Typography>
            <Typography variant="h3">{props.currentItem.name}</Typography>
            <Typography variant="subtitle2">
              $ {props.currentItem.default_price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root2}>
              <Grid container>
                {props.currentStyles.results.map((style) => {
                  <Grid container item xs={12}>
                    <Typography>
                      Style
                      {'>'}
                      {style.name}
                    </Typography>
                  </Grid>;
                })}
                <Grid container item xs={12}>
                  <StyleSelector currentStyles={props.currentStyles.results} />
                </Grid>
              </Grid>
            </div>
            <>
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  className={classes.formControlSize}
                  variant="outlined"
                >
                  <InputLabel id="Select Size">Select Size</InputLabel>
                  <Select
                    id="select-size"
                    value={10}
                    label="Select Size"
                    onChange={handleSizeChange}
                  >
                    <MenuItem value={10}>Small</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>Large</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  className={classes.formControlQuantity}
                  variant="outlined"
                >
                  <InputLabel id="Select Quantity">Quantity</InputLabel>
                  <Select
                    id="select-quantity"
                    value={1}
                    label="Select Quantity"
                    onChange={handleQuantityChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button variant="outlined" color="primary" endIcon={<AddIcon />}>
                ADD TO BAG
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<StarBorderIcon />}
              />
            </>
          </Grid>
        </Grid>
      </div>
    );
  }
  return <CircularProgress />;
}

export default RightOfCarousel;
