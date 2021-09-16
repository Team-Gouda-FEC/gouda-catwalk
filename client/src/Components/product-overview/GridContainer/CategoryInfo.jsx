import React from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  formControlSize: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  formControlQuantity: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function CategoryInfo() {
  const classes = useStyles();
  const [size, setSize, quantity, setQuantity] = React.useState('');

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl className={classes.formControlSize}>
          <InputLabel id="Select Size">Select Size</InputLabel>
          <Select
            id="select-size"
            value={size}
            label="Select Size"
            onChange={handleSizeChange}
          >
            <MenuItem value={0}>Small</MenuItem>
            <MenuItem value={1}>Medium</MenuItem>
            <MenuItem value={2}>Large</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControlQuantity}>
          <InputLabel id="Select Quantity"> </InputLabel>
          <Select
            id="select-quantity"
            value={quantity}
            label="Select Quantity"
            onChange={handleQuantityChange}
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={10}>4</MenuItem>
            <MenuItem value={20}>5</MenuItem>
            <MenuItem value={30}>6</MenuItem>
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
    </>
  );
}
