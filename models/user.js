const mongoose=require('mongoose');
const db=require('../config/database_config')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

    
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;