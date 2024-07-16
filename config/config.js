const express = require("express");
const morgan = require("morgan");


module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true })); //рассказать серверу как работать с форматом application
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(express.static("public"));
};
