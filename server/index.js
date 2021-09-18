const express = require("express");
// const path = require('path');
// const cors = require('cors');
const apiFn = require('./apiHelpers');

const app = express();
const PORT = 1337 || process.env.PORT;

app.use(express.static("client/dist"));
app.use(express.json());
// app.use(cors());

/* **** PRODUCTS SECTION **** */
app.get('/products/', (req, res) => {
  const params = {
    page: req.query.page,
    count: req.query.count,
  };
  apiFn.getProducts(params, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
});

/***** RELATED ITEMS  ****/
app.get('/relatedproducts/', (req, res) => {
  const productId = req.query.product_id;
  apiFn.getRelatedProducts(productId, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response.data);
    }
  });
});

app.get('/getProductInfo/', (req, res) => {
  const productId = req.query.product_id;
  apiFn.getProdInfo(productId, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response.data);
    }
  });
});

app.get('/getImage/', (req, res) => {
  const productId = req.query.product_id;
  apiFn.getThumbnail(productId, (err, response) => {
    if (err) {
      console.log('could not fetch styles!', productId);
      res.status(404).send(err);
    } else {
      console.log('successfully fetched styles!');
      res.send(response.data);
    }
  });
});

/* **** QUESTIONS & ANSWERS SECTION **** */

// Get Questions List
app.get('/getQuestions', (req, res) => {
  const params = {
    product_id: req.query.product_id,
    page: req.query.page,
    count: req.query.count,
  };
  apiFn.getQuestions(params, (err, questions) => {
    if (err) {
      res.status(500).send("Error requesting Questions Data");
    } else {
      res.send(questions.data);
    }
  });
});

// Get Answers List
app.get("/getAnswers", (req, res) => {
  const params = {
    page: req.query.page,
    count: req.query.count,
  };
  apiFn.getAnswers(req.query.question_id, params, (err, answers) => {
    if (err) {
      res.status(500).send("Error requesting Answers Data");
    } else {
      res.send(answers.data);
    }
  });
});

// Adds a Question
app.post("/addQuestion", (req, res) => {
  const params = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id,
  };
  apiFn.addQuestion(params, (err, confirmed) => {
    if (err) {
      res.status(500).send("Error adding a question");
    } else {
      res.status(201).send(confirmed);
    }
  });
});

// Adds an Answer
app.post("/addAnswer", (req, res) => {
  const params = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
  };
  apiFn.addAnswer(req.query.question_id, params, (err, confirmed) => {
    if (err) {
      res.status(500).send("Error adding an answer");
    } else {
      res.status(201).send(confirmed);
    }
  });
});

// Mark Question as Helpful
app.put("/markQuestion", (req, res) => {
  apiFn.markQuestion(req.query.question_id, (err, confirmed) => {
    if (err) {
      res.status(500).send("Error marking the question");
    } else {
      res.status(204).send(confirmed);
    }
  });
});

// Report a Question
app.put("/reportQuestion", (req, res) => {
  apiFn.reportQuestion(req.query.question_id, (err, confirmed) => {
    if (err) {
      res.status(500).send("Error reporting the question");
    } else {
      res.status(204).send(confirmed);
    }
  });
});

// Mark Answer as helpful
app.put("/markAnswer", (req, res) => {
  apiFn.markAnswer(req.query.question_id, (err, confirmed) => {
    if (err) {
      res.status(500).send("Error marking the answer");
    } else {
      res.status(204).send(confirmed);
    }
  });
});

// Report an Answer
app.put("/reportAnswer", (req, res) => {
  apiFn.reportAnswer(req.query.question_id, (err, confirmed) => {
    if (err) {
      res.status(500).send("Error reporting the answer");
    } else {
      res.status(204).send(confirmed);
    }
  });
});

/* **** CART SECTION **** */

/* **** INTERACTIONS SECTION **** */

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
