const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect("")
    .then(()=>{
        console.log("Connected to db")
    })
}

module.exports= connectToDb;