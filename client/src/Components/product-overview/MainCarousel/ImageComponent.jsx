/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import Typography from '@material-ui/core/Typography';

function ImageComponent(props) {
  const { currentItem } = props;
  const products = props.allItems;
  const { currentItemId } = props;

  // return <ImageGallery items={props.currentStyles.photos} />;
  return <Typography>{currentItem.name}</Typography>;
}

export default ImageComponent;
