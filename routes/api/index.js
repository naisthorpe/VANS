const router = require('express').Router();
const userRoutes = require('./user');
const token = require('./token')

router.use('/users', userRoutes);
router.use('/token', token);

module.exports = router;
