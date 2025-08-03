const mongoose = require('mongoose');
// Mongoose Define structure of your data using schemas
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const userModel = mongoose.model('user', userSchema); 


module.exports = userModel;
