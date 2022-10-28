const router=require('express').Router();
const Post=require('../models/post')

router.get('/',async(req,res)=>{
    try{
        const postData=await Post.findAll({})
        const posts=postData.map((post)=>post.get({plain: true}))
        res.render('index',{
            posts,
            loggedIn: req.session.loggedIn
        })
    } catch(err){
        res.status(500).json(err);
    }
    
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login')
   
});




router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})




module.exports = router;