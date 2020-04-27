var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

//listar todos employees
employeeController.list = async function (req, res) {
  try {
    const employees = await Employee.find()
    res.render('employees', { employees: employees })
  } catch (e) {
    console.log("lista vazia")
    res.render('employees', { employees: [] })
  }
};

//mostrar employee com ID especifico
employeeController.show = async function (req, res) {
  try {
    const employee = await Employee.findById(req.params.id);
    res.render('employees/show', { employee })
  } catch (e) {
    console.log("lista vazia")
    res.render('employees', { employees: [] })
  }
};

//criar employee
employeeController.create = function (req, res) {
  res.render("../views/employees/create");
};

//save
employeeController.save = async function (req, res) {
  const result = await Employee.create(req.body);
  res.redirect(`/employees/show/${result._id}`)
};

//edit and update
employeeController.edit = async function (req, res) {
  const employee = await Employee.findById(req.params.id)
  res.render(`../views/employees/edit`, {
    employee
  });
};

//update employee
employeeController.update = async function (req, res) {
  const result = await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/employees/show/${result._id}`);
};

//delete
employeeController.delete = async function (req, res) {
    await Employee.findByIdAndDelete(req.params.id)
    res.redirect('/employees')
};

//search
employeeController.search = async function (req, res) {
  res.render('employees/search')
};

//query de procura por salario
employeeController.searchSalary = async function (req, res) {
  const result = await Employee.find({ salary: { $gt: req.body.salary } });
  res.render('employees', { employees: result })
};

//query de procura por posição
employeeController.searchPosition = async function (req, res) {
  const result = await Employee.find({ position: req.body.position });
  res.render('employees', { employees: result })
};

module.exports = employeeController;
