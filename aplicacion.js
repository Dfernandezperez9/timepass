const express = require('express');
const APP = express();
const INDEX = require('./routes/index');
const END_ROUTE = require('./routes/endRoute');

const MIDDLEWARE_TEMPORAL = require('./middlewares/horaMiddleware');
const MIDDLEWARE_VALIDACION = require('./middlewares/validarHora');


APP.use('/index', INDEX);
APP.use(MIDDLEWARE_TEMPORAL, MIDDLEWARE_VALIDACION);
APP.use('/endRoute', END_ROUTE);


APP.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});