const Ticket = require('../models/Ticket');

exports.getTickets = async (req, res) => {
  const tickets = await Ticket.find().populate('event user');
  res.json(tickets);
};

exports.createTicket = async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.json(ticket);
};
