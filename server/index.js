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

// {
//   "id": 38326,
//   "campus": "hr-atx",
//   "name": "Heir Force Ones",
//   "slogan": "A sneaker dynasty",
//   "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
//   "category": "Kicks",
//   "default_price": "99.00",
//   "created_at": "2021-08-13T14:38:00.907Z",
//   "updated_at": "2021-08-13T14:38:00.907Z"
// }

/***** PRODUCTS SECTION *****/


/***** REVIEWS SECTION *****/


/***** QUESTIONS & ANSWERS SECTION *****/

// Get Questions List
app.get('/getQuestions', (req, res) => {
  const params = {
    product_id: req.query.product_id,
    page: req.query.page,
    count: req.query.count
  }
  apiFn.getQuestions(params, (err, questions) => {
    if (err) {
      res.status(500).send('Error requesting Questions Data');
    } else {
      res.send(questions.data);
    }
  })
})

// Get Answers List
app.get('/getAnswers', (req, res) => {
  const question_id = req.query.question_id;
  const params = {
    page: req.query.page,
    count: req.query.count
  }
  apiFn.getAnswers(question_id, params, (err, answers) => {
    if (err) {
      res.status(500).send('Error requesting Answers Data');
    } else {
      res.send(answers.data);
    }
  })
})

// Adds a Question
app.post('/addQuestion', (req, res) => {
  const params = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id
  }
  apiFn.addQuestion(params, (err, confirmed) => {
    if (err) {
      res.status(500).send('Error adding a question');
    } else {
      res.status(201).send('Successfully added a question');
    }
  })
})

// Adds an Answer
app.post('/addAnswer', (req, res) => {
  const question_id = req.body.question_id;
  const params = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos
  }
  apiFn.addAnswer(question_id, params, (err, confirmed) => {
    if (err) {
      res.status(500).send('Error adding an answer');
    } else {
      res.status(201).send('Successfully added an answer');
    }
  })
})

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
