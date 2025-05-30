const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('tickets');
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  const { tickets, totalAmount } = req.body;
  const order = await Order.create({
    user: req.user.id,
    tickets,
    totalAmount
  });
  res.json(order);
};
