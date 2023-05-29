const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User=require('./userModel');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection details
const mongoURL = 'mongodb://127.0.0.1:27017';
const dbName = 'e-commerce';

// Connect to the MongoDB database
mongoose.connect(`${mongoURL}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post("/register", async(req,res)=>{
    try {
        const { name, password} = req.body;
        await User.create({ name, password });
        res.status(201).json(req.body);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
      }
});

app.listen(3001);