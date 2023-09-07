/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Question from '../../models/Question.js';

// @route  POST api/topic
// @desc   find all topic
// @access Public
// Define a GET endpoint to fetch unique subjects
router.get('/', async (req, res) => {
  //  console.log('/unique_subjects backend api');

  try {
    const uniqueSubjects = await Question.distinct('subject_name');

    //console.log('uniqueSubjects:::', uniqueSubjects);

    res.json(uniqueSubjects);
  } catch (error) {
    console.error('Error fetching unique sbjects:', error);

    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
