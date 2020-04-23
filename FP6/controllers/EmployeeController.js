var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

employeeController.list = function(req, res) {
 // TODO
};

employeeController.show = function(req, res) {
  // TODO
};

employeeController.create = function(req, res) {
  res.render("../views/employees/create");
};

employeeController.save = function(req, res) {
  // TODO
};

employeeController.edit = function(req, res) {
  // TODO
};

employeeController.update = function(req, res) {
  // TODO
};

employeeController.delete = function(req, res) {
  // TODO
};





module.exports = employeeController;
