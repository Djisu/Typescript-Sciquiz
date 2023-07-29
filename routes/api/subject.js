/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Subject from '../../models/Subject.js';

// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/',  async (req, res) => {
    console.log("in subject router.get('/', ");
  try {
    const subject = await Subject.find({}, { subject_name: 1, _id: 1 });

    res.send(subject);
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

// @route  POST api/subject
// @desc   Post subject
// @access Public
router.post(
  '/',
  [check('subject_name', 'Subject is required').not().isEmpty()],
  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { subject_name } = req.body;

    // Build profile object
    const subjectFields = {};

    if (subject_name) subjectFields.subject_name = subject_name;

    try {
      let subject = await Subject.findOne({
        subject_name: subject_name
      });

      if (subject) {
        // Update old difficult level
        subject = await Subject.findOneAndUpdate(
          { subject_name: req.body.subject_name },
          { $set: subjectFields },
          { new: true }
        );
        return res.json(subject);
      }

      // Create new difficult level
      subject = new Subject(subjectFields);

      await subject.save();
      return res.json(subject);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  DELETE api/subject
// @desc   Delete subject
// @access Public
router.delete('/:id', async (req, res) => {
  console.log('in subject delete', req.params.id);

  try {
    // Remove question
    await Subject.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Subject deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
