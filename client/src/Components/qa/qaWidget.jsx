import React from "react";
import axios from "axios";
import "./qaWidget.css";
import SearchBar from "./SearchBar.jsx";

export default class QAWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      questionsList: [],
      // eslint-disable-next-line react/no-unused-state
      searchValue: "",
    };
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  handleSearchValue(event) {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      searchValue: event.target.value,
    });
  }

  // TODO: Should start search when the searchValue is equal to or greater than 3
  // TODO: Results will populate in the accordian section
  handleSearchSubmit() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert("submitted");
    const { questionsList, searchValue } = this.state;
    const filteredSearch = (searchStr) => {
      searchStr.toLowerCase();
      const data = questionsList.results;
      // eslint-disable-next-line no-unused-vars
      const filterData = data.filter((element) => {
        const currQuestion = element.question_body.toLowerCase();
        if (currQuestion.includes(searchStr)) {
          return currQuestion;
        }
      });

      // TODO: need to display the results in the accordian
    };
    filteredSearch(searchValue);
  }

  getQuestions() {
    axios
      .get("/getQuestions", {
        params: {
          product_id: 38326,
          page: 1,
          count: 5,
        },
      })
      .then((response) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          questionsList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
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
        <div className="qa-accordian">QA Accoridan</div>
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
