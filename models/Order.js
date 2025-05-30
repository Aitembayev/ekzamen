const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
