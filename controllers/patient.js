const Patient = require('../models/patient');


const getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.status(200).json({ patients });
};

const getPatient = async (req, res) => {
    //   const { id } = req.params;
    //   const admin = await Patient.findById(id);
      try {
        const patient = await Patient.findOne({ _id: req.params.id })
        res.send(patient)
    } catch {
        res.status(404)
        res.send({ error: "Patient doesn't exist!" })
    }
};

const postPatient = async (req, res) => {
    //const admin = await Patient.create(req.body);
    try {
      const patient = new Patient({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          address: req.body.address,
          sex:req.body.sex,
          birthdate:req.body.birthdate,
          age:req.body.age,
          bloodgroup:req.body.bloodgroup
      })
      await patient.save()
        res.status(200).json({ patient });
    } catch (error) {
      res.send(error.message)
    }
    
  };

const updatePatient = async (req, res) => {
try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({ patient });
} catch {
    res.status(404)
	res.send({ error: "Patient doesn't exist!" })
}
};

const deletePatient = async (req, res) => {
	try {
		await Patient.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Patient doesn't exist!" })
	}
};

module.exports = {
  getPatients,
  getPatient,
  postPatient,
  updatePatient,
  deletePatient
};