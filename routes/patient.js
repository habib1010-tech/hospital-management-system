const express = require('express');
const router = express.Router();
// const adminMiddleware = require('../middleware/adminMiddleware');
const {
  postPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
} = require('../controllers/patient');
router.get('/',  getPatients);
router.post('/',  postPatient);
router.get('/:id',  getPatient);
router.patch('/:id',  updatePatient);
router.delete('/:id',  deletePatient);
module.exports = router;