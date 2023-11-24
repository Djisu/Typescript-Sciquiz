/* eslint-disable semi */
import express from 'express';
//import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

import config from 'config';

//import { check, validationResult } from 'express-validator';
import { check, validationResult } from 'express-validator';

import User from '../../models/User.js';
import Question from '../../models/Question.js';
import questionData from '../../questionsData.js';
import TestQuestion from '../../models/test_question.js';

import multer from 'multer';
import xlsx from 'xlsx';

const router = express.Router();
const emailPassword = config.get('emailPassword');
//import checkQuestionSelected from '../../middleware/checkQuestionSelected';

// Multer configuration for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for seeding data
//router.get('/seed', async (req, res) => {
//  //  const client = new MongoClient(url);
//  console.log('router.get(seed)');
//
//  try {
//    // Insert the data into the collection
//    const result = await Question.insertMany(questionData);
//    console.log(`${result.insertedCount} documents inserted.`);
//
//    res.json({ message: `${result.insertedCount} documents inserted.` });
//  } catch (err) {
//    console.error('Error:', err);
//    res.status(500).json({ error: 'An error occurred while seeding data.' });
//  }
//});

// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/', async (req, res) => {
  //console.log("in question router.get('/', ");
  try {
    const question = await Question.find({}, { question: 1, _id: 1 });

    res.send(question);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/questions', async (req, res) => {
  const topicParam = req.query.topic;
  const difficultyLevelParam = req.query.difficultylevel;

  try {
    const questions = await Question.aggregate([
      {
        $match: {
          topic: topicParam,
          difficulty_level: difficultyLevelParam
        }
      },
      {
        $project: {
          _id: 0,
          question: 1,
          answer: 1,
          difficulty_level: 1,
          subject_name: 1,
          topic: 1,
          question_year: 1,
          question_stats: 1
        }
      }
    ]);

    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching questions.' });
  }
});

//app.get('/question/:checkedTopics/:checkedDifficultylevels/:checkedSubjects/:userId', (req, res) => {/:testName

