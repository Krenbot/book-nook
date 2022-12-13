const router = require('express').Router();
const { Comment } = require('../../models/Comment');


//GET all comments
router.get('/', async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
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
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            res.status(404).json({ message: 'No COMMENT with this ID!' });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST a comment

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
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});