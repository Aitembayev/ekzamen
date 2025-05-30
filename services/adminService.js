const User = require('../models/User');
const Ticket = require('../models/Ticket');

exports.getAllUsers = async () => {
  try {
    const users = await User.find().lean();  // ✅ lean() возвращает простые объекты
    return users;
  } catch (err) {
    console.error('Ошибка получения пользователей:', err);
    return [];
  }
};

exports.updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new: true }).lean();
exports.deleteUser = (id) => User.findByIdAndDelete(id);

exports.createTicket = (data) => Ticket.create(data);
exports.deleteTicket = (id) => Ticket.findByIdAndDelete(id);
