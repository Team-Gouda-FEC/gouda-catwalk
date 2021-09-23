/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import { Typography, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  question: {
    fontWeight: 'bold',
  },
  questionButtons: {
    justifyContent: 'flex-end',
    float: 'right',
  },
}));

const Question = ({ questionObj }) => {
  const { question_id, question_body, question_helpfulness } = questionObj;
  const [qHelpfulCount, setQHelpfulCount] = useState(question_helpfulness);
  const classes = useStyles();

  const markQuestion = (questionId) => {
    const params = {
      question_id: questionId,
    };
    axios
      .put('/markQuestion', params)
      .then((response) => {
        setQHelpfulCount(qHelpfulCount + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Typography className={classes.question} variant="h5" color="textPrimary">
      {`Q: ${question_body}`}
      <ButtonGroup
        className={classes.questionButtons}
        variant="text"
        size="small"
        color="secondary"
      >
        <Button
          onClick={() => {
            markQuestion(question_id);
          }}
        >
          Helpful? Yes({qHelpfulCount})
        </Button>
        <Button>Add Answer</Button>
      </ButtonGroup>
    </Typography>
  );
};

export default Question;
