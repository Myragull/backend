const { default: mongoose } = require('mongoose');
const express = require('mongoose');

function connectToDb(){
    mongoose.connect("   ")
    .then(()=>{
        console.log("Connected to db")
    })
}

module.exports= connectToDb;