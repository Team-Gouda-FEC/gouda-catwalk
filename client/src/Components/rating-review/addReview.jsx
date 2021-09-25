/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReviewForm from './reviewForm.jsx';

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

const AddReview = (props) => {
  // eslint-disable-next-line camelcase
  const classes = useStyles();
  // eslint-disable-next-line camelcase
  const { product_id, characteristics, updateReviews } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Write Your Review
      </Button>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
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
          <ReviewForm
            characteristics={characteristics}
            product_id={product_id}
            updateReviews={updateReviews}
            setOpen={setOpen}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default AddReview;
