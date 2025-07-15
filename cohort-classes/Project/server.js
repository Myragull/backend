const express = require('express');
const connectToDb = require("./src/db/db");
const userModel = require('./src/db/models/user.model');
const noteModel = require('../122-CRUD-database/src/db/models/note.model');

const app = express();
app.use(express.json());

app.post('/users', async (req,res)=>{
const {userName,userAge,userAddress}=req.body;
console.log(userName,userAge,userAddress);
await userModel.create({
    userName,
    userAge,
    userAddress
})
res.json({
    message : "User created successfully"
})
})

app.get('/users', async (req,res)=>{
    const users = await userModel.find();
    res.json({
        message: " Users get successfully",
        users,
    });
})

app.delete('/users/:id', async (req,res)=>{
    const userId = req.params.id;
    await userModel.findOneAndDelete({
        _id : userId,
    });
    res.json({
        message: "User Deleted Successfully"
    })
})

app.patch('/users/:id', async (req,res)=>{
    const userId = req.params.id;
    const {userName,userAge,userAddress} = req.body;
await userModel.findByIdAndUpdate(
    userId,{
        userName,
        userAge,
        userAddress,
    }
)
res.json({
    Message :"User Updated Successfully"
})
})

connectToDb();
app.listen(3000,()=>{
console.log("Server is running");
})