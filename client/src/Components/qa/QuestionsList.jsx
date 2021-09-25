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
    width: '100%',
    justifyContent: 'center',
  },
  footerButtons: {
    display: 'flex',
  },
}));

const QuestionsList = ({ questionsList, productObj, rerender }) => {
  const classes = useStyles();
  const [count, setCount] = useState(4);

  const createQuestionsArr = () => {
    const questionsArr = [];
    for (let i = 0; i < count; i += 1) {
      if (questionsList[i] === undefined) {
        break;
      }
      questionsArr.push(questionsList[i]);
    }
    return questionsArr;
  };

  const incrementCount = () => {
    setCount(count + 2);
  };

  const resetCount = () => {
    setCount(4);
  };

  const moreQuestionsButton = () => {
    const element =
      count >= questionsList.length ? (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            resetCount();
          }}
        >
          Close Questions
        </Button>
      ) : (
        <MoreAnsweredQuestions changeCount={incrementCount} />
      );
    return element;
  };

  if (questionsList) {
    return (
      <Box
        style={{
          height: '500px',
          overflow: 'scroll',
        }}
      >
        <Grid
          container
          className={classes.qaBlock}
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            {createQuestionsArr().map((element, key) => (
              <Grid key={key} item>
                <QABlock
                  questionObj={element}
                  productObj={productObj}
                  rerender={rerender}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item className={classes.footerButtons}>
            <Grid item>{moreQuestionsButton()}</Grid>
            <Grid item>
              <AddQuestion productObj={productObj} rerender={rerender} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return <CircularProgress />;
};

export default QuestionsList;
