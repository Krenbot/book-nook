const { Book } = require('../models/Book');

const bookData = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;