const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  image: String,
  availableTickets: Number
});

module.exports = mongoose.model('Event', eventSchema);
