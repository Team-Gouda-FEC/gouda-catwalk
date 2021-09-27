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
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  },
});

const OutfitProductCard = (props) => {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const { productId, yourOutfitsStyleId, handleRemoveOutfitClick } = props;

  const getProductInfo = () => {
    axios
      .get('http://localhost:1337/getProductInfo/', {
        params: { product_id: productId },
      })
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getImage = (styleId) => {
    axios
      .get('http://localhost:1337/getImage/', {
        params: { product_id: productId },
      })
      .then((response) => {
        const thumbnail =
          response.data.results[styleId].photos[0].thumbnail_url;
        setProductImage(thumbnail);
        if (response.data.results[styleId].sale_price !== null || response.data.results[styleId].sale_price !== undefined) {
          setSalePrice(response.data.results[styleId].sale_price);
        }
      })
      .catch((error) => {
        console.log(error);
        setProductImage(
          'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'
        );
      });
  };

  useEffect(() => {
    getProductInfo();
  }, [productId]);
  useEffect(() => {
    getImage(yourOutfitsStyleId);
  }, [productId]);

  if (productInfo && productImage) {
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={
                productImage ||
                'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'
              }
            >
              <Grid item container justifyContent="flex-end">
                <RemoveOutfitButton
                  onClick={handleRemoveOutfitClick}
                  prodId={productId}
                />
              </Grid>
            </CardMedia>
            <Typography variant="body1"> {productInfo.category} </Typography>
            <Typography variant="body1" style={{ fontWeight: 600 }}>
              {productInfo.name}{' '}
            </Typography>
            {salePrice ? (
              <>
                <Typography
                  variant="body1"
                  style={{ textDecoration: 'line-through' }}
                >
                  $ {productInfo.default_price}
                </Typography>
                <Typography variant="body1" color="error">
                  $ {salePrice}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">
                $ {productInfo.default_price}
              </Typography>
            )}
          </CardContent>
          <Stars rating={2.5} />
        </Card>
      </div>
    );
  }
  return <CircularProgress />;
};

export default OutfitProductCard;
