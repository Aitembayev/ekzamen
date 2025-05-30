const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, messageController.getMessages);
router.post('/', verifyToken, messageController.createMessage);

module.exports = router;
