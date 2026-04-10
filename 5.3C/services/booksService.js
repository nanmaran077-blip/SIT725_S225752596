const Book = require('../models/bookModel');

async function getAllBooks() {
  return await Book.find({}).lean({ getters: true });
}

async function getBookById(id) {
  return await Book.findOne({ id: id }).lean({ getters: true });
}

module.exports = {
  getAllBooks,
  getBookById
};