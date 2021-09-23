import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';

const QAWidget = ({ productId }) => {
  const [currentId, setCurrentId] = useState(productId);
  const [questionsArr, setQuestionsArr] = useState([]);

  useEffect(() => {
    const params = {
      product_id: currentId,
      page: 1,
      count: 20,
    };
    if (currentId) {
      axios
        .get('/getQuestions', { params })
        .then((questionsData) => {
          setQuestionsArr(questionsData.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentId]);

  useEffect(() => {
    setCurrentId(productId);
  }, []);

  return (
    <div className="qa-container">
      <SearchBar questions={questionsArr} />
      <QuestionsList questionsList={questionsArr} />
    </div>
  );
};

export default QAWidget;
// axios.get('/getAnswers', {
//   params: {
//     question_id: this.state.product_id,
//     page: this.state.page,
//     count: this.state.count
//   }
// })

// axios.post('/addQuestion', {
//   params: {
//     question_id: this.state.question_id,
//     page: this.state.page,
//     count: this.state.count
//   }
// })

// axios.put('/markQuestion', {
//   params: {
//     question_id: this.state.question_id
//   }
// })
