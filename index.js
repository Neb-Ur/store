//const express = require('express') utilizado por common module

const usuarioRoutes = require("./routes/usuarioRoutes.js");
const db = require("./config/db.js");
//crear app
const app = require("./app");
const port = 3000;

//conexion a la bd
db.authenticate()
  .then(() => {
    db.sync();
    console.log("conexion ok");
    app.listen(port, () => {
      console.log("server start ok");
    });

    //creacion del servidor
  })
  .catch((error) => {
    console.log(error);
  });

//Routing
//app.use("/", usuarioRoutes);

//Define port and start proyect
