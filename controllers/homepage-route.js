const router=require('express').Router();
const User = require('../models/user');
const Post=require('../models/post');
const { sync } = require('../models/user');

router.get('/',async(req,res)=>{
    try{
        const postData=await Post.findAll({
            // include:[{model:Comment}]
        })
        const posts=postData.map((post)=>post.get({plain: true}))
        res.render('home',{
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




router.get('/dashboard', async(req,res)=>{
    try{
        const data=await Post.findAll({
            where:{
                user_id: req.session.user_id
                
            },
        });
        
        const posts= data.map((post)=>post.get({plain:true}));
        res.render('dashboard', {posts, loggedIn:true})
    } catch(err){
        res.status(500).json(err);
    }
    
})

router.get('/new-post', async(req,res)=>{
    res.render('new-post')
})






module.exports = router;