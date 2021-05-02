const mongoose=require('mongoose');
const Comment=require('../models/comment');

const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        //this is pointed towards user (referencial)
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    // include  the array of ids of comments of particular posts to fetch fastly
    comments:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
]

},{
    timestamps:true
});

const Post=mongoose.model('Post',postSchema);
module.exports=Post;