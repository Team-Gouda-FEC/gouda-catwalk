import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Box, Button } from '@material-ui/core';
import QABlock from './QABlock.jsx';
import FooterButtons from './FooterButtons.jsx';

const useStyles = makeStyles((theme) => ({
  qaBlock: {
    width: '85%',
    alignSelf: 'center',
  },
  footerButtons: {
    justifySelf: 'space-around',
  },
}));

const QuestionsList = ({ questionsList }) => {
  const classes = useStyles();
  const [count, setCount] = useState(4);

  const getQuestions = () => {
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
    console.log('count clicked');
    setCount(questionsList.results.length);
  };

  // const moreQuestionsButton = () => {
  //   const element = count >= questionsList.results.length ? '' :
  // };

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
        {questionsList.results &&
          getQuestions().map((element, key) => (
            <Grid key={key} className={classes.qaBlock} item>
              <QABlock questionObj={element} />
            </Grid>
          ))}
        <FooterButtons
          className={classes.footerButtons}
          changeCount={incrementCount}
        />
      </Grid>
    </Box>
  );
};

export default QuestionsList;
