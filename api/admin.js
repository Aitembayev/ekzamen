const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyToken } = require('../middleware/auth');

// Проверка роли (вынесем внутрь middleware)
const verifyAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Доступ запрещен' });
  }
  next();
};

// Пользователи
router.get('/users', verifyToken, verifyAdmin, adminController.getAllUsers);
router.patch('/users/:id', verifyToken, verifyAdmin, adminController.updateUser);
router.delete('/users/:id', verifyToken, verifyAdmin, adminController.deleteUser);

// Билеты
router.post('/tickets', verifyToken, verifyAdmin, adminController.createTicket);
router.delete('/tickets/:id', verifyToken, verifyAdmin, adminController.deleteTicket);
router.post('/events', verifyToken, verifyAdmin, adminController.createEvent);


module.exports = router;
