const adminService = require('../services/adminService');
const Event = require('../models/Event');

exports.createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await adminService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await adminService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await adminService.deleteUser(req.params.id);
    res.json({ message: 'Пользователь удален' });
  } catch (err) {
    next(err);
  }
};

exports.createTicket = async (req, res, next) => {
  try {
    const ticket = await adminService.createTicket(req.body);
    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.deleteTicket = async (req, res, next) => {
  try {
    await adminService.deleteTicket(req.params.id);
    res.json({ message: 'Билет удален' });
  } catch (err) {
    next(err);
  }
};
