import React from 'react';

const AnswerBlock = ({ questionObj }) =>
  Object.entries(questionObj.answers).map((element, key) => (
    <div key={key}>{`A: ${element[1].body}`}</div>
  ));
export default AnswerBlock;
