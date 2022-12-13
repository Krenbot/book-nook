const router = require('express').Router();
const e = require('express')
const { Comment, Review, Book, User } = require('../../models/');

//GET all review
router.get('/', async (req, res) => {
    try {
        const review = await Review.findAll({
            include: [{ model: Book }],
        });
        res.json(review);

        if (!review) {
            res.status(404).json({ message: 'No REVIEWS found!' });
            return;
        }

        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a review
router.get('/:id', async (req, res) => {
    try {
        const review = await Review.findOne({
            where: {
                id: req.params.id
            },
            include: [{ model: Book }]
        })

        if (!review) {
            res.status(404).json({ message: 'No REVIEW with this ID!' });
            return;
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST a review
router.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.json(review)
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE a review
router.put('/:id', async (req, res) => {
    try {
        const review = await Review.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!review[0]) {
            res.status(404).json({ message: 'No REVIEW with this ID!' });
            return;
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE a review
router.delete('/:id', async (req, res) => {
    try {
        const review = await Review.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!review) {
            res.status(404).json({ message: 'No REVIEW with this ID!' });
            return;
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }
});