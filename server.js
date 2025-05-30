require('dotenv').config({ path: '.env.local' });
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./api/auth');
const eventRoutes = require('./api/events');
const ticketRoutes = require('./api/tickets');
const orderRoutes = require('./api/orders');
const messageRoutes = require('./api/messages');
const errorHandler = require('./middleware/errorHandler');



const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // или укажи фронтенд URL
    methods: ['GET', 'POST'],
  },
});

// Подключение MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Роуты
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/messages', messageRoutes);
const adminRoutes = require('./api/admin');
app.use('/api/admin', adminRoutes);


// Error handler
app.use(errorHandler);

// Socket.io
require('./socket')(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Backend API запущен на порту ${PORT}`);
});
