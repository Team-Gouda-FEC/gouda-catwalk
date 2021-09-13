import React from 'react';
import { Card, CardMedia, CardHeader, CardContent, CardActions, Typography } from '@material-ui/core';

export default function RelatedProductCard () {
  return (
    <div>
      <Card>
        <CardMedia style={{height: 100}} src="../images/time.svg" title="hey" />
        <CardHeader title="hello world" />
        <CardContent>
          <Typography>
            Category ** Product Name ** Price ** Star Ratings
          </Typography>
        </CardContent>
      </Card>

    </div>
  )
}