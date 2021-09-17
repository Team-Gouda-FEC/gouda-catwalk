/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CategoryInfo from './CategoryInfo.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductBlurbs from './ProductBlurbs.jsx';
import ImageGalleryComponent from '../MainCarousel/ImageGalleryComponent.jsx';

const useStyles = makeStyles((theme) => ({
  ProductOverviewGrid: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function ProductOverviewGrid(props) {
  const classes = useStyles();

  return (
    <>
      <div className="ProductOverviewGrid">
        <Grid container elevation={0}>
          <Grid className="carousel" item xs={7}>
            <ImageGalleryComponent
              handleUpdateCurrentItem={props.handleUpdateCurrentItem}
              allItems={props.allItems}
              currentItem={props.currentItem}
              currentStyles={props.currentStyles}
            />
          </Grid>
          <Grid className="Product Information" item xs={5}>
            <ProductInfo
              currentStyles={props.currentStyles}
              currentItem={props.currentItem}
              currentItemId={props.currentItemId}
            />
            <CategoryInfo
              currentStyles={props.currentStyles}
              currentItem={props.currentItem}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">{props.currentItem.slogan}.</Typography>
            <Typography variant="body1">
              {props.currentItem.description}
            </Typography>
          </Grid>
          <Divider orientation="vertical" />
          <Grid item>
            <ProductBlurbs productInfo={props.productInfo} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
