const MOMENTO = require('moment-timezone');

const MIDDLEWARE_TEMPORAL = (req, res, next) => {
  const ZONA_TEMPORAL = req.headers['time-zone'] || 'UTC';
  const TIEMPO_ACTUAL = MOMENTO().tz(ZONA_TEMPORAL).format('YYYY-MM-DD HH:mm:ss');
  req.TIEMPO_ACTUAL = TIEMPO_ACTUAL;
  next();
};

module.exports = MIDDLEWARE_TEMPORAL;