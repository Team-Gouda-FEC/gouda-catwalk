/* eslint-disable camelcase */
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { Typography, ButtonGroup, Button } from '@material-ui/core';

const months = {
  '01': 'Janurary',
  '02': 'Feburary',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const Answer = ({ answerObj }) => {
  const { answers, body, answerer_name, id, helpfulness, date } = answerObj;
  const [aHelpCount, setAHelpCount] = useState(helpfulness);
  const [aReportBool, setAReportBool] = useState(false);

  const getDate = (answerDate) => {
    const year = answerDate.slice(0, 4);
    const month = answerDate.slice(5, 7);
    const day = answerDate.slice(8, 10);
    return `${months[month]} ${Number(day)}, ${year}`;
  };

  const markAnswer = (answerId) => {
    const params = {
      answer_id: answerId,
    };
    axios
      .put('/markAnswer', params)
      .then((response) => {
        setAHelpCount(aHelpCount + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reportAnswer = (answerId) => {
    const params = {
      answer_id: answerId,
    };
    axios
      .put('/reportAnswer', params)
      .then((response) => {
        setAReportBool(!aReportBool);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Typography>{`A: ${body}`}</Typography>
      <ButtonGroup size="small">
        <Button disabled>{`by ${answerer_name}, ${
          date && getDate(date)
        }`}</Button>
        <Button
          variant="text"
          onClick={() => {
            markAnswer(id);
          }}
        >
          Helpful? Yes({aHelpCount})
        </Button>
        <Button
          variant="text"
          onClick={() => {
            reportAnswer(id);
          }}
        >
          Report
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Answer;
