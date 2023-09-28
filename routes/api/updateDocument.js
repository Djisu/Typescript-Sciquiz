/* eslint-disable semi */
import express from 'express';
import mongoose from 'mongoose';
import Question from '../../models/Question.js';
import TestQuestion from '../../models/test_question.js';

const router = express.Router();

router.put('/', async (req, res) => {
  const { user_answer, id, test_name } = req.body;

  try {
    // Find the question based on both test_name and id
    const updatedQuestion = await TestQuestion.findOneAndUpdate(
      { test_name, _id: id },
      { $set: { user_answer } },
      { new: true, upsert: true }
    ).exec();

    if (!updatedQuestion) {
      // If no question was found, you can handle it here
      return res.status(404).send('Question not found');
    }

    return res.status(200).send('Answer posted successfully');
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

//router.get('/', (req, res) => {
//  console.log('updateDocument works');
//});
//
//// Define a route to handle the PUT request for updating the document.
//router.put('/', async (req, res) => {
//  console.log('in /api/updateDocument');
//
//  const { user_answer, id } = req.body;
//  console.log('user_answer:', user_answer);
//
//  try {
//    // Use $set and upsert to update or initialize the user_answer field
//    const updatedQuestion = await TestQuestion.findByIdAndUpdate(
//      id,
//      { $set: { user_answer } },
//      { new: true, upsert: true }
//    ).exec();
//
//    console.log(updatedQuestion);
//    return res.status(200).send('Answer posted successfully');
//  } catch (err) {
//    console.error(err);
//    return res.status(500).send('Internal Server Error');
//  }
//});

export default router;
