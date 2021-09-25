/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: 15,
    minWidth: 100,
  },
  formControlSize: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  formControlQuantity: {
    margin: 15,
    minWidth: 100,
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 5,
    margin: 10,
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: 5,
    margin: 10,
    border: '1px solid black',
  },
}));

const AddToCart = function (props) {
  const classes = useStyles();
  const { currentStyleSkus, currentItemStylesObj } = props;
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const styleData = Object.entries(currentStyleSkus);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    console.log('*** quant change', event.target.value);
    setQuantity(event.target.value);
  };

  if (styleData.length > 0) {
    return (
      <Grid item xs={12}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl className={classes.formControlSize} variant="outlined">
            <InputLabel id="Select Size">Select Size</InputLabel>
            <Select
              id="select-size"
              defaultValue=""
              label="Select Size"
              onChange={handleSizeChange}
            >
              {styleData.map((item, index) => (
                <MenuItem key={item[0]}>{item[1].size}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControlQuantity}
            color="primary"
            variant="outlined"
          >
            <InputLabel id="Select Quantity">Quantity</InputLabel>
            <Select
              id="select-quantity"
              defaultValue=""
              label="Select Quantity"
              onChange={handleQuantityChange}
            >
              {styleData.map((item, index) => {
                console.log('** item in map', item);
                return <MenuItem key={item[0]}>{item[1].quantity}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <Button variant="outlined" color="primary" endIcon={<AddIcon />}>
          ADD TO BAG
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<StarBorderIcon />}
        />
      </Grid>
    );
  }
  return <CircularProgress />;
};

export default AddToCart;
