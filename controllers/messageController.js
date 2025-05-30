const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  const messages = await Message.find().populate('sender');
  res.json(messages);
};

exports.createMessage = async (req, res) => {
  const message = await Message.create(req.body);
  res.json(message);
};
