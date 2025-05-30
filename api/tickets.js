const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const { verifyToken } = require('../middleware/auth');

router.get('/', ticketController.getTickets);
router.post('/', verifyToken, ticketController.createTicket);

module.exports = router;
