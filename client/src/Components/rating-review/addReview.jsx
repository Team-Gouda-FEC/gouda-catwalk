import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { alpha, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '2px solid #black',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fff',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

const AddReview = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const handleClick = (event) => {
    console.log(`eventTarget: ${event.target} props: ${props}`);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    setBody('');
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  // useEffect(() => {
  //   console.log(message);
  // }, [message]);

  function RedditTextField() {
    // eslint-disable-next-line no-shadow
    const classes = useStylesReddit();

    const handlClick = () => {
      console.log(summary);
      console.log(body);
      setOpen(false);
      setBody('');
    };

    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="summary"
          InputProps={{ classes, disableUnderline: true }}
          placeholder="Summary"
          onChange={handleSummaryChange}
          label="Summary"
        />
        <TextField
          id="body"
          minRows={2}
          size="medium"
          InputProps={{ classes, disableUnderline: true }}
          label="Body"
          onChange={handleBodyChange}
          placeholder="Body"
        />
        <Button variant="contained" color="primary" onClick={handlClick}>
          submit
        </Button>
      </Grid>
    );
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add A Review
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* eslint-disable-next-line prettier/prettier */}
        <Fade in={open}>
          {RedditTextField()}
        </Fade>
      </Modal>
    </div>
  );
};

export default AddReview;
