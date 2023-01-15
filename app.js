"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
const routes = require("./routes/usuarioRoutes");
// cargar archivos rutas

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors

//rutas
app.use("/", routes);

//exportar
module.exports = app;
