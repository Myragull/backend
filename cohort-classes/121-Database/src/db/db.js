const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect("mongodb+srv://1stDatabase:viOeEscKcvcX0uSl@cluster0.lrhkvju.mongodb.net/").then(() => {
    console.log("Connected to database");
  });
}
 

module.exports =connectToDB; 