const router=require('express').Router();
const User=require('../../models/user');


// Create new user to db
router.post('/',async(req,res)=>{
  try{
    const userData=await User.create(req.body);

    req.session.save(()=>{
        req.session.id=userData.id;
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
        username: req.body.username,
      }
    });

    if(!data){
      res.status(500)
    }

    const passCheck=data.checkPassword(req.body.password);

    if(!passCheck){
      res.status(500)
    }

    req.session.save(()=>{
      req.session.id=data.id;
      req.session.loggedIn=true;
      res.json({data, message:'success'})
      console.log('loged in')
    })
  }catch(err){
    res.status(500).json(err);
  }
})

// logout route
router.post('/logout', async(req,res)=>{
  if(req.session.loggedIn){
    req.session.destroy(()=>{
      res.status(200).end();
      console.log("logged out")
    });
  } else{
    res.status(404).end();
  }

  
})



module.exports = router;