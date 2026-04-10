const mongoose = require('mongoose');
const Book = require('../models/bookModel');

const mongoURI = 'mongodb://127.0.0.1:27017/booksdb';

mongoose.connect(mongoURI);

const sampleBooks = [
  {
    id: '1',
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    year: 2008,
    genre: 'Science Fiction',
    summary: 'A science fiction novel about humanity making contact with an alien civilisation.',
    price: '29.99',
    currency: 'AUD'
  },
  {
    id: '2',
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    year: 1847,
    genre: 'Classic Fiction',
    summary: 'A novel about the life, struggles, and independence of Jane Eyre.',
    price: '22.00',
    currency: 'AUD'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    summary: 'A classic novel about love, class, and family in early 19th century England.',
    price: '22.00',
    currency: 'AUD'
  },
  {
    id: '4',
    title: 'The English Patient',
    author: 'Michael Ondaatje',
    year: 1992,
    genre: 'Historical Fiction',
    summary: 'A novel set during World War II focusing on identity, memory, and loss.',
    price: '25.39',
    currency: 'AUD'
  },
  {
    id: '5',
    title: 'Small Gods',
    author: 'Terry Pratchett',
    year: 1992,
    genre: 'Fantasy',
    summary: 'A humorous fantasy novel exploring religion, belief, and philosophy.',
    price: '31.99',
    currency: 'AUD'
  }
];

(async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(sampleBooks);
    console.log('Books seeded successfully');
  } catch (err) {
    console.log('Seeding failed:', err.message);
  } finally {
    mongoose.connection.close();
  }
})();