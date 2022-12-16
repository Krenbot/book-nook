const router = require('express').Router();
const { response } = require('express');
const { Book, Comment, Review, User } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/book/:id', async (req, res) => {
  try {
    //Get Book by ID and JOIN with user data
    const bookData = await Book.findByPk(req.params.id, {
      include: [
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

    // Serialize data so the template can read it
    const book = bookData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('individualBook', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/home', withAuth, async (req, res) => {

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{
        model: Book
      }]
    });

    const user = userData.get({ plain: true });
    res.render('home', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

router.get('/newBook', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true });

    res.render('newBook', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;