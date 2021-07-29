const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

router.post(
  '/create-user/',
  [
    check('email', 'Email is required').not().isEmpty(),
    check('userId', 'User Id is required').not().isEmpty(),
    check('firstName', 'First Name is required').not().isEmpty(),
    check('familyName', 'Family Name is required').not().isEmpty(),
  ],
  userController.createUser
);

module.exports = router;
