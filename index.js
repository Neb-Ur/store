//const express = require('express') utilizado por common module

const usuarioRoutes = require("./routes/usuarioRoutes.js");
const db = require("./config/db.js");
//crear app
const app = require("./app");

require("dotenv").config({ path: ".env" });
//conexion a la bd
/*db.authenticate()
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
*/
const port = process.env.PORT || 5000;
const host = process.env.HOST || "0.0.0.0";
app.listen(port, host, () => {
  console.log("start ok 1 2");
  db.authenticate()
    .then(() => {
      db.sync();
      console.log("conexion ok");
      //creacion del servidor
    })
    .catch((error) => {
      console.log(error);
    });
});
//Routing
//app.use("/", usuarioRoutes);

//Define port and start proyect
