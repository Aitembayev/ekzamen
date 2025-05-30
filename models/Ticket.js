const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  price: Number,
  seatNumber: String,
  status: { type: String, default: 'available' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Ticket', ticketSchema);
