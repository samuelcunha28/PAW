var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  
  // TODO

  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
