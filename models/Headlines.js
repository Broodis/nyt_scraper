var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var headLineSchema = new Schema({
  headLine: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }

});

var HeadLine = mongoose.model("Headline", headlineSchema);

module.exports = Headline;