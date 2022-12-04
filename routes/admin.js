const express = require('express');
const router = express.Router();
// const adminMiddleware = require('../middleware/adminMiddleware');
const {
  postAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin
} = require('../controllers/admin');
router.get('/',  getAdmins);
router.post('/',  postAdmin);
router.get('/:id',  getAdmin);
router.patch('/:id',  updateAdmin);
router.delete('/:id',  deleteAdmin);
module.exports = router;