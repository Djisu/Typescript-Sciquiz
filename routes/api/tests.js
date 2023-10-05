/* eslint-disable semi */
import express from 'express';
const router = express.Router();
import { check, validationResult } from 'express-validator';

import TestQuestion from '../../models/test_question.js';
import User from '../../models/User.js';
import Profile from '../../models/Profile.js';

// Define a route that accepts a name parameter to generate statistics for a candidate tests
router.get('/:name/:randNum', async (req, res) => {
  try {
    const name = req.params.name;
    console.log('in router.get(/:name/:randNum', name);

    // 1. Extract all topics corresponding to the name parameter
    const topics = await TestQuestion.distinct('topic', { test_name: name });

    console.log('topics== ', topics);

    const topicInfo = [];

    // 2. Count records for each topic
    for (const topic of topics) {
      const topicCount = await TestQuestion.countDocuments({
        test_name: name,
        topic
      });

      console.log('topicCount== ', topicCount);

      // 3. Count records with answer_flag as "true" for each topic
      const topicCountWithFlagTrue = await TestQuestion.countDocuments({
        topic,
        test_name: name,
        answer_flag: 'true'
      });

      // 4. Count records with answer_flag as "false" for each topic
      const topicCountWithFlagFalse = await TestQuestion.countDocuments({
        topic,
        test_name: name,
        answer_flag: 'false'
      });

      //   4. Count records with answeredBy array length greater than 0
      const topicCountAnsweredBy = await TestQuestion.countDocuments({
        test_name: name,
        topic,
        answeredBy: { $exists: true, $ne: [] }
      });

      topicInfo.push({
        topic,
        topicCount: topicCount,
        correct: topicCountWithFlagTrue,
        used: topicCountAnsweredBy,
        wrong: topicCountWithFlagFalse
      });
    }
    //
    console.log('topicInfoSMALL== ', topicInfo);

    return res.json(topicInfo);
  } catch (error) {
    console.error(error);
    return res.json([]);
    //res.status(500).json({ error: 'Internal Server Error' });
  }
});
//
//// Define an API endpoint to get the test by test ID
router.get('/:test_name', async (req, res) => {
  console.log('in router.get(/:test_name');

  try {
    const { test_name } = req.params;

    // Find the test by ID
    const test = await TestQuestion.find({ test_name: test_name });

    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.json(test);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/:userAnswers/:testName/:questionId', async (req, res) => {
  console.log('in test put API endpoint');

  try {
    const { userAnswers, questionId, testName } = req.params;

    // Find the existing document based on testName and questionId
    const filter = {
      questionId: questionId,
      test_name: testName
    };

    // Find the existing document and return it
    let existingTestItem = await TestQuestion.findOne(filter);

    if (!existingTestItem) {
      // If the document doesn't exist, create a new one
      const newTestItem = new TestQuestion({
        test_name: testName,
        questionId: questionId,
        answer_flag: userAnswers
        // Add other fields here if needed
      });

      //Push userId into answeredBy array
      //Update answeredBy array for each question
      for (const question of newTestItem) {
        question.answeredBy.push(userId);
        await newTestItem.save();
      }

      await newTestItem.save();
      res
        .status(200)
        .json({ message: 'New document created', newItem: newTestItem });
    } else {
      // If the document exists, update the answer_flag while keeping other fields unchanged
      const update = {
        $set: {
          answer_flag: userAnswers
        }
      };

      const options = {
        new: true // Return the modified document
      };

      let updatedTestItem = await TestQuestion.findOneAndUpdate(
        filter,
        update,
        options
      );

      res
        .status(200)
        .json({ message: 'Update successful', updatedItem: updatedTestItem });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Define an API endpoint to update a question in test_details array questionId, userAnswers, testName, :userAnswers/
router.put('/:testName/:questionId', async (req, res) => {
  try {
    const { testName, questionId } = req.params;
    const { answer_flag, userId } = req.body;

    console.log(
      'in test put API endpoint',
      testName,
      questionId,
      answer_flag,
      userId
    );

    // Use the `upsert` option to create a new document if it doesn't exist
    const filter = {
      questionId: questionId,
      test_name: testName
    };

    const update = {
      $set: {
        answer_flag: answer_flag
      }
    };

    const options = {
      upsert: true,
      new: true // Return the modified document
    };

    let testItem = await TestQuestion.findOneAndUpdate(filter, update, options);

    // Check if the document was found and updated
    if (!testItem) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Push the userId into the answeredBy array
    testItem.answeredBy.push(userId);
    await testItem.save();

    //// Update answeredBy array for each question
    //for (const question of testItem) {
    //  question.answeredBy.push(userId);
    //  await question.save();
    //}

    res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

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

      let testItem = await TestQuestion.findOne({
        test_name: tName
      });

      if (testItem) {
        // Update old question
        testItem = await TestQuestion.findOneAndUpdate(
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
  console.log('in test delete api', req.params.id);
  try {
    // Find the test by id and Remove question
    await TestQuestion.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Test deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route  GET api/
// @access Public
router.get('/', async (req, res) => {
  console.log("in tests router.get('/', ");

  try {
    //const tests = await TestQuestion.find();
    //const tests = await TestQuestion.distinct('test_name');

    const tests = await TestQuestion.aggregate([
      {
        $group: {
          _id: '$test_name', // Group by the test_name field
          doc: { $first: '$$ROOT' } // Keep the first document encountered for each group
        }
      },
      {
        $replaceRoot: { newRoot: '$doc' } // Replace the root with the original document
      }
    ]);

    //console.log('TESTS== ', tests);

    res.send(tests);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
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
    //check('marks', 'Marks is required').not().isEmpty(),
    //check('pass_marks', 'Pass marks is required').not().isEmpty(),
    check('test_name', 'Test name is required').not().isEmpty(),
    check('subject_name', 'Test name is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in test post api end point router.post(');
    try {
      const { question, answer, marks, pass_marks, test_name, subject_name } =
        req.body;

      const query = {
        $and: [{ question: question }, { test_name: test_name }]
      };

      // Performing the find operation
      const testItem = await TestQuestion.findOne(query);
      if (testItem) {
        return res.status(409).json({
          msg: 'Test already exists with the same question and test_name'
        });
      }

      // Create a new test object
      const newTest = new Tests({
        test_name,
        question,
        answer,
        marks,
        pass_marks,
        subject_name
      });
      console.log('newTest:::', newTest);
      // Save the test
      await newTest.save();

      res.json(newTest);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

export default router;
