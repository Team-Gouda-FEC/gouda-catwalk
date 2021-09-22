
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  MoreVertIcon,
  Button,
  Grid
} from '@material-ui/core';
import axios from 'axios';
import Stars from '../rating-review/StarRating.jsx';
import RemoveOutfitButton from './removeOutfitButton.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
  },
  media: {
    height: 200,
  },
  button: {
    zIndex: 1,
  }
});

const OutfitProductCard = (props) => {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const prodId = props.productId;

  const getProductInfo = () => {
    axios
      .get('http://localhost:1337/getProductInfo/', {
        params: { product_id: prodId },
      })
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getImage = () => {
    axios
      .get('http://localhost:1337/getImage/', {
        params: { product_id: prodId },
      })
      .then((response) => {
        setProductImage(response.data.results[0].photos[0].thumbnail_url);
      })
      .catch((error) => {
        console.log(error);
        setProductImage('https://via.placeholder.com/300x300');
      });
  };

  useEffect(() => {
    getProductInfo();
  }, [prodId]);
  useEffect(() => {
    getImage();
  }, [prodId]);

  return productInfo && productImage && (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <CardMedia className={classes.media} image={productImage || "https://via.placeholder.com/300x300"}>
          <Grid item container justify="flex-end">
            <RemoveOutfitButton onClick={props.onClick} prodId={prodId} />
            </Grid>

          </CardMedia>
          <Typography variant="body1"> {productInfo.category} </Typography>
          <Typography variant="body1" style={{ fontWeight: 600 }}>{productInfo.name} </Typography>
          <Typography variant="body1">{productInfo.default_price} </Typography>
        </CardContent>
        <Stars rating={2.5} />
      </Card>
    </div>
  );
}

export default OutfitProductCard;
