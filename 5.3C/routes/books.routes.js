const express = require('express');
const router = express.Router();

const Controllers = require('../controllers');

router.get('/books', Controllers.booksController.getAllBooks);
router.get('/books/:id', Controllers.booksController.getBookById);
router.get('/integrity-check42', (req, res) => {
  res.status(204).send();
});

module.exports = router;