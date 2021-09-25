import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { alpha, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ratingArr = [
  'A size too small',
  '½ a size too small',
  'Perfect',
  '½ a size too big',
  'A size too wide',
];

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

const ReviewForm = (props) => {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [traits, setTraits] = useState([]);
  const [traitsIds, setTraitsIds] = useState({});
  const [traitObj, setTraitObj] = useState({});

  // eslint-disable-next-line no-shadow
  const classes = useStyles();
  const [userRating, setUserRating] = useState(5);

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
                {description}:
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
    return <div>{33333}</div>;
  };

  const handlClick = () => {
    const bodyObj = {
      product_id: props.product_id,
      rating: userRating, // ratingInputValue,
      summary: summary || '',
      body: body || '',
      recommend: recommended,
      name: name || '',
      email: email || '',
      photos: [],
      characteristics: traitsIds,
    };
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
        props.updateReviews();
      })
      .catch((err) => {
        console.log(err);
      });
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRecommededChange = (event) => {
    setRecommended(event.target.checked);
  };

  return (
    <Paper elevation={3}>
      <div
        style={{
          width: '800px',
          margin: '0 1em',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          {ratingInput}
          <TextField
            id="Name"
            placeholder="Name"
            onChange={handleNameChange}
            label="Name"
            fullWidth
            variant="outlined"
          />
          <br />
          <TextField
            id="Email"
            placeholder="Email"
            onChange={handleEmailChange}
            label="Email"
            fullWidth
            variant="outlined"
          />
          <br />
          <TextField
            id="summary"
            xs={6}
            placeholder="Summary"
            onChange={handleSummaryChange}
            label="Summary"
            fullWidth
            variant="outlined"
          />
          <br />
          <TextField
            id="body"
            minRows={2}
            size="medium"
            label="Body"
            fullWidth
            multiline
            onChange={handleBodyChange}
            placeholder="Body"
            variant="outlined"
          />
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
            <Typography>Do you recommend this product? </Typography>
          </Grid>
          {getCharButtons()}
          <br />
          <Button variant="contained" color="primary" onClick={handlClick}>
            submit
          </Button>
          <br />
        </Grid>
      </div>
    </Paper>
  );
};

export default ReviewForm;
