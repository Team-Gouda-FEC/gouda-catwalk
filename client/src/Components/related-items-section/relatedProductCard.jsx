import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  Avatar,
  Button,
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import Stars from '../rating-review/StarRating.jsx';
import AnimatedModal from './animatedModal.jsx';
import ComparisonTable from './comparisonTable.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
  button: {
    zIndex: 1,
  },
});

const RelatedProductCard = (props) => {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [rating, setRating] = useState(0);
  const { handleUpdateCurrentItem, currentItemInfo, productId, currentIndex } = props;

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
        setProductImage(response.data.results[0].photos[0].thumbnail_url);
        if (response.data.results[styleId].sale_price !== null || response.data.results[styleId].sale_price !== null) {
          setSalePrice(response.data.results[styleId].sale_price);
        }
      })
      .catch((error) => {
        console.log(error);
        setProductImage('https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg');
      });
  };

  const getRatingAverage = (obj) => {
    let sum = 0;
    let count = 0;
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      const value = Number(obj[keys[i]]);
      sum += Number(keys[i]) * value;
      count += value;
    }
    return Math.floor((sum * 10) / count) * 0.1;
  };

  const getProductRating = () => {
    const params = {
      product_id: productId,
    };

    axios
      .get('/reviews/meta', { params })
      .then((reviewMetaData) => {
        const rate = getRatingAverage(reviewMetaData.data.ratings);
        setRating(rate);
      })
      .catch((err) => {
        console.log(err);
        console.log('failed to get review meta data');
      });
  };

  function handleUpdateItem(id, info) {
    handleUpdateCurrentItem(id, info);
  }

  useEffect(() => {
    getProductInfo();
  }, [productId]);

  useEffect(() => {
    getImage(currentIndex);
  }, [productId]);

  useEffect(() => {
    getProductRating();
  }, [productId]);

  return (
    productInfo && (
      <div>
        <Card>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={productImage || 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'}
            >
              <Grid item container justifyContent="flex-end">
                <AnimatedModal
                  className={classes.button}
                  relatedItemInfo={productInfo}
                  currentItemInfo={currentItemInfo}
                />
              </Grid>
            </CardMedia>

            <Typography variant="body1"> {productInfo.category} </Typography>
            <Typography
              variant="body1"
              style={{ fontWeight: 600 }}
              onClick={() => {
                handleUpdateItem(productInfo.id, productInfo);
              }}
            >
              {productInfo.name}{' '}
            </Typography>
            <Typography variant="body1">
              {productInfo.default_price}{' '}
              {salePrice}
            </Typography>
          </CardContent>
          <Stars rating={rating} />
        </Card>
      </div>
    )
  );
};

export default RelatedProductCard;
