const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
},
{
  collection: 'users', // Specify the collection name
  versionKey: false
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
