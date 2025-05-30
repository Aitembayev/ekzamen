const Order = require('../models/Order');

exports.getAllOrders = () => Order.find().populate('user tickets');
exports.createOrder = (data) => Order.create(data);
exports.getOrderById = (id) => Order.findById(id).populate('user tickets');
exports.updateOrder = (id, data) => Order.findByIdAndUpdate(id, data, { new: true });
exports.deleteOrder = (id) => Order.findByIdAndDelete(id);
