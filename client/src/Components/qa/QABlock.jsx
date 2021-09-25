/* eslint-disable camelcase */
import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader,
  IconButton,
  styled,
  Typography,
  ButtonGroup,
  Button,
  CardContent,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const useStyles = makeStyles((theme) => ({
  loadAnswers: {
    marginLeft: '10%',
  },
  answerBlock: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}));

const QABlock = ({ questionObj, productObj, rerender }) => {
  const { question_body, answers } = questionObj;
  const classes = useStyles();
  const [count, setCount] = useState(2);
  const answersData = Object.values(questionObj.answers);

  const createAnswersArr = () => {
    const answersArr = [];
    for (let i = 0; i < count; i += 1) {
      if (answersData[i] === undefined) {
        break;
      }
      answersArr.push(answersData[i]);
    }
    return answersArr;
  };

  const incrementCount = () => {
    setCount(answersData.length);
  };

  const moreAnswersButton = () => {
    const element =
      count >= answersData.length ? (
        ''
      ) : (
        <Button
          className={classes.loadAnswers}
          variant="text"
          color="secondary"
          onClick={incrementCount}
        >
          Load More Answers
        </Button>
      );
    return element;
  };

  return (
    <Card>
      <CardContent>
        <Question
          questionObj={questionObj}
          productObj={productObj}
          rerender={rerender}
        />
        {answers &&
          createAnswersArr().map((element, key) => (
            <div key={key} className={classes.answerBlock}>
              <Answer answerObj={element} rerender={rerender} />
            </div>
          ))}
      </CardContent>
      {answers && moreAnswersButton()}
    </Card>
  );
};

export default QABlock;

/* questionObj
{
  "question_id": 425842,
  "question_body": "Who provides the chairs for the chair force?",
  "question_date": "2021-09-13T00:00:00.000Z",
  "asker_name": "Winnie the Pooh",
  "question_helpfulness": 0,
  "reported": false,
  "answers": {
      "3989501": {
          "id": 3989501,
          "body": "Close your eyes, and let the force guide you",
          "date": "2021-09-13T00:00:00.000Z",
          "answerer_name": "Bre Bre",
          "helpfulness": 0,
          "photos": []
      }
  }
}
*/
