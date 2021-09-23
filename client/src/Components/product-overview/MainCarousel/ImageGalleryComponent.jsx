import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, useStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel.jsx';

export default function ImageGalleryComponent(props) {
  const { currentItemStylesArr } = props;
  const imagesArr = [];

  if (currentItemStylesArr !== undefined) {
    for (let i = 0; i < currentItemStylesArr.length; i += 1) {
      const currentStyle = currentItemStylesArr[i];
      imagesArr.push({
        original: currentStyle.url,
        thumbnail: currentStyle.thumbnail_url,
        // originalHeight: 500,
        // originalWidth: 500,
      });
    }
  }

  return (
    <>
      <Grid item elevation={0} xs={12} m={6}>
        <Carousel images={imagesArr} />
      </Grid>
    </>
  );
}
