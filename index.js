
const express=require('express');
const db =require('./config/database_config');
const expressLayouts =require('express-ejs-layouts');
const cookieParser=require('cookie-parser');

const port =8000;

const app=express();

app.use(expressLayouts);

app.use(express.urlencoded());

//cookie parser
app.use(cookieParser());




// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express routes
// all the request are mapped to routes folder
app.use('/',require('./routes'));

//set assets
app.use(express.static('assets'));

app.use(express.urlencoded());

//set up view engine
app.set('view engine','ejs');
app.set('views','./views')



app.listen(port,function(err){
    if(err){console.log(`Error in running the server: ${err}`)}
    return console.log(`port is running on ${port}`)
})
