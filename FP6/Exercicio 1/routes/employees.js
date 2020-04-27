var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");

// Get all employees
router.get('/', function (req, res) {
  employee.list(req, res);
});

// Get single employee by id
router.get('/show/:id', function (req, res) {
  employee.show(req, res)
});

// Create employee
router.get('/create', function (req, res) {
  employee.create(req, res);
});

// Save employee
router.post('/save', function (req, res) {
  employee.save(req, res);
});

// Edit employee
router.get('/edit/:id', function (req, res) {
  employee.edit(req, res);
});

// Edit update
router.post('/update/:id', function (req, res) {
  employee.update(req, res);
});

// Edit update Delete
router.post('/delete/:id', function (req, res, next) {
  employee.delete(req, res);
});

//pagina de procura
router.get('/search', function (req, res, next) {
  employee.search(req,res)
});

//procura por salario
router.post('/search/salary', function (req, res, next) {
  employee.searchSalary(req,res)
});

//procura por posiçao
router.post('/search/position', function (req, res, next) {
  employee.searchPosition(req,res)
});

module.exports = router;
