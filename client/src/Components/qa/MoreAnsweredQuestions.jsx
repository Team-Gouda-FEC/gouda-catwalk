import React from 'react';
import { Button } from '@material-ui/core';

const MoreAnsweredQuestions = ({ changeCount }) => (
  <Button
    variant="outlined"
    color="secondary"
    onClick={() => {
      changeCount();
    }}
  >
    More Answered Questions
  </Button>
);

export default MoreAnsweredQuestions;
