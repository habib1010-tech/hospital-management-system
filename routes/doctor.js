const express = require('express');
const router = express.Router();
// const adminMiddleware = require('../middleware/adminMiddleware');
const {
  postDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctor');
router.get('/',  getDoctors);
router.post('/',  postDoctor);
router.get('/:id',  getDoctor);
router.patch('/:id',  updateDoctor);
router.delete('/:id',  deleteDoctor);
module.exports = router;