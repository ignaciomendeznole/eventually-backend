const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { check } = require('express-validator');

router.post('/create-event/', eventController.createEvent);

router.post(
  '/fetch-own-events/',
  [check('userId', 'Your user id is required').not().isEmpty()],
  eventController.getEventsOwnership
);

module.exports = router;
