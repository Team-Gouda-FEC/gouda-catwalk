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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const styleData = Object.entries(currentStyleSkus);
  const sizesArr = [];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuantity(0);
    setSizeIndex(0);
  };

  const handleSizeChange = (event) => {
    setSizeIndex(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value - 1);
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
              value={sizeIndex}
              label="Select Size"
              onChange={handleSizeChange}
            >
              {styleData.map((item, index) => (
                <MenuItem key={item[0]} value={index}>
                  {item[1].size}
                </MenuItem>
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
              value={quantity}
              label="Select Quantity"
              onChange={handleQuantityChange}
            >
              {styleData[sizeIndex][1].quantity > 15 ? (
                styleData[sizeIndex][1].quantity === 0 ? (
                  <MenuItem value={value}>OUT OF STOCK</MenuItem>
                ) : (
                  [...Array(16).keys()].map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))
                )
              ) : (
                [...Array(styleData[sizeIndex][1].quantity + 1).keys()].map(
                  (value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  )
                )
              )}
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          ADD TO BAG
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<StarBorderIcon />}
        />
        <Dialog
          maxWidth="sm"
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            Your Shopping Cart
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`added ${quantity} of sku ${styleData[sizeIndex][0]} to cart!`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
  return <CircularProgress />;
};

export default AddToCart;
