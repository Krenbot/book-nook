const router = require('express').Router();
const commentRoutes = require('express').Router();
const reviewRoutes = require('express').Router();

router.use('/comments', commentRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;