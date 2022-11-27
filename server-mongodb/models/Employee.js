const mongoose = require("mongoose");
const {Schema} = mongoose

const EmployeeSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  position: {
    type: String,
    require: true
  },
  wage: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('employee',EmployeeSchema);