
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/database_config');
//used for session cookjie
const session = require('express-session');
const passport = require('passport')
const passportLocal = require('./config/passport-localstratgy');
const { pass } = require('./config/database_config');
const Mongostore = require('connect-mongo') (session);
const sassMiddleware=require('node-sass-middleware');

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'

}));



app.use(expressLayouts);

app.use(express.urlencoded());

//cookie parser
app.use(cookieParser()); 





// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//set assets
app.use(express.static('assets'));

app.use(express.urlencoded());

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views')

//mongo store is used to store session cookie in the db
app.use(session({
    name: 'codiel',
    //change the secret before deypolment
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 1000)
    },
    store: new Mongostore({

        mongooseConnection: db,
        autoRemove: 'disabled'

    },
    function(err){
        console.log(err || 'connect-mongodb setup ok')
    }
    )

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//use express routes
// all the request are mapped to routes folder
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log(`Error in running the server: ${err}`) }
    return console.log(`port is running on ${port}`)
})
