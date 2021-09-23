import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Modal, TextField } from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const defaultValues = {
  question: '',
  nickname: '',
  email: '',
};

const AddAnswer = ({ productName }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Add Answer
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Typography>Submit your Answer</Typography>
              <Typography>{productName}</Typography>
              <TextField
                required
                id="outlined-question-input"
                label="Your Question"
                inputProps={{ maxLength: 1000 }}
              />
              <TextField
                required
                id="outlined-name-input"
                label="What is your nickname?"
                placeholder="Example: jackson11!"
                inputProps={{ maxLength: 60 }}
                helperText="For Privacy reasons, do not use your full anme or email address"
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                inputProps={{ maxLength: 60 }}
                helperText="For authentication reasons, you will not be emailed"
              />
            </div>
            <Button variant="outlined" color="secondary">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddAnswer;
