const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//const md5 = require('md5');
const bcrypt = require('bcrypt');//bcrypt is better than md5 for security
const validator = require('validator');//validate email
const mongodbErrorHandler = require('mongoose-mongodb-errors');//prettify default MongoDb errors
const passportLocalMongoose = require('passport-local-mongoose');//add additional fields and methods to create new logins
const mongoSanitize = require('express-mongo-sanitize');//add June 20th, test to see if working...

var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validator.isEmail, 'Invalid Email Address'],
      trim: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    }

});



mongoSanitize.sanitize(UserSchema); //added Tues, June 20th...check to see if working

mongoSanitize.sanitize(UserSchema, { //added Tues, June 20th...check to see if working
  replaceWith: '_'
});

// authenticate input against database documents
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
      .exec(function (error, user) {
        if (error) {
          return callback(error);
        } else if ( !user ) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        // bcrypt.compare(password, user.password , function(error, result) {
        //   if (result === true) {
        //     return callback(null, user);
        //   } else {
        //     return callback();
        //   }
        // });
      });
};
// hash password before saving to database
// UserSchema.pre('save', function(next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   });
// });
var User = mongoose.model('User', UserSchema);//model method creates schema
module.exports = User;

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

// const userSchema = new Schema({
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     trim: true,
//     validate: [validator.isEmail, 'Invalid Email Address'],//validate email from the server side in addition the browser
//     required: 'Please Supply an email address'
//   },
//   name: {
//     type: String,
//     required: 'Please supply a name',
//     trim: true
//   },
//   resetPasswordToken: String,
//   resetPasswordExpires: Date,
//   hearts: [ //one to many relationship...will be many hearts/fav stores
//     { type: mongoose.Schema.ObjectId, ref: 'Store' } //an array of IDs that are related to a store
//   ]
//
// });
//
// // A virtual field in Mongoose is something that can be
// // generated on the fly
// userSchema.virtual('gravatar').get(function() {
//   //const hash = md5(this.email);//md5 is the algorithm used by gravatar to hash user's email address
//   const hash = bcrypt.hash(this.email)
//   return `https://gravatar.com/avatar/${hash}?s=200`;//S = size
// });
//
 UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
 UserSchema.plugin(mongodbErrorHandler);
//
// module.exports = mongoose.model('User', userSchema);
