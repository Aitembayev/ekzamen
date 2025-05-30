const Ticket = require('../models/Ticket');

exports.getAllTickets = () => Ticket.find().populate('event user');
exports.createTicket = (data) => Ticket.create(data);
exports.getTicketById = (id) => Ticket.findById(id).populate('event user');
exports.updateTicket = (id, data) => Ticket.findByIdAndUpdate(id, data, { new: true });
exports.deleteTicket = (id) => Ticket.findByIdAndDelete(id);
