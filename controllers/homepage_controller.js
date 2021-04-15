module.exports.home=function(req,res){
    return res.render('home',
    {
        title:"Home"
    })
}

module.exports.about=function(req,res){
    res.end('<h1>we are fun loving people :)</h1>')
}