const express = require('express');
const router = express.Router();
// const adminMiddleware = require('../middleware/adminMiddleware');
const {
  postDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment
} = require('../controllers/department');
router.get('/',  getDepartments);
router.post('/',  postDepartment);
router.get('/:id',  getDepartment);
router.patch('/:id',  updateDepartment);
router.delete('/:id',  deleteDepartment);
module.exports = router;