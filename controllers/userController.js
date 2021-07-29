const User = require('../models/User');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //extract email, userId (firebase), firstName, familyName
  const { email, userId, firstName, familyName } = req.body;

  try {
    let user = new User({
      _id: userId,
      firstName: firstName,
      familyName: familyName,
      email: email,
    });
    await user.save();
    return res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send('Could not create user');
  }
};
