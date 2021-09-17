const axios = require('axios');
require('dotenv').config();

const headers = { Authorization: `${process.env.API_KEY}` };

/* **** PRODUCTS SECTION **** */
// only grabs 5 products

const getProducts = (params, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/`, { params,  headers})
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      console.log('*error in get products* ', err);
      callback(err, null);
    });
};

/*** RELATED ITEMS SECTION *****/

const getRelatedProducts = (productId, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${productId}/related`, {headers})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getProdInfo = (productId, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${productId}/`, {headers})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getThumbnail = (productId, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${productId}/styles`, { headers})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

/* **** REVIEWS SECTION **** */

/* **** QUESTIONS & ANSWERS SECTION **** */

const getQuestions = (params, callback) => {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', {
      params,
      headers,
    })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getAnswers = (questionId, params, callback) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/answers`,
      { params, headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const addQuestion = (params, callback) => {
  axios
    .post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions',
      params,
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const addAnswer = (questionId, params, callback) => {
  axios
    .post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/answers`,
      params,
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const markQuestion = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/helpful`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const reportQuestion = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/report`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const markAnswer = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${questionId}/helpful`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const reportAnswer = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${questionId}/report`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

/* **** Rating and Reviews **** */

const getReviews = (params, callback) => {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/', {
      params,
      headers,
    })
    .then((reviews) => {
      callback(null, reviews);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getReviewsMeta = (params, callback) => {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/meta', {
      params,
      headers,
    })
    .then((reviewMeta) => {
      callback(null, reviewMeta);
    })
    .catch((err) => {
      callback(err, null);
    });
};
/* **** CART SECTION **** */

/* **** INTERACTIONS SECTION **** */

module.exports = {
  getProducts,
  getRelatedProducts,
  getProdInfo,
  getThumbnail,
  getQuestions,
  getAnswers,
  addQuestion,
  addAnswer,
  markQuestion,
  reportQuestion,
  markAnswer,
  reportAnswer,
  getReviews,
  getReviewsMeta,
};
