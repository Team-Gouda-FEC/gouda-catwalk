import React from 'react';
import { Card, CardMedia, CardHeader, CardContent, CardActions, Typography } from '@material-ui/core';
import Stars from '../rating-review/StarRating.jsx';

export default function RelatedProductCard () {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>
            category,
            name,
            default_price
          </Typography>
        </CardContent>
      <Stars rating={2.5} />
      </Card>

    </div>
  )
}

// {
//   "id": 38322,
//   "campus": "hr-atx",
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140.00",
//   "created_at": "2021-08-13T14:38:00.907Z",
//   "updated_at": "2021-08-13T14:38:00.907Z",
//   "features": [
//       {
//           "feature": "Fabric",
//           "value": "Canvas"
//       },
//       {
//           "feature": "Buttons",
//           "value": "Brass"
//       }
//   ]
// }


// from each product's style
// {
//   "product_id": "38322",
//   "results": [
//       {
//           "style_id": 227498,
//           "name": "Forest Green & Black",
//           "original_price": "140.00",
//           "sale_price": null,
//           "default?": true,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//               },