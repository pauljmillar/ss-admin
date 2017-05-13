var mongoose = require('mongoose');

// Create a new schema for our address data
var schema = new mongoose.Schema({
    subject       : String
  , unitname     : String
  , dayofyear      : Number
  , sequence      : Number
  , body      : String
  , bodysrc      : String
  , img      : String
  , imgsrc       : String
  , lastmodified      : Date
});


// Return an Address model based upon the defined schema
module.exports = Lesson = mongoose.model('Lesson', schema);
