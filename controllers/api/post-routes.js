const router=require('express').Router();
const Post=require('../../models/post');
const Comment=require('../../models/comment')
const withAuth=require('../../utils/auth')


// create
router.post('/', async(req,res)=>{
    try{
        const postData=await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id:req.session.user_id,
            
        });
        res.status(200).json(postData)
    }catch(err){
        console.log(req.session.id)
        res.status(500).json(err);
    }
})
// get by id
router.get('/:id', async(req,res)=>{
    try{
        
        const getPost=await Post.findByPk(req.params.id,{});
        const post=getPost.get({plain: true});
        const getComment=await Comment.findAll({
            where:{
                user_id:req.session.id
            }
        })
        console.log(getComment)
        
        if(getComment===null){
            res.render('single-post',{post})
        }else{
            const comment=getComment.map((comment)=>comment.get({plain: true}));
            res.render('single-post',{post, comment})
            console.log(comment)
        }
        
        
        
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})
// update
router.put('/',withAuth, async(req,res)=>{
    try{
        const updatePost= await Post.update(
            {
                id: req.params.id,
                title:req.params.title,
                content:req.params.content,
            },
            {
                where:{
                    id:req.params.id,
                    user_id:req.body.user_id
                }
            }
        );
        res.status(200).json(updatePost)
    }catch(err){
        res.status(500).json(err);
    }
})
//delete
router.delete('/:id', withAuth, async(req,res)=>{
    try{
        const deletePost= await Post.destroy({
            where:{
                id: req.params.id,
                user_id:req.body.user_id
            }
        })
        res.status(200).json(deletePost)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;