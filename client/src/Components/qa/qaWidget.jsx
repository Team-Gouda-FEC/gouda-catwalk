import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';

const QAWidget = ({ productObj }) => {
  const { id } = productObj;
  const [questionsArr, setQuestionsArr] = useState([]);

  const getInfo = () => {
    const params = {
      product_id: id,
      page: 1,
      count: 20,
    };
    axios
      .get('/getQuestions', { params })
      .then((questionsData) => {
        setQuestionsArr(questionsData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getInfo();
  }, [id]);

  return (
    <div className="qa-container">
      <SearchBar questions={questionsArr} />
      <QuestionsList
        questionsList={questionsArr}
        productObj={productObj}
        rerender={getInfo}
      />
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
