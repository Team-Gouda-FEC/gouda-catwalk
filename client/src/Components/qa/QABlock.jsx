import React from 'react';
import QuestionBlock from './QuestionBlock.jsx';
import AnswerBlock from './AnswerBlock.jsx';

const QABlock = ({ questionObj }) => (
  <div className="QA-Block">
    <QuestionBlock questionObj={questionObj} />
    <AnswerBlock questionObj={questionObj} />
  </div>
);

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
