import React, { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core';
import QABlock from './QABlock.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

const useStyles = makeStyles((theme) => ({
  qaBlock: {
    width: '85%',
    alignSelf: 'center',
  },
  footerButtons: {
    justifySelf: 'center',
  },
}));

const QuestionsList = ({ questionsList, productName }) => {
  const classes = useStyles();
  const [count, setCount] = useState(4);

  const createQuestionsArr = () => {
    const questionsArr = [];
    for (let i = 0; i < count; i += 1) {
      if (questionsList.results[i] === undefined) {
        break;
      }
      questionsArr.push(questionsList.results[i]);
    }
    return questionsArr;
  };

  const incrementCount = () => {
    setCount(count + 2);
  };

  const moreQuestionsButton = () => {
    console.log('test point');
    const element =
      count >= questionsList.results.length ? (
        <Button variant="outlined" color="textPrimary" onClick={setCount(4)}>
          Close Questions
        </Button>
      ) : (
        <MoreAnsweredQuestions changeCount={incrementCount} />
      );
    return element;
  };

  if (questionsList.results) {
    return (
      <Box
        style={{
          height: '500px',
          overflow: 'scroll',
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            {createQuestionsArr().map((element, key) => (
              <Grid key={key} className={classes.qaBlock} item>
                <QABlock questionObj={element} />
              </Grid>
            ))}
          </Grid>
          <Grid item className={classes.footerButtons}>
            {moreQuestionsButton()}
            <AddQuestion productName={productName} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return <CircularProgress />;
};

export default QuestionsList;
