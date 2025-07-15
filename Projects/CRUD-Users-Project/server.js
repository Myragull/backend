require('dotenv').config();
const express = require('express');
const connectToDb = require("./src/db/db");
const userModel = require('./src/db/models/user.model');

const app = express();
app.use(express.json());

//  POST: Create user
app.post('/users', async (req, res) => {
  try {
    const { userName, userAge, userAddress } = req.body;
    console.log(userName, userAge, userAddress);
    await userModel.create({
      userName,
      userAge,
      userAddress
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

//  GET: Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

//  DELETE: Delete user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await userModel.findOneAndDelete({ _id: userId });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// PATCH: Update user by ID
app.patch('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { userName, userAge, userAddress } = req.body;

    await userModel.findByIdAndUpdate(
      userId,
      { userName, userAge, userAddress }
    );

    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

connectToDb();

app.listen(3000, () => {
  console.log("Server is running");
});
