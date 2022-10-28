const router=require('express').Router();
const Comment=require('../../models/comment')
const withAuth=require('../../utils/auth')

router.post('/',withAuth,async(req,res)=>{
    try{
        const postComment=await Comment.create({
            content: req.body.content,
            user_id:req.session.user_id,
            post_id:req.body.post_id
        });
        res.status(200).json(postComment)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id', withAuth, async(req,res)=>{
    try {
        const deletePost=await Comment.destroy({
            where:{
                id:req.params.id
            }
        })
        if(!deletePost){
            alert('No comment to delete')
        }
        res.status(200).json(deletePost)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports=router