import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

const SearchBar = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

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
    </div>
  );
};

export default SearchBar;
