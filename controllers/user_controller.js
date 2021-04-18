const User=require('../models/user');

module.exports.profile=function(req,res){
    // res.end("<h1>User's profile</h1>")
    return res.render('profile',{
        name:"kevin",
        title:"profile"
    })
}
module.exports.message=function(req,res){
    res.end("<h1>User's message</h1>")
}
module.exports.feed=function(req,res){
    res.end("<h1>User's Feed</h1>")
}
module.exports.user=function(req,res){
    res.end("<h1>Hi i am user :)</h1>")
}

module.exports.login=function(req,res){
    return res.render('login',{
        title:"Login"
            
    })
}
 module.exports.signup=function(req,res){
    return res.render('signup',{
        title:"Login"
            
    })
}

module.exports.loginData=function(req,res){
    
    console.log(req.body);
    //to do
}

module.exports.signupData=function(req,res){
   if(req.body.password!=req.body.passwordAgain){
       return res.redirect('/user/signup')
   }   
   
       User.findOne({email:req.body.email},function(err,user){
           if(err){console.log('error finding email while signingup'); return};

           if(!user){
               User.create(req.body);
               console.log(User.find().doc);
               return res.redirect('/user/login');
           }
           else{
            return res.redirect('/user/signup')
   
           }
       })
   
   
   
    
}