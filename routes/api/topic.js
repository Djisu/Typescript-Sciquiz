/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Topic from '../../models/Topic.js';
import Question from '../../models/Question.js';
import TestQuestion from '../../models/test_question.js';


// // Function to count the remaining topics based on subjectName and topic
// function countRemainingTopics(subjectName, topic) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const topicCounts = {};

//       console.log('in countRemainingTopics')

//       const parentCount = await Question.countDocuments({
//         subject_name: subjectName,
//         topic: topic
//       });

//       console.log("parentCount is ", parentCount);

//       let remainingTopics = [];

//         if (TestQuestion){     
//           const questions = await TestQuestion.find({ subject_name: subjectName });

//           questions.forEach((question) => {
//             const { topic } = question;

//             topicCounts[topic] = (topicCounts[topic] || 0) + 1;
//           });

//           console.log("topicCounts is: ", topicCounts)

//           Object.keys(topicCounts).forEach((key) => {
//             const count = parentCount - (topicCounts[key] || 0); 
//             remainingTopics.push({ topic: key, count });
//           });

//           console.log('remainingTopics:: ', remainingTopics)
//         } else{
//           Object.keys(parentCount).forEach((key) => {
//             const count = parentCount[key] 
//             remainingTopics.push({ topic: key, count });
//           });
//         }


//       resolve(remainingTopics);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

async function getRemainingTopicCounts(subjectName, topic) {
  try {
    const topicCounts = {};

    // Get the count of topics in the Question database
    const questionCounts = await Question.aggregate([
      { $match: { subject_name: subjectName, topic: topic } },
      { $group: { _id: '$topic', count: { $sum: 1 } } }
    ]);

    questionCounts.forEach((count) => {
      topicCounts[count._id] = count.count;
    });

    // Get the count of topics in the TestQuestion database
    const testQuestionCounts = await TestQuestion.aggregate([
      { $match: { subject_name: subjectName, topic: topic } },
      { $group: { _id: '$topic', count: { $sum: 1 } } }
    ]);

    testQuestionCounts.forEach((count) => {
      const topic = count._id;
      const testQuestionCount = count.count;
      topicCounts[topic] = (topicCounts[topic] || 0) - testQuestionCount;
    });

    const remainingTopics = Object.entries(topicCounts).map(([topic, count]) => ({
      topic,
      count
    }));

    if (remainingTopics.length === 0) {
      console.log('No remaining topics.');
    } else {
      console.log('Remaining Topics:', remainingTopics);
    }

    return remainingTopics;
  } catch (err) {
    throw err;
  }
}


// Route handler
// Route handler
router.get('/:subjectName', async (req, res) => {
  console.log('router.get(/:subjectName');

  const { subjectName } = req.params;

  try {
    const questions = await Question.find({ subject_name: subjectName });

    if (questions.length === 0) {
      return res.status(404).json({
        message: 'No topics found for the given subject_name.'
      });
    }

    const topicCounts = {};

    questions.forEach((question) => {
      const { topic } = question;
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });

    const topicsWithCounts = Object.keys(topicCounts).map((topic) => ({
      topic: topic,
      count: topicCounts[topic]
    }));

    topicsWithCounts.sort((a, b) => a.topic.localeCompare(b.topic));

    // Array to store remaining topics
    const remainingTopics = [];

    for (const { topic, count } of topicsWithCounts) {
      // Call the getRemainingTopicCounts function with subjectName and topic
      const remainingCount = await getRemainingTopicCounts(subjectName, topic);
      remainingTopics.push(...remainingCount);      
    }
 console.log('before returning remainingTopics:', remainingTopics);
  

    res.json(remainingTopics);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// // Route handler
// router.get('/:subjectName', async (req, res) => {

//   console.log('router.get(/:subjectName')

//   const {subjectName} = req.params;

//   try {
//     const questions = await Question.find({ subject_name: subjectName });// experiment to be reversed

//     if (questions.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No topics found for the given subject_name.' });
//     }

//    const remainingTopics = getRemainingTopicCounts(subjectName, topic)

//     console.log('remainingTopics:', remainingTopics)

//     res.json(remainingTopics);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.get('/:subjectName', async (req, res) => {
//   const subject_name = req.params.subjectName;

//   try {
//     const questions = await Question.find({ subject_name });

//     if (questions.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No topics found for the given subject_name.' });
//     }

//     // Count the occurrences of each topic
//     const topicCounts = {};

//     questions.forEach((question) => {
//       const {topic} = question;
      
//       topicCounts[topic] = (topicCounts[topic] || 0) + 1;
//     });

//     // Convert topicCounts into an array of objects
//     const topicsWithCounts = Object.keys(topicCounts).map((topic) => ({
//       topic: topic,
//       count: topicCounts[topic]
//     }));

//     // Sort the array of objects by topic
//     topicsWithCounts.sort((a, b) => a.topic.localeCompare(b.topic));

//     res.json(topicsWithCounts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// @route  POST api/topic/:topic
// @desc   find all topic
// @access Public
//router.get('/:subjectName', async (req, res) => {
//  const subject_name = req.params.subjectName;
//
//  //  console.log('In subjectName router.get("/:subjectName")', subject_name);
//
//  try {
//    const questions = await Question.find({ subject_name });
//
//    if (questions.length === 0) {
//      return res
//        .status(404)
//        .json({ message: 'No topics found for the given subject_name.' });
//    }
//
//    // Use Set to store distinct topic names
//    const distinctTopics = new Set(questions.map((question) => question.topic));
//
//    // Convert the Set to an array and sort it in ascending order
//    const sortedDistinctTopics = Array.from(distinctTopics).sort();
//
//    //console.log('Fetched Question topics:', Array.from(distinctTopics));
//
//    res.json(Array.from(distinctTopics));
//  } catch (err) {
//    console.error(err);
//    res.status(500).json({ message: 'Server error' });
//  }
//});

// @route  POST api/topic
// @desc   find all topic
// @access Public
// Define a GET endpoint to fetch unique topics
router.get('/unique-topics', async (req, res) => {
  console.log('/unique-topics backend api');

  try {
    const uniqueTopics = await Topic.distinct('topic');

    console.log('after uniqueTopics:', uniqueTopics);

    res.json(uniqueTopics);
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
