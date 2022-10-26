const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage')
const dashboardRoutes = require('./dashboard')

router.use('/api', apiRoutes);
router.use('/',homepageRoutes);
router.use('/dashboard',dashboardRoutes)

module.exports = router;
