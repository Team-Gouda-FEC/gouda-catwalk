const express = require('express');
const path = require('path');
const apiFn = require('./apiHelpers.js');

const app = express();
const PORT = 1337 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/api/test/products', (req, res) => {
  apiFn.getProducts((err, results) => {
    if (err) {
      res.status(500).send('Error requesting Products Data');
    } else {
      res.send(results.data);
    }
  });
});

/***** PRODUCTS SECTION *****/


/***** REVIEWS SECTION *****/


/***** QUESTIONS & ANSWERS SECTION *****/

// Get Questions List
app.get('/getQuestions', (req, res) => {
  const params = {
    product_id: req.body.product_id,
    page: req.body.page,
    count: req.body.count
  }
  apiFn.getQuestions(params, (err, results)
    => {
    if (err) {
      res.status(500).send('Error requesting Questions Data');
    } else {
      res.send(results.data);
    }
  })
})

// Get Answers List
// GET /qa/questions/[question_id]/answers
// params: question_id
// queryParams: page, count
// res 200

// Adds a Question
// POST /qa/questions
// body params: body, name, email, product_id
// res 201

// Adds an Answer
// POST /qa/questions/[question_id]/answers
// params: question_id
// body params: body, name, email, photos
// res 201

// Mark Question as Helpful
// PUT /qa/questions/[question_id]/helpful
// params: question_id
// res 204

// Report a Question
// PUT /qa/questions/[question_id]/report
// params: question_id
// res 204

// Mark Answer as helpful
// PUT /qa/answers/[answer_id]/helpful
// params: answer_id
// res 204

// Report an Answer
// PUT /qa/answers/[answer_id]/report
// params: answer_id
// res 204

/***** CART SECTION *****/


/***** INTERACTIONS SECTION *****/



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
