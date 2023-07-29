/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Tests from '../../models/Tests.js';

// @route  POST api/// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/',  async (req, res) => {
    console.log("in tests router.get('/', ");
  try {
    const tests = await Tests.find({}, { test_name: 1, _id: 1 });

    res.send(tests);
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

// Define an API endpoint to get the test by test ID 
router.get('/:test_name', async (req, res) => {
  try {
    const { test_name } = req.params;

    // Find the test by ID
    const test = await Tests.findById(test_name);

    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.json(test);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Define an API endpoint to add a question to test_details array
// @route  POST api/test
// @desc   Post test  // '/tests/:testId/question',
// @access Public
//router.post(

router.post(
  '/',
  [
    check('question', 'Question is required').not().isEmpty(),
    check('answer', 'Answer is required').not().isEmpty(),
    check('marks', 'Marks is required').not().isEmpty(),
    check('pass_marks', 'Pass marks is required').not().isEmpty(),
    check('test_name', 'Test name is required').not().isEmpty(),
    check('subject_name', 'Test name is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in test post api end point');
    try {
      const { question, answer, marks, pass_marks, test_name, subject_name } =
        req.body;

//      // Find the test by ID
//      const test = await Tests.findById(test_name);
//
//      if (test) {
//        return res
//          .status(404)
//          .json({ message: 'Test already entered!. Opration aborted' });
//      }

      // Create a new test object
      const newTest = new Tests({
        test_name,
        question,
        answer,
        marks,
        pass_marks,
        subject_name
      });

      // Save the test
      await newTest.save();

      res.status(201).json({
        message: 'Test added successfully',
        question: newTest
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
    check('question', 'Question is required').not().isEmpty(),
    check('answer', 'Answer is required').not().isEmpty(),
    check('marks', 'Marks is required').not().isEmpty(),
    check('pass_marks', 'Pass marks is required').not().isEmpty(),
    check('test_name', 'Test name is required').not().isEmpty(),
    check('subject_name', 'Test name is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in test put api end point');

    try {
      const { test_name, question, answer, marks, pass_marks, subject_name } =
        req.body;

      //Create tests object
      let testFields = {};
      if (test_name) testFields.test_name = test_name;
      if (question) testFields.question = question;
      if (answer) testFields.answer = answer;
      if (marks) testFields.marks = marks;
      if (pass_marks) testFields.pass_marks = pass_marks;
      if (subject_name) testFields.subject_name = subject_name;

      const tName = req.params.id;
      console.log(tName);

      let testItem = await Tests.findOne({
        test_name: tName
      });

      if (testItem) {
        // Update old question
        testItem = await Tests.findOneAndUpdate(
          { test_name: req.params.id },
          { $set: testFields },
          { new: true }
        );
        return res.json(testItem);
      } else {
        return res.status(404).json({ message: 'Test not found' });
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
    // Find the test by id and Remove question
    await Tests.findOneAndRemove({ test_name: req.params.id });
    res.json({ msg: 'Test deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
