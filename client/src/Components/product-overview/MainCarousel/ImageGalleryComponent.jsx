/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useStyles, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Carousel from './Carousel.jsx';

export default function ImageGalleryComponent(props) {
  return (
    <>
      <Grid item elevation={0}>
        <Carousel
          allItems={props.allItems}
          currentItem={props.currentItem}
          currentStyles={props.currentStyles}
        />
      </Grid>
    </>
  );
}
