const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect("mongodb+srv://.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to db")
    })
}

module.exports= connectToDb;