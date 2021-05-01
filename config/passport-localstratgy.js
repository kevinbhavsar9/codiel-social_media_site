const { serializeUser } = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { user } = require('../controllers/user_controller');
const User = require('../models/user');


//authenticate the user
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user --> Passport');
            }

            if(!user || user.password !=password){
                console.log('iNVALID uSERNAME/PASSWORD');
                return done(null,false)
            }

            return done(null,user);
        });

    }

)); 

//serialise the user i.e create cookie and store in browser
//it does not mean encryption
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//deserlaise the coojkie i.e.pass cookie to server for request
//it does not mean encryption
passport.deserializeUser(function(id,done){
    
    User.findById(id,function(err,user){
        if(err){
            console.log('err in find user')
        }
        return done(null,user)
    })
});


passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/user/login');

}

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}




module.exports=passport;




