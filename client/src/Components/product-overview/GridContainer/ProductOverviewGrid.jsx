import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CategoryInfo from './CategoryInfo.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductBlurbs from './ProductBlurbs.jsx';
import ImageGalleryComponent from '../MainCarousel/ImageGalleryComponent.jsx';

const useStyles = makeStyles((theme) => ({
  ProductOverviewGrid: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function ProductOverviewGrid(props) {
  const classes = useStyles();

  return (
    <>
      <div className="ProductOverviewGrid">
        <Grid container elevation={0}>
          <Grid className="carousel" item xs={7}>
            <ImageGalleryComponent
              // eslint-disable-next-line react/destructuring-assignment
              handleUpdateCurrentItem={props.handleUpdateCurrentItem}
              // eslint-disable-next-line react/destructuring-assignment
              allItems={props.allItems}
              // eslint-disable-next-line react/destructuring-assignment
              currentItem={props.currentItem}
            />
          </Grid>
          <Grid className="Product Information" item xs={5}>
            <ProductInfo
              // eslint-disable-next-line react/destructuring-assignment
              currentItem={props.currentItem}
            />
            <CategoryInfo />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Product Overview - This free form text field may exist on some
              items. If it is available it should be displayed.
            </Typography>
          </Grid>
          <Divider orientation="vertical" />
          <Grid item>
            <ProductBlurbs />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
