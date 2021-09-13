const axios = require('axios');
const config = require('../client/src/config/config.js');

const headers = { 'Authorization': `${config.API_KEY}` };


/***** PRODUCTS SECTION *****/
// only grabs 5 products
const getProducts = (callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products', {
    headers
  })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(null, err);
    })
};

/***** REVIEWS SECTION *****/


/***** QUESTIONS & ANSWERS SECTION *****/

const getQuestions = (params, callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', { params, headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getAnswers = (question_id, params, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${question_id}/answers`, { params, headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const addQuestion = (params, callback) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', params, { headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const addAnswer = (question_id, params, callback) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${question_id}/answers`, params, { headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const markQuestion = (question_id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${question_id}/helpful`, {}, { headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    })
}

const reportQuestion = (question_id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${question_id}/report`, {}, { headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    })
}

const markAnswer = (question_id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${question_id}/helpful`, {}, { headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    })
}

const reportAnswer = (question_id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${question_id}/report`, {}, { headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    })
}

/***** CART SECTION *****/


/***** INTERACTIONS SECTION *****/

module.exports = {
  getProducts,
  getQuestions,
  getAnswers,
  addQuestion,
  addAnswer,
  markQuestion,
  reportQuestion,
  markAnswer,
  reportAnswer
};