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
    summary: 'The Three-Body Problem is the first novel in the Remembrance of Earth’s Past trilogy. The series portrays a fictional past, present, and future wherein Earth encounters an alien civilisation from a nearby system of three Sun-like stars orbiting one another, a representative example of the three-body problem in orbital mechanics.',
    price: '29.99',
    currency: 'AUD'
  },
  {
    id: '2',
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    year: 1847,
    genre: 'Classic',
    summary: 'An orphaned governess confronts class, morality, and love at Thornfield Hall.',
    price: '22.00',
    currency: 'AUD'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Classic',
    summary: 'Elizabeth Bennet and Mr. Darcy navigate pride, judgement, and social expectations in a sharp study of manners and marriage.',
    price: '22.00',
    currency: 'AUD'
  },
  {
    id: '4',
    title: 'The English Patient',
    author: 'Michael Ondaatje',
    year: 1992,
    genre: 'Historical Fiction',
    summary: 'In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.',
    price: '25.39',
    currency: 'AUD'
  },
  {
    id: '5',
    title: 'Small Gods',
    author: 'Terry Pratchett',
    year: 1992,
    genre: 'Fantasy',
    summary: 'Tiny Pratchett’s humanity? Its comic, you got Om turned as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief.',
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