const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');
const newBookRoutes = require('./newBookRoutes');

router.use('/comments', commentRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
router.use('/addBook', newBookRoutes);

module.exports = router;