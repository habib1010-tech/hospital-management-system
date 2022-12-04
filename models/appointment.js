const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor_id: {
    type: mongoose.Types.ObjectId,
    ref: 'admin',
  },
  patient_name: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  phone: {
    type: String,
  },
  prescription: {
    type: String,
  },
});

appointment = mongoose.model('appointment', appointmentSchema)
module.exports = appointment;