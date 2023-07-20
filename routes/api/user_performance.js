/* eslint-disable semi */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');

const { check, validationResult } = require('express-validator');
const UserPerformance = require('../../models/User_Performance');

// @route  POST api/test
// @desc   Test route
// @access Public
router.get('/', (req, res) => {
  console.log(req.body);
  res.send('User Performance route');
});

// Define an API endpoint to get the uPerformance by userid
router.get('/:id', async (req, res) => {
  try {
    const { userId } = req.params;

    // Convert the userId to ObjectId
    const objectId = mongoose.Types.ObjectId(userId);

    // Find the test by ID
    const uPerformance = await UserPerformance.findById(objectId);

    if (!uPerformance) {
      return res.status(404).json({ message: 'User  performance not found' });
    }
    res.json({ uPerformance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route  POST api/uPerformance
// @desc   Post uPerformance
// @access Public
//router.post(

router.post(
  '/',
  [
    check('userId', 'User is required').not().isEmpty(),
    check('test_name', 'Test is required').not().isEmpty(),
    check('score', 'Score is required').not().isEmpty(),
    check('date', 'Date marks is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in user performance post api end point');
    try {
      const { userId, test_name, score, date } = req.body;

      const dateString = date;
      const formattedDate = moment(dateString, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );

      // Convert the userId to ObjectId
      const objectId = mongoose.Types.ObjectId(userId);

      // Create a new test object
      const newUserPerformance = new UserPerformance({
        objectId,
        test_name,
        score,
        formattedDate
      });

      // Save the test
      await newUserPerformance.save();

      res.status(201).json({
        message: 'User Performance added successfully',
        question: newUserPerformance
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// Define an API endpoint to update a question in test_details array
router.put(
  '/:id',
  [
    check('_id', 'User is required').not().isEmpty(),
    check('test_name', 'Test is required').not().isEmpty(),
    check('score', 'Score is required').not().isEmpty(),
    check('date', 'Date marks is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in user performance put api end point', req.body);

    try {
      const { _id, test_name, score, date } = req.body;

      const dateString = date;
      const formattedDate = moment(dateString, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );

      //Create tests object
      let uperformanceFields = {};
      if (_id) uperformanceFields._id = _id;
      if (test_name) uperformanceFields.test_name = test_name;
      if (score) uperformanceFields.score = score;
      if (formattedDate) uperformanceFields.formattedDate = formattedDate;

      let uPerformanceItem = await UserPerformance.findOne({
        _id: req.params.id
      });

      if (uPerformanceItem) {
        // Update old question
        uPerformanceItem = await UserPerformance.findOneAndUpdate(
          { _id: req.params.id },
          { $set: uperformanceFields },
          { new: true }
        );
        return res.json(uPerformanceItem);
      } else {
        return res.status(404).json({ message: 'User performance not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    // Convert the userId to ObjectId
    //const objectId = mongoose.Types.ObjectId(userId);

    // Find the test by id and Remove question
    await UserPerformance.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'User performance deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
