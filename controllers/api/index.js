const router=require('express').Router();

const user=require('./user-routes');

router.use('/',user)



module.exports=router;