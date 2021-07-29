const mongoose = require('mongoose');

const User = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  familyName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('User', User);
