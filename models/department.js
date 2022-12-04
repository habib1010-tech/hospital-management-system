const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

department = mongoose.model('department', departmentSchema)

module.exports = department;