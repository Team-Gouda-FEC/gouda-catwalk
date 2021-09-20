/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
              allItems={props.allItems}
              currentItem={props.currentItem}
              currentStyles={props.currentStyles}
            />
          </Grid>
          <Grid className="Product Information" item xs={5}>
            <RightOfCarousel
              currentStyles={props.currentStyles}
              currentItem={props.currentItem}
              currentItemId={props.currentItemId}
              currentItemInfo={props.currentItemInfo}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5">{props.currentItem.slogan}.</Typography>
            <Typography variant="body1">
              {props.currentItem.description}
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={4}>
            <ProductBlurbs
              currentItem={props.currentItem}
              currentStyles={props.currentStyles}
              currentItemInfo={props.currentItemInfo}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
