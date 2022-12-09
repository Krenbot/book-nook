const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = reequire('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;