const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/userData',{ useNewUrlParser: true },);
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('server is connected with database:Mongodb')
});

module.exports=db;