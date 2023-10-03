import express from 'express';
const router = express.Router();

import TestQuestion from '../../models/test_question.js';

// Define a route that accepts a userId parameter to generate statistics for a candidate tests
router.get('/:testName', async (req, res) => {
  try {
    //   var searchString = 'Jesu Djoleto-Biology';
    //   db.testquestions.find({ test_name: { $regex: new RegExp(testName) } });

    const testName = req.params.testName;
    console.log('in router.get(/:testName', testName);

    console.log('testName==', testName);

    // 1. Extract all topics corresponding to the testName parameter ------
    const topics = await TestQuestion.distinct('topic', {
      test_name: { $regex: new RegExp(testName) }
    });

    console.log('topics== ', topics);

    const topicInfo = [];

    // 2. Count records for each topic -------await
    for (const topic of topics) {
      const topicCount = await TestQuestion.countDocuments({
        topic,
        test_name: { $regex: new RegExp(testName) }
      });

      console.log('topicCount== ', topicCount);

      // 3. Count records with answer_flag as "true" for each topic
      const topicCountWithFlagTrue = await TestQuestion.countDocuments({
        topic,
        answer_flag: 'true',
        test_name: { $regex: new RegExp(testName) }
      });

      console.log('topicCountWithFlagTrue== ', topicCountWithFlagTrue);

      // 4. Count records with answeredBy array containing the user
      const topicCountAnsweredBy = await TestQuestion.countDocuments({
        topic,
        test_name: { $regex: new RegExp(testName) }
      });

      console.log('topicCountAnsweredBy== ', topicCountAnsweredBy);

      // 5. Count records with answer_flag as "false" for each  topic
      const topicCountFlagFalse = await TestQuestion.countDocuments({
        topic,
        answer_flag: 'false',
        test_name: { $regex: new RegExp(testName) }
      });

      console.log('topicCountFlagFalse== ', topicCountFlagFalse);

      topicInfo.push({
        topic,
        topicCount: topicCount,
        correct: topicCountWithFlagTrue,
        used: topicCountAnsweredBy
      });
    }

    console.log('topicInfo== ', topicInfo);

    return res.json(topicInfo);
  } catch (error) {
    console.error(error);
    return res.json([]);
    //res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
