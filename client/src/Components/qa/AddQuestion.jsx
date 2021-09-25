import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Box,
  Typography,
  Modal,
  TextField,
  Grid,
} from '@material-ui/core';

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

const AddQuestion = ({ productObj, rerender }) => {
  const { id, name } = productObj;
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      body: formValues.question,
      name: formValues.nickname,
      email: formValues.email,
      product_id: id,
    };
    axios
      .post('/addQuestion', params)
      .then((response) => {
        handleClose();
        rerender();
      })
      .catch((err) => {
        console.log('Error Adding a question');
      });
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Add Question
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
            onSubmit={handleSubmit}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              direction="column"
              sx={style}
            >
              <Grid item>
                <Typography>Ask your question about {name}</Typography>
                <TextField
                  required
                  id="questionInput"
                  name="question"
                  type="text"
                  value={formValues.question}
                  label="Your Question"
                  onChange={handleInputChange}
                  inputProps={{ maxLength: 1000 }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="nameInput"
                  label="What is your nickname?"
                  placeholder="Example: jackson11!"
                  inputProps={{ maxLength: 60 }}
                  helperText="For Privacy reasons, do not use your full name or email address"
                  name="nickname"
                  type="text"
                  value={formValues.nickname}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="emailInput"
                  label="Email"
                  inputProps={{ maxLength: 60 }}
                  helperText="For authentication reasons, you will not be emailed"
                  name="email"
                  type="text"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddQuestion;
