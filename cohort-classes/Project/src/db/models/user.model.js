const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  userAge: Number,   
  userAddress: String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
