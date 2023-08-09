/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Question from '../../models/Question.js';

// @route  POST api/uniquedifficultylevels
// @desc   find all uniquedifficultylevels
// @access Public
// Define a GET endpoint to fetch unique uniquedifficultylevelss
router.get('/', async (req, res) => {
//  console.log('/unique_difficultylevel backend api');

  try {
    const uniquedifficultylevels = await Question.distinct('difficulty_level');

    //console.log('uniquedifficultylevels:::', uniquedifficultylevels);

    res.json(uniquedifficultylevels);
  } catch (error) {
    console.error('Error fetching unique difficulty levels:', error);

    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
