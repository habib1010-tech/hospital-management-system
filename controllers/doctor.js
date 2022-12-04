const Doctor = require('../models/doctor');


const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.status(200).json({ doctors });
};

const getDoctor = async (req, res) => {
    //   const { id } = req.params;
    //   const admin = await Doctor.findById(id);
      try {
        const doctor = await Doctor.findOne({ _id: req.params.id })
        res.send(doctor)
    } catch {
        res.status(404)
        res.send({ error: "Doctor doesn't exist!" })
    }
};

const postDoctor = async (req, res) => {
    //const admin = await Doctor.create(req.body);
    try {
        const doctor = await Doctor.create(req.body);
        res.status(200).json({ doctor });
    } catch (error) {
      res.send(error.message)
    }
    
  };

const updateDoctor = async (req, res) => {
try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({ doctor });
} catch {
    res.status(404)
	res.send({ error: "Doctor doesn't exist!" })
}
};

const deleteDoctor = async (req, res) => {
	try {
		await Doctor.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Doctor doesn't exist!" })
	}
};

module.exports = {
  getDoctors,
  getDoctor,
  postDoctor,
  updateDoctor,
  deleteDoctor
};