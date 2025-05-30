const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  status: { type: String, default: 'active' },
  role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
