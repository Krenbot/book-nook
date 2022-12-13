const router = require('express').Router();
const commentRoutes = require('express').Router();
const reviewRoutes = require('express').Router();

router.use('/comments', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;