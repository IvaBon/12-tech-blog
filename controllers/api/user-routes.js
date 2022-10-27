const router=require('express').Router();
const User=require('../../models/user')

// Create new user to db
router.post('/',async(req,res)=>{
  try{
    const userData=await User.create({
        username: req.body.username,
        password: req.body.password,
    });

    req.session.save(()=>{
        req.session.username= userData.username;
        req.session.loggedIn=true;
        res.status(200).json(userData)
    })
  }catch(err){
    res.status(500).json(err);
  }
})

// If already user Login 
router.post('/login', async(req,res)=>{
  try{
    const data= await User.findOne({
      where:{
        username: req.params.username,
      }
    })
  }catch(err){
    res.status(500).json(err);
  }
})



module.exports = router;