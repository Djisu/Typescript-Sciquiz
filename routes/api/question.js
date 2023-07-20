/* eslint-disable semi */
const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Question = require('../../models/Question');

// @route  POST api/question
// @desc   Test route
// @access Public
router.get('/', (req, res) => {
  console.log(req.body);
  res.send('question route');
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
    check('subject', 'Subject is required').not().isEmpty(),
    check('topic', 'Topic is required').not().isEmpty(),
    check('question_year', 'Question year is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in question post api end point');

    const {
      //  question_no,
      question,
      answer,
      difficulty_level,
      subject_name,
      topic,
      question_year,
      question_stats
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
    if (question_stats) questionFields.question_stats = question_stats;

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
    await Question.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Question deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
module.exports = router;
