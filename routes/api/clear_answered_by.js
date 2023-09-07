/* eslint-disable semi */
import express from 'express';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Question from '../../models/Question.js';

// Define a route to clear the answeredBy array for all questions
router.post('/', async (req, res) => {
  try {
    console.log('in /clear_answered_by');

    // Update all questions to remove all elements from answeredBy array
    await Question.updateMany({}, { $set: { answeredBy: [] } });

    res.json({ message: 'answeredBy arrays cleared for all questions' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
