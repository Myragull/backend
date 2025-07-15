const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect("mongodb+srv://1stDatabase:viOeEscKcvcX0uSl@cluster0.lrhkvju.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to db")
    })
}

module.exports= connectToDb;