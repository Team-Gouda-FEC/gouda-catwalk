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
    margin: 5,
  },
  ProductInformation: {
    flexGrow: 1,
  },
}));

export default function ProductOverviewGrid(props) {
  const classes = useStyles();
  const { currentItemId, currentItem, productRating, updateCurrentIndex } =
    props;
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
    setCurrentItemIndex(index);
    updateCurrentIndex(index);
  }

  useEffect(() => {
    getProductInfo();
  }, [currentItemId]);
  useEffect(() => {
    getProductStyles();
  }, [currentItemId]);

  if (currentStylesObj.results) {
    return (
      <>
        <div className={classes.ProductOverviewGrid}>
          {
            // Carousel
          }
          <Grid
            container
            elevation={4}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item className="carousel" xs={7}>
              {console.log('currentStylesObj', currentStylesObj)}
              <ImageGalleryComponent
                currentItemStylesArr={
                  currentStylesObj.results[currentItemIndex].photos
                }
              />
            </Grid>
            <Grid item className={classes.ProductInformation} xs={5}>
              <RightOfCarousel
                currentStylesObj={currentStylesObj}
                handleUpdateCarousel={handleUpdateCarousel.bind(this)}
                currentItemIndex={currentItemIndex}
                currentItem={currentItem}
                currentItemInfo={currentItemInfo}
                productRating={productRating}
              />
            </Grid>
          </Grid>
        </div>
        <Grid container elevation={5} spacing={2}>
          <Grid item className="blurbs" xs={7}>
            <Typography variant="h4" color="secondary">
              {currentItem.slogan}.
            </Typography>
            <br />
            <Typography variant="body1">{currentItem.description}</Typography>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <ProductBlurbs currentItemInfo={currentItemInfo} />
        </Grid>
      </>
    );
  }
  return <CircularProgress />;
}
