"use strict";

var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(cors());
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
