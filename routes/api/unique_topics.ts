/* eslint-disable semi */
import express, { Request, Response } from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Question from '../../models/Question.js';

// @route  POST api/topic
// @desc   find all topic
// @access Public
// Define a GET endpoint to fetch unique topics
router.get('/', async (req: Request, res: Response) => {
  //  console.log('/unique_topics backend api');

  try {
    const uniqueTopics = await Question.distinct('topic');

    //console.log('uniqueTopics:::', uniqueTopics);

    res.json(uniqueTopics);
  } catch (error) {
    console.error('Error fetching unique topics:', error);

    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
