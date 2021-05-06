const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.create=function(req,res){
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },function(err,comment){
                //handle err
                //console.log(comment);
                post.comments.push(comment._id);
                post.save();

                res.redirect('/')
            })
        }
    }) 
}
module.exports.delete=function(req,res){
    Comment.findById(req.params.id,function(err,comment){

        //error handiling
        // console.log(req.params.id)
        if(comment.user==req.user.id)
        {
           
             let postId=comment.post;   
            comment.remove();


            // The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}},function(err,post){
                // error handling
              
                return res.redirect('back'); 
               
            })



        }
        else{
           
            res.redirect('back');
        }
       
    })
}