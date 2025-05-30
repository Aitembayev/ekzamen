module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`📡 Пользователь подключён: ${socket.id}`);

    socket.on('buyTicket', (data) => {
      io.emit('ticketPurchased', data);
    });

    socket.on('sendMessage', (data) => {
      io.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
      console.log(`🔌 Пользователь отключён: ${socket.id}`);
    });
  });
};
