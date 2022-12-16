const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BookData) {
      res.status(404).json({ message: 'No Book found with this id!' });
      return;
    }

    res.status(200).json(BookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;