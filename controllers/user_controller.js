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