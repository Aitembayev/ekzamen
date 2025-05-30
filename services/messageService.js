const Message = require('../models/Message');

exports.getAllMessages = () => Message.find().populate('sender');
exports.createMessage = (data) => Message.create(data);
exports.getMessageById = (id) => Message.findById(id).populate('sender');
exports.updateMessage = (id, data) => Message.findByIdAndUpdate(id, data, { new: true });
exports.deleteMessage = (id) => Message.findByIdAndDelete(id);
