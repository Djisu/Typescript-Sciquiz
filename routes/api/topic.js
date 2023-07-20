/* eslint-disable semi */
const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Topic = require('../../models/Topic');

// @route  POST api/topic
// @desc   Test route
// @access Public
router.get('/', (req, res) => {
  console.log(req.body);
  res.send('Topic route');
});

// @route  POST api/topic
// @desc   Post topic
// @access Public
router.post(
  '/',
  [check('topic', 'Topic is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { topic, subject_name } = req.body;

    console.log('topic:', topic);

    // Build topic object
    const topicFields = {};

    if (topic) topicFields.topic = topic;
    if (subject_name) topicFields.subject_name = subject_name;

    try {
      let topicItems = await Topic.findOne({
        topic: topic
      });

      if (topicItems) {
        // Update old topicItems
        topicItems = await Topic.findOneAndUpdate(
          { topic: req.body.topic },
          { $set: topicFields },
          { new: true }
        );
        return res.json(topicItems);
      }

      // Create new topic
      topicItems = new Topic(topicFields);

      await topicItems.save();
      return res.json(topicItems);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  DELETE api/topic
// @desc   Delete topic
// @access Public
router.delete('/:id', async (req, res) => {
  console.log('in topic delete', req.params.id);

  try {
    // Remove question
    await Topic.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Topic deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
