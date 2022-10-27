const router=require('express').Router();

const dashBoard=require('./dashboard');
const homePage=require('./homepage-route');
const api=require('./api');

router.use('/api',api)
router.use('/', homePage);
router.use('/dashboard',dashBoard);


module.exports=router;