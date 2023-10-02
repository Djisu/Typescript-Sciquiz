import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import TestQuestion from '../../models/test_question.js';

// Define a route that accepts a userId parameter to generate statistics for a candidate tests
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('in router.get(/:userId', userId);

    // 1. Extract all topics corresponding to the userId parameter
    const topics = await TestQuestion.distinct('topic', {
      answeredBy: userId
    });

    console.log('topics== ', topics);

    const topicInfo = [];

    // 2. Count records for each topic
    for (const topic of topics) {
      const topicCount = await TestQuestion.countDocuments({
        topic,
        answeredBy: userId
      });

      console.log('topicCount== ', topicCount);

      // 3. Count records with answer_flag as "true" for each topic
      const topicCountWithFlagTrue = await TestQuestion.countDocuments({
        topic,
        answer_flag: 'true',
        answeredBy: userId
      });

      console.log('topicCountWithFlagTrue== ', topicCountWithFlagTrue);

      // 4. Count records with answeredBy array containing the user
      const topicCountAnsweredBy = await TestQuestion.countDocuments({
        topic,
        answeredBy: userId
      });

      console.log('topicCountAnsweredBy== ', topicCountAnsweredBy);

      // 5. Count records with answer_flag as "false" for each topic
      const topicCountFlagFalse = await TestQuestion.countDocuments({
        topic,
        answer_flag: 'false',
        answeredBy: userId
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
