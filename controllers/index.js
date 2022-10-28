const router=require('express').Router();


const homePage=require('./homepage-route');
const api=require('./api');

router.use('/api',api)
router.use('/', homePage);



module.exports=router;