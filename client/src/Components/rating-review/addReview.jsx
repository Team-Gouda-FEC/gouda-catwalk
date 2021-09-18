import React from 'react';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import { alpha, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
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

function RedditTextField(props) {
  const classes = useStylesReddit();

  // eslint-disable-next-line prettier/prettier
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}
=======
>>>>>>> master

const AddReview = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    console.log(`eventTarget: ${event.target} props: ${props}`);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function RedditTextField(props) {
    // eslint-disable-next-line no-shadow
    const classes = useStylesReddit();
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

  return (
<<<<<<< HEAD
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
=======
    <Button variant="outlined" color="primary" onClick={handleClick}>
      Add A Review
    </Button>
>>>>>>> master
  );
};

export default AddReview;
