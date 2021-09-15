import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import Stars from '../rating-review/StarRating.jsx';
import AnimatedModal from './modalTable.jsx';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

const RelatedProductCard = (props) => {
  const classes = useStyles();
  const [productImage, setProductImage] = useState(null);

  const getImage = () => {
    const prodId = props.product.id;
    axios.get('http://localhost:1337/getImage/', { params: { product_id: prodId } })
      .then((response) => {
        //console.log(response.data.results[0].photos[0]);
        setProductImage(response.data.results[0].photos[0].thumbnail_url);
      }).catch((error) => {
        console.log(error);
        setProductImage("https://via.placeholder.com/300x300");
      });
  };

  useEffect(() => {
    getImage();
  });

  return productImage && (
    <div>
      <Card>

        <CardContent>
          <CardMedia className={classes.media} image={productImage || "https://via.placeholder.com/300x300"} />
          <Typography variant="body1"> {props.product.category} </Typography>
          <Typography variant="body1" style={{ fontWeight: 600 }}>{props.product.name} </Typography>
          <Typography variant="body1">{props.product.default_price} </Typography>
        </CardContent>
      <Stars rating={2.5} />

      </Card>
      <AnimatedModal />
    </div>
  )
}

export default RelatedProductCard;