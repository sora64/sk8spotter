const router = require('express').Router();

const userRoutes = require('./user-routes');
const commmentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/comments', commmentRoutes);

module.exports = router;
