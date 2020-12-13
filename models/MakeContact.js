const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MakeContactSchema = new Schema({
  messege: { type: String, required: true },
  name: { type: String },
  email: { type: String },

  /*the date that the  contact recive from the client*/
  date: { type: Date, default: Date.now },
});

module.exports = MakeContact = mongoose.model('makeContact', MakeContactSchema);
