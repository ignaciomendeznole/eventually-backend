const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
    trim: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EventSchema',
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TicketSchema', TicketSchema);
