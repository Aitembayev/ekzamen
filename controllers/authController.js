const bcrypt = require('bcryptjs');
const jwtService = require('../config/jwt');
const User = require('../models/User');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.json({ message: 'Пользователь зарегистрирован', user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Неверные данные' });
    }

    if (user.status === 'banned') {
      return res.status(403).json({ message: 'Пользователь забанен' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Неверные данные' });
    }

    const accessToken = jwtService.generateAccessToken(user);
    const refreshToken = jwtService.generateRefreshToken(user);
    res.json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};


exports.refresh = (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.status(401).json({ message: 'Нет refresh токена' });
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const accessToken = jwtService.generateAccessToken(decoded);
    res.json({ accessToken });
  } catch {
    res.status(403).json({ message: 'Недействительный refresh токен' });
  }
};
