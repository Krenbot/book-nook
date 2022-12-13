const router = require('express').Router();
const e = require('express')
const { Comment, Review, Book, User } = require('../../models/');


//GET all comments
router.get('/', async (req, res) => {
    try {
        const comment = await Comment.findAll({
            include: [{ model: Book }],
        });
        res.json(comment);

        if (!comment) {
            res.status(404).json({ message: 'No COMMENTS found!' });
            return;
        }

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a comment
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findOne({
            where: {
                id: req.params.id
            },
            include: [{ model: Book }]
        })

        if (!comment) {
            res.status(404).json({ message: 'No COMMENT with this ID!' });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//CREATE a new comment
router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create(req.body)
        res.json(comment)
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE a comment
router.put('/:id', async (req, res) => {
    try {
        const comment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!comment[0]) {
            res.status(404).json({ message: 'No COMMENT with this ID!' });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE a comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!comment) {
            res.status(404).json({ message: 'No COMMENT with this ID!' });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;