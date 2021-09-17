/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const ReviewSort = (props) => {
  const getSortType = () => {
    switch (props.sortType) {
      case 'relevent':
        return 'relevance';
      default:
        return 'none';
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="baseline"
    >
      <Grid item> {props.count} reviews, sorted by <u>{getSortType()} <KeyboardArrowDownIcon /></u> </Grid>
    </Grid>
  );
};

export default ReviewSort;
