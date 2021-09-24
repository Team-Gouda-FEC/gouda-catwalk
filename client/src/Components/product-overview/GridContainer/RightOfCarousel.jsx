import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import Avatar from '@material-ui/core/Avatar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddToCart from './AddToCart.jsx';
import Stars from '../../rating-review/StarRating.jsx';
import StyleSelector from './StyleSelector.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '100%',
  },
  formControlSize: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  formControlQuantity: {
    margin: theme.spacing(1),
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
    width: theme.spacing(10),
    height: theme.spacing(10),
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
    currentItemIndex,
    currentItemInfo,
    handleUpdateCarousel,
    productRating,
  } = props;

  const [styleIndex, setCurrentStyleIndex] = useState(0);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleUpdateCurrentStyle = (index) => {
    setCurrentStyleIndex(index);
    console.log('index in right of carousel', currentItemIndex);
    console.log('event', index);
    handleUpdateCarousel(index);
  };

  if (currentItemInfo) {
    return (
      <div className={classes.root}>
        {
          // stars and read all reviews
        }
        <Grid
          container
          elevation={2}
          className={classes.root}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Stars rating={productRating} />
            <Typography variant="button">
              <AnchorLink href="#ratings" color="primary">
                Read all reviews
              </AnchorLink>
            </Typography>
            <br />
          </Grid>
        </Grid>
        {
          // Category name, style, and price
        }
        <Grid
          container
          elevation={0}
          className={classes.root}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              {currentItem.category}
            </Typography>
            <Typography variant="h3">{currentItem.name}</Typography>
            <Typography variant="h5">$ {currentItem.default_price}</Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root2}>
              <Grid container item xs={12}>
                <StyleSelector
                  currentStyles={currentStylesObj}
                  handleUpdateCurrentStyle={handleUpdateCurrentStyle}
                  handleUpdateCarousel={handleUpdateCarousel}
                  currentItemIndex={currentItemIndex}
                />
              </Grid>
            </div>
          </Grid>
          <Grid container elevation={0} className={classes.root}>
            <AddToCart
              currentStyleSkus={currentStylesObj.results[currentItemIndex].skus}
            />
            {/* <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  className={classes.formControlSize}
                  variant="outlined"
                >
                  <InputLabel id="Select Size">Select Size</InputLabel>
                  <Select
                    id="select-size"
                    value={1}
                    label="Select Size"
                    onChange={handleSizeChange}
                  >
                    <MenuItem value={1}>Small</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>Large</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  className={classes.formControlQuantity}
                  color="primary"
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
              <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<AddIcon />}
              >
                ADD TO BAG
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<StarBorderIcon />}
              />
            </Grid>*/}
          </Grid>
        </Grid>
      </div>
    );
  }
  return <CircularProgress />;
}

export default RightOfCarousel;

{
  /* <Grid item xs={12}>
<FacebookIcon /> <TwitterIcon /> <PinterestIcon />
</Grid> */
}
