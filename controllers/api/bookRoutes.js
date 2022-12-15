const router = require('express').Router();
const { Comment, Review, Book, User } = require('../../models/');
const withAuth = require('../../utils/auth');

//CREATE a new book
router.post('/', withAuth, async (req, res) => {
    try {
        const book = await Book.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.json(book)
    } catch (err) {
        res.status(500).json(err)
    }
});

//DELETE a book
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const book = await Book.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!book) {
            res.status(404).json({ message: 'No book found with this id!' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
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

module.exports = router;