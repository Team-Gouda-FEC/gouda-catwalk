
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardMedia, CardContent, Typography, makeStyles, IconButton, MoreVertIcon, Avatar, Button } from '@material-ui/core';
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
   }
});

const RelatedProductCard = (props) => {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState({});
  const [productImage, setProductImage] = useState(null);
  // const [productRating, setProductRating] = useState(null);
  const [currentItemInfo, setCurrentItemInfo] = useState({});
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [features, setFeatures] = useState([]);

  const prodId = props.productId;
  const currentProdId = props.currentItemId;

  const getProductInfo = () => {
    axios.get('http://localhost:1337/getProductInfo/', { params: { product_id: prodId } })
      .then((response) => {
        setProductInfo(response.data);
        return response.data;
      })
      .then((relatedProduct) => {
          axios.get('http://localhost:1337/getProductInfo/', { params: { product_id: currentProdId } })
            .then((response) => {
              setCurrentItemInfo(response.data);
              setFeatures([...response.data.features, ...relatedProduct.features]);
              return response.data;
            })
            .then((currentItem) => {
              const currentItemName = currentItem.name;
              const relatedProductName = relatedProduct.name;

              setColumns([
                { id: 'current', label: currentItemName, minWidth: 20 },
                { id: 'feature', label: '', minWidth: 70 },
                { id: 'related', label: relatedProductName, minWidth: 20 },
              ]);

              const createData = (current, feature,related) => {
                return ({ current, feature, related })
              }

              setRows([
                createData('check', 'US', '1'),
                createData('China', 'CN', '2'),
                createData('Italy', 'IT', '3'),
              ]);
            })
            .catch((error) => {
              console.log(error);
            });
          })
        .catch((error) => {
        console.log(error);
      });
  }

  const getImage = () => {
    axios.get('http://localhost:1337/getImage/', { params: { product_id: prodId } })
      .then((response) => {
        setProductImage(response.data.results[0].photos[0].thumbnail_url);
      }).catch((error) => {
        console.log(error);
        setProductImage("https://via.placeholder.com/300x300");
      });
  };

  // const getProductRating = () => {
  //   axios.get('http://localhost:1337/productRating/', { params: { product_id: prodId } })
  //     .then((response) => {
  //       console.log(response);
  //       setProductRating(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    getProductInfo();
  },[]);

  useEffect(() => {
    getImage();
  },[]);

  // useEffect(() => {
  //   getProductRating();
  // },[]);

  return (productInfo && currentItemInfo) && (
    <div>
      <Card>
        <CardContent>
          <CardMedia className={classes.media} image={productImage || "https://via.placeholder.com/300x300"}>
            <AnimatedModal className={classes.button} columns={columns} rows={rows} />
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

export default RelatedProductCard;
