const express = require('express');
const ROUTER = express.Router();
const HORA_ACTUAL = new Date().toLocaleTimeString();

ROUTER.get('/', (req, res) => {
  res.send(`
    <h1>BIENVENIDO</h1>
    <p>Esto es Index</p>
    <p>${HORA_ACTUAL}</p>
    <button onclick="window.location.href='/endRoute'">Ir a endRoute</button>
  `);
});

module.exports = ROUTER;


