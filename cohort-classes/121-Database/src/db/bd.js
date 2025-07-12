const mongoose = require("mongose");

function connectToDB() {
  mongoose.connect("connection-string").then(() => {
    console.log("Connected to database");
  });
}
 

module.exports =connectToDB; 