/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const sortValue = {
  '0': 'relevent',
  '1': 'newest',
  '2': 'helpful',
};

const sortKey = {
  relevent: 0,
  newest: 1,
  helpful: 2,
};

const ReviewSort = (props) => {
  const handleClick = (event) => {
    // console.log(event.target.id);
    props.resetCount(2);
    props.changeSort(sortValue[event.target.id]);
  };

  const sortButton = (
    <div style={{ paddingLeft: '.2em' }}>
      <FormControl>
        <Select id="sortOrder" value={sortKey[props.sortType]}>
          <MenuItem value={0} onClick={handleClick} id={0}>
            relevance
          </MenuItem>
          <MenuItem value={1} onClick={handleClick} id={1}>
            most recent
          </MenuItem>
          <MenuItem value={2} onClick={handleClick} id={2}>
            helpfulness
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );

  return (
    <div
      style={{
        height: 50,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography>{props.count} reviews, sorted by </Typography> {sortButton}
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewSort;
