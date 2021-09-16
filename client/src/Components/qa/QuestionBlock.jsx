import React from 'react';

const QuestionBlock = ({ questionObj }) => (
  <div>{`Q: ${questionObj.question_body}`}</div>
);

export default QuestionBlock;
