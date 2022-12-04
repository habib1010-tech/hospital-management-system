const Doctor = require('../models/doctor');
const { StatusCodes } = require('http-status-codes');

const getAppointments = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  const appointments = doctor.appointments;
  res.status(200).json({ appointments });
};
const postAppointment = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        doctor.appointments.push(req.body);
        doctor.save();
        res.status(200).json({ doctor });
    } catch (error) {
        res.send(error.message)
    }
  
};
const updateAppointment = async (req, res) => {
  const user = req.user;
  const doctor = await Doctor.findById(user._id);
  const index = doctor.appointments.findIndex(
    (appointment) => appointment._id == req.params.id
  );
  if (index == -1) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Appointment not found' });
  } else {
    doctor.appointments[index] = req.body;
    doctor.save();
    res.status(200).json({ doctor });
  }
};
module.exports = {
  getAppointments,
  postAppointment,
  updateAppointment,
};