const { populate } = require('../models/post');
const Post = require('../models/post');
const User=require('../models/user');


module.exports.home=function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',69)
    // Post.find({},function(err,post){
    //     if(err){console.log('error in fetcing posts'); return;}
    //     const list=post;
    //     return res.render('home',
    //     {  
    //         title:"Home",
    //         list:list,
            
    //     })      
    // });

    // populate() function in mongoose is used for populating the data inside the reference. In your example PostSchema is having user field which will reference to the _id field which is basically the ObjectId of the mongodb document in user model


    Post
    .find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,post){
            if(err){console.log('error in fetcing posts'); return;}
           
            return res.render('home',
            {  
                title:"Home",
                post:post,
                
            })   
  });
}

   

module.exports.about=function(req,res){
    res.end('<h1>we are fun loving people :)</h1>')
}

