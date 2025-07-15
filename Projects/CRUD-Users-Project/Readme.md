# 📚 Node.js + MongoDB CRUD API

A simple RESTful CRUD API built with **Node.js**, **Express**, and **MongoDB Atlas**.

---

## 🚀 Features

- Connects Node.js server to MongoDB Atlas
- Uses Mongoose for schema & models
- Secure connection string with `.env`
- Basic CRUD operations:
  - Create User
  - Read Users
  - Update User
  - Delete User

---

## 📂 Project Structure

/src
├── db/
│ ├── db.js
│ └── models/
│ └── user.model.js
server.js
.env
.gitignore

---

## ✅ Getting Started

1. **Install dependencies**
   `npm install`
- Add your MongoDB connection string
- Create a .env file:


- MONGO_URL=your_mongodb_connection_string_here

- Run the server

- node server.js
---
## 🔒 Best Practices
- Keep your .env file out of version control (.gitignore it).

- Use async/await with try/catch for error handling.

- Test your API with Postman or Thunder Client.
---

## 📌 Author
-Made with ❤️ by []

