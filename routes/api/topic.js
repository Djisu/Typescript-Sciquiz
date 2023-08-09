/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Topic from '../../models/Topic.js';

// @route  POST api/topic
// @desc   find all topic
// @access Public
router.get('/',  async (req, res) => {
    console.log("in topic router.get('/', ");
  try {
    //const topic = await Topic.find({}, { topic: 1, _id: 1 });

    const topic = await Topic.find({});

    res.send(topic);
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

// @route  POST api/topic
// @desc   find all topic
// @access Public
// Define a GET endpoint to fetch unique topics
router.get('/unique-topics', async (req, res) => {

    console.log('/unique-topics backend api');

  try {
    const uniqueTopics = await Topic.distinct('topic');

console.log('after uniqueTopics:', uniqueTopics);

    res.json( uniqueTopics );
  } catch (error) {
    console.error('Error fetching unique topics:', error);

    res.status(500).json({ error: 'Internal server error' });
  }
});


// @route  POST api/topic
// @desc   Post topic
// @access Public
router.post(
  '/',
  [check('topic', 'Topic is required').not().isEmpty()],
  [check('subject_name', 'Subject is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { topic, subject_name } = req.body;

    console.log('in api topic:', topic);

    // Build topic object
    const topicFields = {};

    if (topic) topicFields.topic = topic;
    if (subject_name) topicFields.subject_name = subject_name;

    try {
      // Create new topic
      let topicItems = new Topic(topicFields);

      await topicItems.save();
      return res.json(topicItems);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  PUT api/topic
// @desc   put topic
// @access Public
router.put(
  '/',
  [check('topic', 'Topic is required').not().isEmpty()],
  [check('subject_name', 'Subject is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { topic, subject_name } = req.body;

    console.log('topic:', topic, subject_name);

    // Build topic object
    const topicFields = {};

    if (topic) topicFields.topic = topic;
    if (subject_name) topicFields.subject_name = subject_name;

    try {
      let topicItems = await Topic.findOne({
        $and: [{ topic: topic }, { subject_name: subject_name }]
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
    await Topic.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Topic deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
