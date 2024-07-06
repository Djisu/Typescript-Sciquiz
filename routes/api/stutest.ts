/* eslint-disable semi */
import express, { Request, Response } from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import StuTests from '../../models/StuTests.js';

export interface IStutests {
  userId : string;
  test_name : string;
  question : string;
  answer : string;
  marks: number;
  pass_marks: number;
  subject_name : string;
}

// @route  POST api/// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/:userid/:test_name', async (req: Request, res: Response) => {
  console.log("in stutests router.get('/', ");

  const userId = req.params.userid
  const test_name = req.params.test_name

  try {
    const tests = await StuTests.find({ userId, test_name });

    res.json(tests);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Define an API endpoint to get the test by test ID
router.get('/:test_name', async (req: Request, res: Response) => {
  try {
    const { test_name } = req.params;

    // Find the test by ID
    const test = await StuTests.findById(test_name);

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
    check('userId', 'User id is required. Login before taking the test')
      .not()
      .isEmpty(),
    check('question', 'Question is required').not().isEmpty(),
    check('answer', 'Answer is required').not().isEmpty(),
    check('marks', 'Marks is required').not().isEmpty(),
    check('pass_marks', 'Pass marks is required').not().isEmpty(),
    check('test_name', 'Test name is required').not().isEmpty(),
    check('subject_name', 'Test name is required').not().isEmpty()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in stutest post api end point');

    try {
      const {
        userid,
        question,
        answer,
        marks,
        pass_marks,
        test_name,
        subject_name
      } = req.body;

      // Find the test item with the given 'userid' and 'test_name'
      const testItem = await StuTests.findOne({ userid, test_name, question });

      // If found just return. Operation aborted.
      if (testItem) {
        return res.status(404).json({ error: 'Test item already captured' });
      }

      // Create a new test object
      const newTest = new StuTests({
        userid,
        test_name,
        question,
        answer,
        marks,
        pass_marks,
        subject_name
      });

      // Save the test
      await newTest.save();

      res.status(201).json(newTest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// Define an API endpoint to update a question in test_details array
router.put(
  '/:userid/:test_name',
  [
    check('userid', 'User id is required. Login before taking the test')
      .not()
      .isEmpty(),
    check('question', 'Question is required').not().isEmpty(),
    check('answer', 'Answer is required').not().isEmpty(),
    check('marks', 'Marks is required').not().isEmpty(),
    check('pass_marks', 'Pass marks is required').not().isEmpty(),
    check('test_name', 'Test name is required').not().isEmpty(),
    check('subject_name', 'Test name is required').not().isEmpty()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in stutest put api end point');

    try {
      const { userid, test_nameX } = req.params;
      const {
        userId,
        test_name,
        question,
        answer,
        marks,
        pass_marks,
        subject_name
      } = req.body;

      //Create stutests object
      let stutestFields: IStutests = {
        userId: userId,
        test_name: test_name || '',
        question: question || '',
        answer: answer || '',
        marks: marks || 0,
        pass_marks: pass_marks || 0,
        subject_name: subject_name || ''
      };

      // if (userid) stutestFields.userid = userid;
      // if (test_name) stutestFields.test_name = test_name;
      // if (question) stutestFields.question = question;
      // if (answer) stutestFields.answer = answer;
      // if (marks) stutestFields.marks = marks;
      // if (pass_marks) stutestFields.pass_marks = pass_marks;
      // if (subject_name) stutestFields.subject_name = subject_name;

      // Update old question
      const stutestItem = await StuTests.findOneAndUpdate(
        { userid: userid, test_name: test_nameX },
        { $set: stutestFields },
        { new: true }
      );

      return res.json(stutestItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:userid/:test_name', async (req: Request, res: Response) => {
  console.log('in test delete api', req.params.id);

  const { userid, test_name } = req.params;

  try {
    // Find the test by id and Remove question
    await StuTests.deleteOne({ _id: userid });
    res.json({ msg: 'Test deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
