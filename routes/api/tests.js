/* eslint-disable semi */
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
import { check, validationResult } from 'express-validator';

import TestQuestion from '../../models/test_question.js';
import User from '../../models/User.js';
import Profile from '../../models/Profile.js';

import Question from '../../models/Question.js';

router.get('/:name/:userId/:randNum', async (req, res) => {
  try {
    const testName = req.params.name;

    console.log('in router.get(/:name/:randNum', testName);

    // Get user's name from the userId
    const user = await getOnlyName(testName);

    console.log('user= ', user);
    let userName = '';

    if (user) {
      userName = user;
    }

    const testCount = await TestQuestion.countDocuments({
      test_name: { $regex: user, $options: 'i' }
    });
    console.log('testCount == ', testCount);

    const usedQuestions = await TestQuestion.find({
      test_name: { $regex: user, $options: 'i' }
    });

    console.log('usedQuestions.length == ', usedQuestions.length);

    // Count of total questions in the database
    const questionCount = await Question.estimatedDocumentCount()
      .then((count) => {
        console.log(`Total count of documents in the collection: ${count}`);
        return count;
      })
      .catch((err) => {
        console.log('Error:', err);
        return 0;
      });

    console.log('questionCount== ', questionCount);

    // Total number of questions answered correctly
    const correctAnswers = await TestQuestion.countDocuments({
      $and: [
        {
          answer_flag: 'true'
        },
        {
          test_name: { $regex: user, $options: 'i' }
        }
      ]
    });

    console.log(
      'questionCount: ',
      questionCount,
      'correct: ',
      correctAnswers,
      'used: ',
      usedQuestions.length,
      'testCount: ',
      testCount
    );

    const resultArray = [
      questionCount,
      correctAnswers,
      usedQuestions.length,
      testCount
    ];

    console.log('resultArray:: ', resultArray);

    return res.json(resultArray);
  } catch (error) {
    console.error(error);
    return res.json([]);
    //res.status(500).json({ error: 'Internal Server Error' });
  }
});

//// Define an API endpoint to get the test by userId
router.get('/:randNum/:userId', async (req, res) => {
  console.log('in router.get(/:randNum/:userId');

  try {
    //const rand = req.params.rand;
    const id = req.params.userId;

    //const objectId = new mongoose.Types.ObjectId(id);

    //console.log('objectId:::: ', objectId);

    // Validate that the provided userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid userId format' });
    }

    const userName = await getUserById(id);

    //console.log('userName== ', userName);

    // Find the test by test_name
    //const test = await TestQuestion.find({ test_name: test_name });
    const tests = await getTestNamesContainingString(userName);

    //if (tests) console.log('testsOOOOOOO:: ', tests);

    if (!tests) {
      return res.status(404).json({ message: 'Test not found' });
    }

    res.json(tests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//// Define an API endpoint to get the test by test ID
router.get('/:test_name', async (req, res) => {
  console.log('in router.get(/:test_name');

  try {
    const test_name = req.params.test_name;

    const userId = getUserId(test_name);

    // Find the test by test_name
    const test = await TestQuestion.find({ test_name: test_name });

    if (test.length === 0) {
      return res.status(404).json({ message: 'Test not found' });
    }

    console.log('test is ', test);

    return res.json(test);
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
    return res.status(400).json({ msg: 'There is no test found' });
  }
});

//// @route  GET api/
//// @access Public
//router.get('/unmarked/:randnum', async (req, res) => {
//  console.log("in tests router.get('/unmarked', ");
//
//  try {
//    const tests = await TestQuestion.find({ answer_flag: 'false' });
//
//    console.log('unmarked tests== ', tests);
//
//    if (tests) {
//      return res.send(tests);
//    } else {
//      return res.json([]);
//    }
//  } catch (err) {
//    console.log(err.message);
//    res.status(500).send('Server Error');
//  }
//});

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

async function getUserById(userId) {
  try {
    // Find the user by their _id (assuming userId is the user's ObjectId)
    //const user = await User.findById(userId);
    const user = await User.findById(userId);

    console.log('user: ', user.name);

    if (!user) {
      return null; // User not found
    }

    // Return the user object
    return user.name;
  } catch (error) {
    console.error('Error retrieving user:', error);
    throw error; // You can handle the error in the calling code
  }
}
async function getUserId(testName) {
  // Use the split method to split the string by the hyphen character
  const parts = await testName.split('-');

  // The part before the hyphen is at index 0
  const extractedPart = parts[0];
  const tempUser = User.findOne({ name: extractedPart });

  if (tempUser) {
    return tempUser._id;
  }

  return '';
}

async function getTestNamesContainingString(searchString) {
  try {
    // Use a regular expression to find test names that include the searchString
    const testNames = await TestQuestion.distinct('test_name', {
      test_name: { $regex: searchString, $options: 'i' } // 'i' for case-insensitive search
    });

    console.log('testNames== ', testNames);

    return testNames;
  } catch (error) {
    console.error('Error retrieving test names:', error);
    throw error; // You can handle the error in the calling code
  }
}

async function getOnlyName(testName) {
  // Use the split method to split the string by the hyphen character
  const parts = await testName.split('-');

  // The part before the hyphen is at index 0
  const extractedPart = parts[0];
  return extractedPart;
}

export default router;
