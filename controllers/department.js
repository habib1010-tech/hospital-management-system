const Department = require('../models/department');


const getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.status(200).json({ departments });
};

const getDepartment = async (req, res) => {
    //   const { id } = req.params;
    //   const admin = await Department.findById(id);
      try {
        const department = await Department.findOne({ _id: req.params.id })
        res.send(department)
    } catch {
        res.status(404)
        res.send({ error: "Department doesn't exist!" })
    }
};

const postDepartment = async (req, res) => {
    //const admin = await Department.create(req.body);
    try {
      const department = new Department({
          name: req.body.name,
          description: req.body.description
      })
      await department.save()
        res.status(200).json({ department });
    } catch (error) {
      res.send(error.message)
    }
    
  };

const updateDepartment = async (req, res) => {
try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({ department });
} catch {
    res.status(404)
	res.send({ error: "Department doesn't exist!" })
}
};

const deleteDepartment = async (req, res) => {
	try {
		await Department.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Department doesn't exist!" })
	}
};

module.exports = {
  getDepartments,
  getDepartment,
  postDepartment,
  updateDepartment,
  deleteDepartment
};