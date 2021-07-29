const Event = require('../models/Event');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

exports.createEvent = async (req, res) => {
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    let event = new Event(req.body.event);

    event.owner = req.body.event.owner;

    event.save();
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send('Could not add event');
  }
};

exports.getEventsOwnership = async (req, res) => {
  let { userId } = req.body;
  try {
    const events = await Event.find({ owner: userId }).sort({ date: -1 });
    res.json({ events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Could not fetch your events!' });
  }
};
