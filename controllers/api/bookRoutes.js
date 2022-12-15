const router = require('express').Router();
const e = require('express')
const { Comment, Review, Book, User } = require('../../models/');

//GET all books
router.get('/', async (req, res) => {
    try {
        const book = await Book.findAll({
            include: [{ model: Book }],
        });
        res.json(book);

        if (!book) {
            res.status(404).json({ message: 'No BOOKS found!' });
            return;
        }

        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a book
router.get('/:id', async (req, res) => {
    try {
        const book = await book.findOne({
            where: {
                id: req.params.id
            },
            include: [{ model: Book }]
        })

        if (!book) {
            res.status(404).json({ message: 'No BOOK with this ID!' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

//CREATE a new book
router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.json(book)
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE a book
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!book[0]) {
            res.status(404).json({ message: 'No BOOK with this ID!' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE a book
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!book) {
            res.status(404).json({ message: 'No BOOK with this ID!' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;