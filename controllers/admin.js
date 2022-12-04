const Admin = require('../models/admin');


const getAdmins = async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({ admins });
};

const getAdmin = async (req, res) => {
    //   const { id } = req.params;
    //   const admin = await Admin.findById(id);
      try {
        const admin = await Admin.findOne({ _id: req.params.id })
        res.send(admin)
    } catch {
        res.status(404)
        res.send({ error: "Admin doesn't exist!" })
    }
};

const postAdmin = async (req, res) => {
    //const admin = await Admin.create(req.body);
    try {
      const admin = new Admin({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          address: req.body.address
      })
      await admin.save()
        res.status(200).json({ admin });
    } catch (error) {
      res.send(error.message)
    }
    
  };

const updateAdmin = async (req, res) => {
try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({ admin });
} catch {
    res.status(404)
	res.send({ error: "Admin doesn't exist!" })
}
};

const deleteAdmin = async (req, res) => {
	try {
		await Admin.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Admin doesn't exist!" })
	}
};

module.exports = {
  getAdmins,
  getAdmin,
  postAdmin,
  updateAdmin,
  deleteAdmin
};