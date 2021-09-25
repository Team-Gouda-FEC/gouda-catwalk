/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Avatar from '@material-ui/core/Avatar';

const max = window.innerHeight * 0.95;

const ratingArr = [
  'A size too small',
  '½ a size too small',
  'Perfect',
  '½ a size too big',
  'A size too wide',
];

const ReviewForm = (props) => {
  const { setOpen, updateReviews } = props;
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [traits, setTraits] = useState([]);
  const [traitsIds, setTraitsIds] = useState({});
  const [traitObj, setTraitObj] = useState({});
  const [userRating, setUserRating] = useState(5);
  const [userPics, setUserPics] = useState('');
  const [allUserPics, setAllUserPics] = useState([]);
  const [missingRequired, setMissingRequired] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleFormChange = (event) => {
    let targetBody = event.target.value;
    const limit = event.target.id === 'body' ? 1000 : 60;
    if (targetBody.length > limit) {
      targetBody = targetBody.slice(0, limit);
      event.target.value = targetBody;
    }
    switch (event.target.id) {
      case 'body':
        setBody(targetBody);
        break;
      case 'email':
        targetBody = targetBody.split(' ').join('');
        event.target.value = targetBody;
        setEmail(targetBody);
        break;
      case 'summary':
        setSummary(targetBody);
        break;
      case 'name':
        setName(targetBody);
        break;
      default:
        break;
    }
  };

  const handleUrlChange = (event) => {
    setUserPics(event.target.value);
  };

  const handleRecommededChange = (event) => {
    setRecommended(event.target.checked);
  };

  const resetTraits = () => {
    const traitNames = Object.keys(props.characteristics);
    const tObj = {};
    const ids = {};
    traitNames.map((traitDetails) => {
      ids[props.characteristics[traitDetails].id] = 3;
      tObj[traitDetails] = props.characteristics[traitDetails].id;
    });
    setTraits(traitNames);
    setTraitsIds(ids);
    setTraitObj(tObj);
  };

  useEffect(() => {
    resetTraits();
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.characteristics]);

  const ratingInput = (
    <Box component="fieldset" mb={2} ml={-1} borderColor="transparent">
      <Typography>Rating</Typography>
      <Rating
        name="simple-controlled"
        value={userRating}
        onChange={(event, newValue) => {
          setUserRating(newValue);
        }}
      />
    </Box>
  );

  const handleTraitChange = (event) => {
    const str = event.target.value;
    let key = str.slice(0, str.indexOf(':'));
    key = traitObj[key];
    const value = Number(str.slice(str.indexOf(':') + 1));
    traitsIds[key] = value;
  };

  const setPicCollection = (event) => {
    let pics = [];
    allUserPics.map((pic) => {
      pics.push(pic);
    });
    pics.unshift(userPics);
    pics = pics.slice(0, 5);
    setUserPics('');
    setAllUserPics(pics);
  };

  const getPics = () => {
    const pics = allUserPics.map((image, index) => (
      <Avatar key={index} id="image" src={image} variant="square" />
    ));
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {pics}
      </Grid>
    );
  };

  const getMissingMessage = () => {
    if (missingRequired) {
      return (
        <Typography color="error"> Missing required field(s)! </Typography>
      );
    } else {
      return <div />
    };
  };

  const getHelperText = (fieldName) => {
    if (invalidFields.includes(fieldName)) {
      let message = '';
      if (fieldName === 'summary' || fieldName === 'name') {
        message = 'Field missing';
      } else if (fieldName === 'email') {
        message = 'example: address@domain.com';
      } else if (fieldName === 'body') {
        message = '50 chars required';
      }
      return message;
    } else {
      return '';
    }
  };

  const validateForm = () => {
    const invalid = [];
    const userSummary = summary.split(' ').join('');
    if (userSummary.length === 0) {
      invalid.push('summary');
    }
    if (body.length < 50) {
      invalid.push('body');
    }
    const userEmail = email;
    const atIndex = userEmail.indexOf('@');
    const dotIndex = userEmail.lastIndexOf('.');
    if (atIndex < dotIndex) {
      const emailName = userEmail.slice(0, atIndex);
      const emailDomain = userEmail.slice(atIndex, dotIndex);
      const tld = userEmail.slice(dotIndex);
      if (emailName.length <= 0 || emailDomain.length <= 1 || tld.length <= 1) {
        invalid.push('email');
      }
    } else {
      invalid.push('email');
    }
    const userName = name.split(' ').join('');
    if (userName.length === 0) {
      invalid.push('name');
    }
    setInvalidFields(invalid);
    return invalid.length === 0;
  };

  const handlFormSubmit = () => {
    if (validateForm()) {
      const bodyObj = {
        product_id: props.product_id,
        rating: userRating,
        summary: summary || '',
        body: body || '',
        recommend: recommended,
        name: name || '',
        email: email || '',
        photos: [],
        characteristics: traitsIds,
      };
      if (userPics !== '') {
        bodyObj.photos.push(userPics);
      }
      setUserPics('');
      setBody('');
      setName('');
      setEmail('');
      setOpen(false);
      setRecommended(false);
      resetTraits();
      setUserRating(5);
      axios
        .post('/reviews', { body: bodyObj })
        .then((postConfirmation) => {
          updateReviews();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setMissingRequired(true);
    }
  };

  const getFieldValidated = (fieldID) => invalidFields.includes(fieldID);

  const getCharButtons = () => {
    // generate a form controller
    // iterate over the traits
    // for each of the traits populate formcontroller with a button
    const radio = () =>
      traits.map((description, index) => (
        <Grid
          key={index}
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Paper elevation={1}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Paper style={{ width: '4em' }} elevation={0}>
                <Typography> {description}: </Typography>
              </Paper>
              <FormControl component="fieldset" key={index}>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue={`${description}:3`}
                >
                  {ratingArr.map((num, ind) => (
                    <FormControlLabel
                      key={ind}
                      id={ind}
                      onChange={handleTraitChange}
                      value={`${description}:${ind + 1}`}
                      control={<Radio color="primary" />}
                      label={num}
                      labelPlacement="bottom"
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Paper>
          <br />
        </Grid>
      ));
    return <div>{radio()}</div>;
  };

  return (
    <Paper elevation={3}>
      <div
        style={{
          maxHeight: `${max}px`,
          // width: '800px',
          margin: '0 2em',
          overflowY: 'scroll',
          overflowX: 'hidden',
          boxSizing: 'border box',
        }}
      >
        <div
          style={{ width: '95%' }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            {ratingInput}
            <TextField
              id="name"
              required
              fullWidth
              placeholder="Example: jackson11!"
              onChange={handleFormChange}
              label="Name"
              size="medium"
              variant="filled"
              error={getFieldValidated('name')}
              helperText={getHelperText('name')}
            />
            <br />
            <TextField
              id="email"
              required
              placeholder="Example: jackson11@email.com"
              onChange={handleFormChange}
              label="Email"
              fullWidth
              variant="outlined"
              error={getFieldValidated('email')}
              helperText={getHelperText('email')}
            />
            <Typography variant="subtitle2">
              For authentication reasons, you will not be emailed
            </Typography>
            <br />
            <TextField
              id="summary"
              xs={6}
              required
              placeholder="Example: Best purchase ever!"
              onChange={handleFormChange}
              label="Summary"
              fullWidth
              variant="filled"
              error={getFieldValidated('summary')}
              helperText={getHelperText('summary')}
            />
            <br />
            <TextField
              id="body"
              required
              minRows={2}
              size="medium"
              label="Body"
              fullWidth
              multiline
              onChange={handleFormChange}
              placeholder="Body"
              variant="outlined"
              error={getFieldValidated('body')}
              helperText={getHelperText('body')}
            />
            <br />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              mb={3}
            >
              <TextField
                id="userImage"
                size="medium"
                value={userPics}
                label="Image Url"
                multiline
                fullWidth
                onChange={handleUrlChange}
                placeholder="Image Url"
                // variant="outlined"
              />
              <br />
              {getPics()}
            </Grid>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={setPicCollection}
            >
              Add Image
            </Button>
            <br />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Checkbox
                ml={-2}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onChange={handleRecommededChange}
              />
              <Typography>Do you recommend this product?</Typography>
            </Grid>
            <br />
            {getCharButtons()}
            <br />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handlFormSubmit}
                startIcon={<ArrowUpwardIcon />}
              >
                submit
              </Button>
              <Grid item>{getMissingMessage()}</Grid>
            </Grid>
            <br />
          </Grid>
        </div>
      </div>
    </Paper>
  );
};

export default ReviewForm;
