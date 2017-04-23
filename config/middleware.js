

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(express.static("public"));

  app.use("/component", express.static("bower_components"));

  app.use(bodyParser.urlencoded({
      extended: true
  }));
}
