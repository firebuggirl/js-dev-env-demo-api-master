require('dotenv').config();

var express =  require('express');
var cors = require('cors');//ensure that we can call our Heroku-based API from our UI, which will be hosted on a different url


var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);//adding session as an argument lets connect-mongo middleware access sessions
//var methodOverride = require('method-override');//use this middleware to be able to conduct a put request on a form to update data...used in profile.pug file
const mongoSanitize = require('express-mongo-sanitize');//add June 20th, test to see if working...
//const User = mongoose.model('User');
var User = require('./models/User');

const app = express();


mongoose.Promise = global.Promise;
// mongodb connection //name of database is in .env file

mongoose.connect(process.env.DATABASE);
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));


//app.use(methodOverride('X-HTTP-Method-Override'));

////////////////////////////
//////////////////////////////
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  // res.json([
  //   {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
  //   {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
  //   {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  // ]);
  res.json(User);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
