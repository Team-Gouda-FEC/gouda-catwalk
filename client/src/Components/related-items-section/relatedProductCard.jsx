import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import Stars from '../rating-review/StarRating.jsx';
import AnimatedModal from './modalTable.jsx';

const RelatedProductCard = (props) => {

  getImage() = {
    axios.get('http://localhost:1337/products/getImage/')
      .then((response) => {
        console.log(response.results);
      }).catch((error) => {
        console.log(error);
      });
  }

  this.getImage()


  return (
    <div>
      <Card>
      <CardMedia
        image={photo}
        title="Paella dish"
      />
        <CardContent>
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