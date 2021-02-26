"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const express = require("express")
const app = (0, _express.default)();
app.get("/", function (req, res) {
  res.send("Hola Mundo");
});
app.get("/prueba", function (req, res) {
  res.send("Hola Mundo Prueba");
});
app.listen(3000, () => {
  console.log("Servidor Levantado");
});