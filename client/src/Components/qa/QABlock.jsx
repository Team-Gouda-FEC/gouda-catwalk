import React from 'react';
import QuestionBlock from './QuestionBlock.jsx';
import AnswerBlock from './AnswerBlock.jsx';

const QABlock = ({ questionObj }) => (
  <div className="QA-Block">
    <QuestionBlock questionBody={questionObj.question_body} />
    {questionObj.answers &&
      Object.values(questionObj.answers).forEach((element) => (
        <AnswerBlock key={element.id} answerObj={element} />
      ))}
  </div>
);

export default QABlock;

/*
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
