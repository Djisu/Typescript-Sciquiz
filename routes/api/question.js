/* eslint-disable semi */
import express from 'express';
const router = express.Router();

//import { check, validationResult } from 'express-validator';
import { check, validationResult } from 'express-validator';

import User from '../../models/User.js';
import Question from '../../models/Question.js';
import questionData from '../../questionsData.js';

//import checkQuestionSelected from '../../middleware/checkQuestionSelected';

// Route for seeding data
router.get('/seed', async (req, res) => {
  //  const client = new MongoClient(url);

  try {
    //await client.connect();
    //const db = client.db(dbName);
    //const collection = db.collection(collectionName);

    // Insert the data into the collection
    const result = await Question.insertMany(questionData);
    console.log(`${result.insertedCount} documents inserted.`);

    res.json({ message: `${result.insertedCount} documents inserted.` });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred while seeding data.' });
  } finally {
    console.log(err.message);

    res.status(500).send('Server Error');
  }
});

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

//app.get('/question/:checkedTopics/:checkedDifficultylevels/:userId', (req, res) => {
router.get(
  '/:checkedTopics/:checkedDifficultyLevels/:userId',
  async (req, res) => {
    console.log(
      'IN router.get(/question/:checkedTopics/:checkedDifficultyLevels/:userId'
    );

    const checkedTopics = req.params.checkedTopics.split(',');
    const checkedDifficultyLevels =
      req.params.checkedDifficultyLevels.split(',');

    const userid = req.params.userId;

    try {
      const foundTopics = await Question.find({
        topic: { $in: checkedTopics }
      }).exec();

      //  console.log('foundTopics==', foundTopics);

      const foundDifficultyLevels = await Question.find({
        topic: { $in: checkedDifficultyLevels }
      }).exec();

      //  console.log('foundDifficultyLevels==', foundDifficultyLevels);

      //   combine the two arrays: foundTopics and foundDifficultyLevels
      const combinedArray = [...foundTopics, ...foundDifficultyLevels];

      console.log('combinedArray::', combinedArray);

      let questionOutput = [];

      //Test: making answeredby empty
      combinedArray.map((question) => {
        question.answeredBy.length = 0;
        console.log(' question.answeredBy.length = 0;', question.answeredBy);
      });

      //
      //      // Check if the user has already answered the question
      //      combinedArray.map((question) => {
      //        if (!question.answeredBy.includes(userid)) {
      //          //  console.log('Not in answeredBy');
      //          question.answeredBy.push(userid);
      //          question.save();
      //
      //          questionOutput.push(question);
      //        }
      //      });

      return res.json(combinedArray);
    } catch (error) {
      console.error('Error fetching question:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while fetching question' });
    }
  }
);

//app.get('/question/:checkedTopics/:checkedDifficultylevels/:userId', (req, res) => {
router.get('/:checkedTopics/:userId', async (req, res) => {
  console.log('IN router.get(/question/:checkedTopics/:userId');

  const checkedTopics = req.params.checkedTopics.split(',');

  const userid = req.params.userId;

  try {
    const foundTopics = await Question.find({
      topic: { $in: checkedTopics }
    }).exec();

    //  console.log('foundTopics==', foundTopics);

    //  console.log('foundDifficultyLevels==', foundDifficultyLevels);

    //   combine the two arrays: foundTopics and foundDifficultyLevels
    const combinedArray = [...foundTopics];

    console.log('combinedArray::', combinedArray);

    let questionOutput = [];

    //Test: making answeredby empty
    combinedArray.map((question) => {
      question.answeredBy.length = 0;
      console.log(' question.answeredBy.length = 0;', question.answeredBy);
    });

    //
    // Check if the user has already answered the question
    //    combinedArray.map((question) => {
    //      if (!question.answeredBy.includes(userid)) {
    //        //  console.log('Not in answeredBy');
    //        question.answeredBy.push(userid);
    //        question.save();
    //
    //        questionOutput.push(question);
    //      }
    //    });

    return res.json(combinedArray);
  } catch (error) {
    console.error('Error fetching question:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching question' });
  }
});

//app.get('/question/:checkedDifficultylevels/:userId', (req, res) => {
router.get('/:checkedDifficultyLevels/:userId', async (req, res) => {
  console.log('IN router.get(/question/:checkedDifficultyLevels/:userId');

  const checkedDifficultyLevels = req.params.checkedDifficultyLevels.split(',');

  const userid = req.params.userId;

  try {
    const foundDifficultyLevels = await Question.find({
      topic: { $in: checkedDifficultyLevels }
    }).exec();

    //  console.log('foundDifficultyLevels==', foundDifficultyLevels);

    //   combine the two arrays: foundTopics and foundDifficultyLevels
    const combinedArray = [...foundDifficultyLevels];

    console.log('combinedArray::', combinedArray);

    let questionOutput = [];

    //Test: making answeredby empty
    combinedArray.map((question) => {
      question.answeredBy.length = 0;
      console.log(' question.answeredBy.length = 0;', question.answeredBy);
    });

    //
    // Check if the user has already answered the question
    //    combinedArray.map((question) => {
    //      if (!question.answeredBy.includes(userid)) {
    //        //  console.log('Not in answeredBy');
    //        question.answeredBy.push(userid);
    //        question.save();
    //
    //        questionOutput.push(question);
    //      }
    //    });

    return res.json(combinedArray);
  } catch (error) {
    console.error('Error fetching question:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching question' });
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

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export default router;
