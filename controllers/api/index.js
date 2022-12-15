const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', commentRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;