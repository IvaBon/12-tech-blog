const router = require('express').Router();


const postRoutes = require('./post-routes')
const userRoutes = require('./user-routes')


router.use('/post-routes', postRoutes);
router.use('/user-routes', userRoutes)

module.exports = router;
