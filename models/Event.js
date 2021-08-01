const mongoose = require('mongoose');

const Event = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    // required: true,
    trim: true,
  },
  backdropImage: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Events', Event);
