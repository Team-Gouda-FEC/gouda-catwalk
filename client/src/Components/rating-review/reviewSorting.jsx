/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControlSize: {
    margin: theme.spacing(1),
    // minWidth: 200,
  },
  formControlQuantity: {
    // margin: theme.spacing(1),
    // minWidth: 100,
  },
  button: {
    // margin: theme.spacing(1),
  },
}));

const sortValue = {
  'relevent': 'relevance',
  'helpful': 'helpfulness',
  'recent': 'newest',
};

const ReviewSort = (props) => {
  const sortButton = (
    <FormControl>
      <Select
        id="select-size"
        value={0}
        label="Select Size"
        onChange={console.log('change')}
      >
        <MenuItem value={0}>relevance</MenuItem>
        <MenuItem value={1}>most recent</MenuItem>
        <MenuItem value={2}>helpfulness</MenuItem>
      </Select>
    </FormControl>
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="baseline"
    >
      <Grid
        Item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {props.count} reviews, sorted by {sortButton}
      </Grid>
    </Grid>
  );
};

export default ReviewSort;
