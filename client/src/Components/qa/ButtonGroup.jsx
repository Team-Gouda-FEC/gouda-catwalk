import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

// TODO: More Answered Questions btn -> should request all data from the api
// TODO: Add a Question btn -> should open a modal to enter in question information, then send(post) information to the api
const ButtonGroup = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button variant="outlined">More Answered Questions</Button>
      <Button variant="outlined">Add a Question</Button>
    </div>
  );
};

export default ButtonGroup;
