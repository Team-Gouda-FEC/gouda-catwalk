import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  makeStyles,
  Autocomplete,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
  searchInput: {
    width: '500px',
    margin: '5px',
  },
}));

const SearchBar = ({ questions }) => {
  const [filter, setFilter] = useState('');
  const classes = useStyles();
  const questionsArr = [];
  // for (let i = 0; i < questions.results.length; i += 1) {
  //   questionsArr.push(questions.results[i].question_body);
  // }

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={classes.searchContainer}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        className={classes.searchInput}
        onChange={handleSearchChange}
        label="HAVE A QUESTION? SEARCH FOR ANSWERS"
        variant="standard"
      />
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={questionsArr}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search for a question" />
        )}
      /> */}
    </div>
  );
};

export default SearchBar;
