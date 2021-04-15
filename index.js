
const express=require('express');

const app=express();

const port =8000;


//use express routes
// all the request are mapped to routes folder
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){console.log(`Error in running the server: ${err}`)}
    return console.log(`port is running on ${port}`)
})
