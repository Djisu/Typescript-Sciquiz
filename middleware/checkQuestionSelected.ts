// middleware/checkQuestionSelected.js
import mongoose from 'mongoose'
import express, { Request, Response, NextFunction } from 'express';
const Question = mongoose.model('Question');

const checkQuestionSelected = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.query.userId; // Assuming userId is sent as a query parameter

  try {
    // Check if the user has already selected a question
    const selectedQuestion = await Question.findOne({
      _id: req.params.questionId, // Assuming questionId is a URL parameter
      answeredBy: userId
    });

    if (selectedQuestion) {
      return res
        .status(400)
        .json({ message: 'Question already selected by the user' });
    }

    // If the question is not selected by the user, move to the next middleware
    next();
  } catch (error) {
    console.error('Error checking selected question:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while checking selected question' });
  }
};

module.exports = checkQuestionSelected;
