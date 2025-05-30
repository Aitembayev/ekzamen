const User = require('../models/User');

exports.getUserById = (id) => User.findById(id);
exports.getAllUsers = () => User.find();
exports.updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new: true });
exports.deleteUser = (id) => User.findByIdAndDelete(id);
