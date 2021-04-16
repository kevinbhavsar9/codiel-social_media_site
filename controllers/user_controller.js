const User=require('../models/user');



module.exports.profile=function(req,res){
    
    
   if(req.cookies.user_id){
       User.findById(req.cookies.user_id,function(err,user){
           if(err){console.log('error in finding by id ')}
        if(user){
           return res.render('profile',{
               title:'profile',
               name :user.name,
               email:user.email
           })
        }
        return res.redirect('/user/login')

       })
   }
   else{
       return res.redirect('/user/login')
   }
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
    if(req.cookies.user_id){
        // console.log('you are already logged in');
        return res.redirect('/user/profile')
    }
    else{
        return res.render('login',{
            title:"Login"
        
    }
            
        )}
}

 module.exports.signout=function(req,res){
    //  console.log(req.cookies);
    res.clearCookie('user_id');
    return res.redirect('/user/login')
}

 module.exports.signup=function(req,res){

    
    return res.render('signup',{
        title:"Login"
            
    })
}

module.exports.loginData=function(req,res){
    
    console.log(req.body);
    //check for user email in db
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error finding email while signingin'); return};
        //handle user found
        if(user){
            //check password
            if(user.password==req.body.password)
            {
                //handle session creation
                // console.log('successful login')
                res.cookie('user_id',user.id);
                return res.redirect('/user/profile');
            }
            //password not match
            else{
               return res.redirect('back');
                }

        }
        //handle email not found
        else{
            return res.redirect('back');
        }

    })
}

module.exports.signupData=function(req,res){
    // console.log(req.cookie);
   if(req.body.password!=req.body.passwordAgain){
       return res.redirect('/user/signup')
   }   
   
       User.findOne({email:req.body.email},function(err,user){
           if(err){console.log('error finding email while signingup'); return};

           if(!user){
               User.create(req.body);
               return res.redirect('/user/login');
           }
           else{
            return res.redirect('/user/signup')
   
           }
       })
   
   
   
    
}