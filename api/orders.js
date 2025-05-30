const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, orderController.getOrders);
router.post('/', verifyToken, orderController.createOrder);

module.exports = router;
