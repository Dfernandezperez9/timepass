const MOMENTO = require('moment');

const MIDDLEWARE_VALIDACION = (req, res, next) => {
  const HORA_ACTUAL = MOMENTO();
  const HORA_INICIAL = MOMENTO('12:00', 'HH:mm');
  const HORA_LIMITE = MOMENTO('23:59', 'HH:mm');

  if (HORA_ACTUAL.isBetween(HORA_INICIAL, HORA_LIMITE)) {
    next();
  } else {
    res.status(403).send(`Acceso denegado. La hora actual no se encuentra dentro del rango permitido.
                          <p><a href="/index">Home</a></p>
    `);
  }
};

module.exports = MIDDLEWARE_VALIDACION;