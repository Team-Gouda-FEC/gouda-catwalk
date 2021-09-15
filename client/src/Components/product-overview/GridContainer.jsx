import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CategoryInfo from './CategoryInfo.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductBlurbs from './ProductBlurbs.jsx';

const useStyles = makeStyles((theme) => ({
  ProductOverviewGrid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GridContainer() {
  const classes = useStyles();

  return (
    <div className="ProductOverviewGrid">
      <Grid container elevation={0}>
        <Grid className="carousel" item xs={7}>
          <Paper className={classes.paper}> this is where the carousel will go! </Paper>
        </Grid>
        <Grid className="Product Category Info" item xs={5}>
          <ProductInfo />
          <CategoryInfo />
        </Grid>
        <Grid item xs={12}>
          <Typography> Blurb blurb blurbbbb</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <ProductBlurbs />
        </Grid>
      </Grid>
    </div>
  );
}
