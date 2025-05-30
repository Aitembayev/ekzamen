const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Нет токена' });
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = decoded;  // Здесь должно быть { id, role }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Недействительный токен' });
  }
};

exports.verifyAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Доступ запрещен' });
  }
  next();
};