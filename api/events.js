const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { verifyToken } = require('../middleware/auth');

router.get('/', eventController.getEvents);
router.post('/', verifyToken, eventController.createEvent);

module.exports = router;
