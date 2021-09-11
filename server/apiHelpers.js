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
// Need to append product_id to the end of the url
const getQuestions = (params, callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', { params, headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    })
}

const getAnswers = (question_id, params, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${question_id}/answers`, { params, headers })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    })
}

const addQuestion = (params, callback) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', params, { headers })
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
  addQuestion
};