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
const getQuestions = (product_id_num, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions?product_id=${product_id_num}`, { headers })
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
  getQuestions
};