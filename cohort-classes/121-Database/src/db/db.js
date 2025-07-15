const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect("mongodb+srv:lrhkvju.mongodb.net/").then(() => {
    console.log("Connected to database");
  });
}
 

module.exports =connectToDB;  