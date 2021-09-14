import React from 'react';
import './qaWidget.css';

export default function QAWidget() {
  return (
    <div className="qa-container">
      <div className="search-bar">
        Search Bar
      </div>
      <div className="qa-accordian">
        QA Accoridan
      </div>
      <button type="button" className="more-questions">
        More Answered Questions
      </button>
      <button type="button" className="add-question">
        Add a Question
      </button>
    </div>
  );
}

// test point

// axios.get('/getQuestions', {
//   params: {
//     product_id: this.state.product_id,
//     page: this.state.page,
//     count: this.state.count
//   }
// })

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
