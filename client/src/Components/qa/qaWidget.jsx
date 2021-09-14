import React from 'react';
import axios from 'axios';
import './qaWidget.css';
import SearchBar from './SearchBar.jsx';

export default class QAWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsList: [],
      searchValue: '',
    };
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSearchValue(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSearchSubmit() {
    event.preventDefault();
    alert('submitted');
    // const filteredSearch = (searchStr) => {
    //   searchStr.toLowerCase();
    //   const data = this.state.questionsList;
    //   const filteredData = data.filter((element) => {
    //     const currQuestion = element.data.toLowerCase();
    //     if (currQuestion.includes(searchStr)) {
    //       return currQuestion;
    //     }
    //   });

    // }
    // filteredSearch();
  }

  // have to pull down a list of all the questions
  getQuestions() {
    axios.get('/getQuestions', {
      params: {
        product_id: 38326,
        page: 1,
        count: 5,
      },
    })
      .then((response) => {
        this.setState({
          questionsList: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="qa-container">
        <div className="search-bar">
          <SearchBar
            questionSearch={this.handleSearchValue}
            submission={this.handleSearchSubmit}
          />
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
}

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
