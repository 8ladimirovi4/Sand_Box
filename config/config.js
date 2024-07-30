const express = require('express');
const morgan = require('morgan');

const ssr = require('../middleware/ssr');
module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true }));//рассказать серверу как работать с форматом application  
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(ssr);
};