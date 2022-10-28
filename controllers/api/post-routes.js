const router=require('express').Router();
const Post=require('../../models/post');
const withAuth=require('../../utils/auth')


// create
router.post('/',withAuth, async(req,res)=>{
    try{
        const postData=await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
        res.status(200).json(postData)
    }catch(err){
        res.status(500).json(err);
    }
})
// get by id

// update

//delete

module.exports=router;