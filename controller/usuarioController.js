"use strict";
var Usuario = require("../models/Usuario");
var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "home",
    });
  },
  test: function (req, res) {
    return res.status(200).send({
      message: "home post",
    });
  },
  saveUser: function (req, res) {
    console.log(1);
    const user = new Usuario();

    user.nombre = req.body.nombre;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, save) => {
      console.log(err);
      console.log(save);
      if (err) return res.status(500).send("bad");

      if (!save) return res.status(404).send("bad");

      return res.status(200).send({ save });
    });
  },
};

module.exports = controller;
