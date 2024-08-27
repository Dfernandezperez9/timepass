const express = require('express');
const ROUTER = express.Router();
const HORA_ACTUAL = new Date().toLocaleTimeString();

ROUTER.get('/', (req, res) => {
  res.send(`
    <h1>BIENVENIDO</h1>
    <p>La hora ha sido comprobada satisfactoriamente</p>
    <p>${HORA_ACTUAL}</p>
    <button onclick="window.location.href='/index'">Ir a Index</button>
  `)
});

module.exports = ROUTER;