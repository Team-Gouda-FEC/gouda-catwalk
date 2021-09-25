import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, useStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel.jsx';

export default function ImageGalleryComponent(props) {
  const { currentItemStylesArr } = props;
  const imagesArr = [];
  const tempImages = [
    'https://tinyimg.io/i/ZkK2p1j.png',
    'https://tinyimg.io/i/6OQsg7g.png',
    'https://tinyimg.io/i/V20N4Q5.png',
    'https://tinyimg.io/i/8g2YnIp.png',
    'https://tinyimg.io/i/3hPVfB3.png',
  ];

  if (currentItemStylesArr[0].thumbnail_url !== null) {
    for (let i = 0; i < currentItemStylesArr.length; i += 1) {
      const currentStyle = currentItemStylesArr[i];
      imagesArr.push({
        original: currentStyle.url,
        thumbnail: currentStyle.thumbnail_url,
        originalHeight: 700,
        originalWidth: 500,
      });
    }
  } else {
    for (let i = 0; i < currentItemStylesArr.length; i += 1) {
      imagesArr.push({
        original: 'https://tinyimg.io/i/ZkK2p1j.png',
        thumbnail: 'https://tinyimg.io/i/ZkK2p1j.png',
        originalHeight: 700,
        originalWidth: 500,
      });
    }
  }

  return <Carousel images={imagesArr} />;
}
