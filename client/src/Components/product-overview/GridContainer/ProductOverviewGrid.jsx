import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ProductBlurbs from './ProductBlurbs.jsx';
import ImageGalleryComponent from '../MainCarousel/ImageGalleryComponent.jsx';
import RightOfCarousel from './RightOfCarousel.jsx';

const useStyles = makeStyles((theme) => ({
  ProductOverviewGrid: {
    flexGrow: 1,
    margin: 15,
    padding: theme.spacing(4),
  },
}));

export default function ProductOverviewGrid(props) {
  const classes = useStyles();
  const {
    currentItemId,
    handleUpdateCurrentItem,
    allItems,
    currentItem,
    productRating,
  } = props;
  const [currentStylesObj, setCurrentStyleObj] = useState('');
  const [currentStyleId, setCurrentStyleId] = useState('');
  const [currentItemInfo, setCurrentItemInfo] = useState('');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  function getProductInfo() {
    axios
      .get('/getProductInfo/', {
        params: { product_id: currentItemId },
      })
      .then((response) => {
        setCurrentItemInfo(response.data);
      })
      .catch((error) => {
        console.log(
          '*** getProductInfo in ProductOverviewGrid is not working! ***',
          error
        );
      });
  }

  function getProductStyles() {
    axios
      .get('/getImage/', {
        params: { product_id: currentItemId },
      })
      .then((response) => {
        setCurrentStyleObj(response.data);
      })
      .catch((err) => {
        console.log(
          '*** getProductStyles in ProductOverviewGrid is not working! ***',
          err
        );
      });
  }

  function handleUpdateCarousel(index) {
    console.log('handleUpdateCarousel triggered!', index);
    setCurrentItemIndex(index);
  }

  useEffect(() => {
    getProductInfo();
  }, []);
  useEffect(() => {
    getProductStyles();
  }, []);

  if (currentStylesObj.results) {
    return (
      <>
        <div className="ProductOverviewGrid">
          <Grid
            container
            elevation={0}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid className="carousel" item xs={7}>
              <ImageGalleryComponent
                currentItemStylesArr={
                  currentStylesObj.results[currentItemIndex].photos
                }
              />
            </Grid>
            <Grid className="Product Information" item xs={5}>
              <RightOfCarousel
                currentStylesObj={currentStylesObj}
                handleUpdateCurrentItem={handleUpdateCurrentItem}
                handleUpdateCarousel={handleUpdateCarousel.bind(this)}
                currentItem={currentItem}
                currentItemInfo={currentItemInfo}
                productRating={productRating}
              />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h5">{currentItem.slogan}.</Typography>
              <Typography variant="body1">{currentItem.description}</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={4}>
              <ProductBlurbs currentItemInfo={currentItemInfo} />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
  return <CircularProgress />;
}
