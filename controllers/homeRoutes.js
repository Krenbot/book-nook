const router = require('express').Router();
const { Book, Comment, Review, User } = require('../models')
const withAuth = require('../utils/auth');

router.get('/book/:id', async (req, res) => {
  try {
    const bookData = await book.findByPk(req.params.id, {
      include: [
        {
          model: Book,
        },
        {
          model: Review,
          include: [
            User
          ]
        },
        {
          model: Comment,
          include: [
            User
          ]
        }

      ],
    });

    const book = bookData.get({ plain: true });

    res.render('book', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/home', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('home', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

module.exports = router;