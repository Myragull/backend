const express = require('express');
const connectToDb = require('./src/db/db')
const app = express()

connectToDb();
app.listen(3000,()=>{
    console.log("server is running");
})