router.get(
  '/:checkedTopics/:checkedDifficultyLevels/:checkedSubjects/:userId/:noofquestions/:name',
  async (req, res) => {
    try {
      let {
        checkedTopics,
        checkedDifficultyLevels,
        checkedSubjects,
        userId,
        noofquestions,
        name
      } = req.params;

      //   `/question/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}`
      console.log(
        'IN IN ',
        checkedTopics,
        checkedDifficultyLevels,
        checkedSubjects,
        userId,
        noofquestions,
        name
      );

      //Generate test name at the backend
      const testNameX =
        name +
        '-' +
        checkedSubjects +
        '-' +
        Math.floor(Math.random() * 1000000);

      const testName = testNameX;

      const userIdObject = new mongoose.Types.ObjectId(userId);

      // Now, convert it back to a plain string
      const userIdStringPlain = userIdObject.toString();

      //      // Enable this block of code just clear the  answered_by array
      //  console.log('clearing answered_by array');

      await Question.updateMany({}, { $set: { answeredBy: [] } });
      console.log('answered_by array CLEARED');
      //
      //      console.log('  userId= ', userId);

      noofquestions = parseInt(noofquestions);

      const topicsArray = checkedTopics.split(',');
      const difficultyLevelsArray = checkedDifficultyLevels.split(',');
      const subjectsArray = checkedSubjects.split(',');

      //  console.log('ARRAYS' + topicsArray + difficultyLevelsArray + subjectsArray);

      const totalQuestions = await Question.countDocuments({
        topic: { $in: topicsArray },
        difficulty_level: { $in: difficultyLevelsArray },
        subject_name: { $in: subjectsArray }
      });

      if (totalQuestions === 0) {
        return res.json([]);
      }

      const actualNoOfQuestions = Math.min(
        parseInt(noofquestions),
        totalQuestions > 0 ? totalQuestions : 1
      );

      console.log('actualNoOfQuestions: ', actualNoOfQuestions);
      //
      const questions = await Question.find({
        topic: { $in: topicsArray },
        difficulty_level: { $in: difficultyLevelsArray },
        subject_name: { $in: subjectsArray }
      }).limit(parseInt(actualNoOfQuestions));

      //  console.log('questions SELECTED: ', questions);
      let testArray = [];

      // Update the "answeredBy" array by pushing the userId
      for (const question of questions) {
        if (!question.answeredBy.includes(userId)) {
          const filter = { _id: question._id };
          const update = {
            $push: {
              answeredBy: userId
            }
          };
          Question.updateOne(filter, update)
            .then((result) => {
              console.log(
                `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`
              );
            })
            .catch((err) => {
              console.error(`Error updating document: ${err}`);
            });
          testArray.push(question);

          //  console.log('answeredBy updated with ', question._id, userId);
        } else {
          console.log('IT SEEMS QUESTION ALREADY DONE BY CANDIDATE!!!');
        }
      }

      console.log('testArray.length===', testArray.length);
      //  console.log('about to createTest', questions, testName);

      //Create test questions here
      if (testArray.length == 0) {
        console.log('Test already tackled by candidate. EMPTY TESTS');
        return res.json([]);
      }
      if (testArray.length > 0) {
        const currentDate = new Date();
        const testQuestions = []; // Initialize an array to store the test questions

        // Iterate through the fetched questions and insert into TestQuestion schema
        for (const question of questions) {
          const testQuestionData = {
            test_name: testName, // Set the test_name as needed
            questionId: question._id,
            question: question.question,
            answer: question.answer || 'answer later',
            difficulty_level: question.difficulty_level,
            subject_name: question.subject_name,
            topic: question.topic,
            question_year: currentDate.getFullYear(),
            user_answer: question.user_answer
          };

          // Create a new TestQuestion document and save it
          const testQuestion = new TestQuestion(testQuestionData);
          await testQuestion.save();

          // Push the newly created test question to the array
          testQuestions.push(testQuestion);
        }
        if (testQuestions.length == 0) {
          return res.json([]);
        }
        console.log('SUCCESS, SUCCESS, SUCCESS: ', testName);

        return res.json(testQuestions);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while fetching questions' });
    }
  }
);

const createTests = async (questionData, test_name) => {
  console.log('in createTests = async (questionData, test_name)');

  for (const question of questionData) {
    console.log('test_name:::: ', test_name);
  }

  try {
    if (questionData.length === 0) {
      return [];
    }

    const currentDate = new Date();
    const testQuestions = []; // Initialize an array to store the test questions

    // Iterate through the fetched questions and insert into TestQuestion schema
    for (const question of questionData) {
      const testQuestionData = {
        test_name: test_name, // Set the test_name as needed
        questionId: question._id,
        question: question.question,
        answer: question.answer,
        difficulty_level: question.difficulty_level,
        subject_name: question.subject_name,
        topic: question.topic,
        question_year: currentDate.getFullYear(),
        user_answer: question.user_answer
      };

      // Create a new TestQuestion document and save it
      const testQuestion = new TestQuestion(testQuestionData);
      await testQuestion.save();

      // Push the newly created test question to the array
      testQuestions.push(testQuestion);
    }

    //console.log('Tests created== ', test_name);
    return testQuestions; // Return the array of test questions after processing all questions
  } catch (error) {
    return [];
  }
};

router.get(
  '/:checkedTopics/:checkedSubjects/:userId/:noofquestions',

  async (req, res) => {
    console.log(
      'in router.get(/:checkedTopics/:checkedSubjects/:userId/:noofquestions'
    );

    try {
      const { checkedTopics, checkedSubjects, userId, noofquestions } =
        req.params;

      console.log(
        'req.params: ',
        checkedTopics,
        checkedSubjects,
        userId,
        noofquestions
      );

      const topicsArray = checkedTopics.split(',');
      const subjectsArray = checkedSubjects.split(',');

      // Enable this block of code just clear the  answered_by array
      //  console.log('clearing answered_by array');
      //  await Question.updateMany({}, { $set: { answeredBy: [] } });
      //  console.log('answered_by array CLEARED');

      console.log('topicsArray, subjectsArray: ', topicsArray, subjectsArray);

      const totalQuestions = await Question.countDocuments({
        topic: { $in: topicsArray },
        subject_name: { $in: subjectsArray },
        answeredBy: { $nin: [userId] }
      });

      const actualNoOfQuestions = Math.min(
        parseInt(noofquestions),
        totalQuestions > 0 ? totalQuestions : 1
      );

      console.log('actualNoOfQuestions: ', actualNoOfQuestions);

      const questions = await Question.find({
        topic: { $in: topicsArray },
        subject_name: { $in: subjectsArray },
        answeredBy: { $nin: [userId] } // Assuming you want to filter by the userId in answeredBy array
      })
        .limit(parseInt(actualNoOfQuestions)) // Limit the number of questions returned
        .populate('answeredBy', 'username'); // Populate the user details in answeredBy array

      // Update answeredBy array for each question
      for (const question of questions) {
        question.answeredBy.push(userId);
        await question.save();
      }

      console.log('questions selected: ', questions);

      return res.json(questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while fetching questions' });
    }
  }
);

//app.get('/question/:checkedDifficultylevels/:userId', (req, res) => {
router.get(
  '/:checkedDifficultyLevels/:checkedSubjects/:userId/:noofquestions',

  async (req, res) => {
    try {
      const {
        checkedDifficultyLevels,
        checkedSubjects,
        userId,
        noofquestions
      } = req.params;

      const difficultyLevelsArray = checkedDifficultyLevels.split(',');
      const subjectsArray = checkedSubjects.split(',');

      const totalQuestions = await Question.countDocuments({
        difficulty_level: { $in: difficultyLevelsArray },
        subject_name: { $in: subjectsArray },
        answeredBy: { $nin: [userId] }
      });

      const actualNoOfQuestions = Math.min(
        parseInt(noofquestions),
        totalQuestions > 0 ? totalQuestions : 1
      );

      const questions = await Question.find({
        difficulty_level: { $in: difficultyLevelsArray },
        subject_name: { $in: subjectsArray },
        answeredBy: { $nin: [userId] } // Assuming you want to filter by the userId in answeredBy array
      })
        .limit(parseInt(actualNoOfQuestions)) // Limit the number of questions returned
        .populate('answeredBy', 'username'); // Populate the user details in answeredBy array

      // Update answeredBy array for each question
      for (const question of questions) {
        question.answeredBy.push(userId);
        await question.save();
      }

      return res.json(questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while fetching questions' });
    }
  }
);

router.get('/:checkedSubjects/:userId/:noofquestions', async (req, res) => {
  try {
    const { checkedSubjects, userId, noofquestions } = req.params;

    const subjectsArray = checkedSubjects.split(',');

    const totalQuestions = await Question.countDocuments({
      subject_name: { $in: subjectsArray },
      answeredBy: { $nin: [userId] }
    });

    const actualNoOfQuestions = Math.min(
      parseInt(noofquestions),
      totalQuestions > 0 ? totalQuestions : 1
    );

    const questions = await Question.find({
      difficulty_level: { $in: difficultyLevelsArray },
      subject_name: { $in: subjectsArray },
      answeredBy: { $nin: [userId] }
    })
      .limit(actualNoOfQuestions)
      .populate('answeredBy', 'username');

    for (const question of questions) {
      question.answeredBy.push(userId);
      await question.save();
    }

    return res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching questions' });
  }
});

// @route  POST api/question
// @desc   Post question
// @access Public
router.post(
  '/',
  [
    check('question', 'Question is required').not().isEmpty(),
    check('answer', 'Answer is required').not().isEmpty(),
    check('difficulty_level', 'Difficulty level is required').not().isEmpty(),
    check('subject_name', 'Subject is required').not().isEmpty(),
    check('topic', 'Topic is required').not().isEmpty(),
    check('question_year', 'Question year is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //    console.log('in router.post question', req.body);
    //
    //    console.log('in question post api end point');

    const {
      question,
      answer,
      difficulty_level,
      subject_name,
      topic,
      question_year
    } = req.body;

    // Build question object question_no
    const questionFields = {};

    //questionFields.question_no = uuid();
    if (question) questionFields.question = question;
    if (answer) questionFields.answer = answer;
    if (difficulty_level) questionFields.difficulty_level = difficulty_level;
    if (subject_name) questionFields.subject_name = subject_name;
    if (topic) questionFields.topic = topic;
    if (question_year) questionFields.question_year = question_year;
    questionFields.question_stats = 0;

    try {
      // Create new question
      let questionItem = new Question(questionFields);

      await questionItem.save();
      return res.json(questionItem);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  PUT api/question
// @desc   Put question
// @access Public
router.put(
  '/:id',
  [
    (check('question', 'Question is required').not().isEmpty(),
    check('answer', 'Answer is required').not().isEmpty(),
    check('difficulty_level', 'Difficulty level is required').not().isEmpty(),
    check('subject', 'Subject is required').not().isEmpty(),
    check('topic', 'Topic is required').not().isEmpty(),
    check('question_year', 'Question year is required').not().isEmpty())
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in question put api end point');

    const {
      _id,
      question,
      answer,
      difficulty_level,
      subject_name,
      topic,
      question_year
    } = req.body;

    // Build question object question_no
    const questionFields = {};

    if (_id) questionFields._id = _id;
    if (question) questionFields.question = question;
    if (answer) questionFields.answer = answer;
    if (difficulty_level) questionFields.difficulty_level = difficulty_level;
    if (subject_name) questionFields.subject_name = subject_name;
    if (topic) questionFields.topic = topic;
    if (question_year) questionFields.question_year = question_year;

    try {
      let questionItem = await Question.findOne({
        _id: req.params.id
      });

      if (questionItem) {
        // Update old question
        questionItem = await Question.findOneAndUpdate(
          { _id: req.params.id },
          { $set: questionFields },
          { new: true }
        );
        return res.json(questionItem);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  DELETE api/question
// @desc   Delete question
// @access Public
router.delete('/:id', async (req, res) => {
  console.log('in question delete', req.params.id);

  try {
    // Remove question
    await Question.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Question deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/question /questions/question
// @desc   Get question
// @access Public
// Define a route to handle the findQuestion request
router.get('/:question', async (req, res) => {
  //console.log('in get(/:question....) ', req.params.question);

  try {
    // Assuming the 'question' parameter is passed in the query string
    //

    // Mock an API call to the database (replace this with your actual database query)
    const foundQuestion = await Question.findOne({
      question: req.params.question
    });

    //if (foundQuestion){
    //    console.log('foundQuestion===', foundQuestion);
    //}
    if (!foundQuestion) {
      return res.status(404).json({ msg: 'Question not found' });
    }

    return res.json(foundQuestion);
  } catch (err) {
    //console.error('Error==========:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Route to handle user answers
router.post('/answer', async (req, res) => {
  const { userId, questionId } = req.body;

  try {
    // Find the question by its ID
    const question = await Question.findById(questionId);

    // Check if the user has already answered the question
    if (question.answeredBy.includes(userId)) {
      return res
        .status(400)
        .json({ message: 'You have already answered this question.' });
    }

    // Update the "answeredBy" field with the user's ID
    question.answeredBy.push(userId);
    await question.save();

    return res.status(200).json({ message: 'Answer recorded successfully.' });
  } catch (error) {
    console.error('Error recording answer:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

router.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Assuming your Excel columns match the schema fields
    for (const row of data) {
      const question = new Question({
        question: row.question,
        answer: row.answer,
        difficulty_level: row.difficulty_level,
        subject_name: row.subject_name,
        topic: row.topic,
        question_year: row.question_year,
        question_stats: row.question_stats,
        answer_flag: row.answer_flag,
        user_answer: row.user_answer
      });
      await question.save();
    }

    return res
      .status(200)
      .json({ message: 'Excel data uploaded successfully' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'An error occurred while uploading the Excel file' });
  }
});

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export default router;
