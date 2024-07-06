/* eslint-disable semi */
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const router = express.Router();
import { check, validationResult } from 'express-validator';

import TestQuestion from '../../models/test_question.js';
import User from '../../models/User.js';
import Profile from '../../models/Profile.js';

import Question from '../../models/Question.js';

// @route  GET api/
// @access Public
router.get('/unmarked/:randnum', async (req: Request, res: Response) => {
  console.log("in tests router.get('/unmarked', ");

  try {
    //const unmarkedTests = await TestQuestion.aggregate([
    //  { $match: { answer_flag: { $nin: ['true', 'false'] } } },
    //  { $group: { _id: null, documents: { $push: '$$ROOT' } } },  unmarkedTests[0].test_names
    //  { $project: { _id: 0, documents: 1 } }
    //]);

    //const unmarkedTests = await TestQuestion.distinct('answer_flag', {
    //  answer_flag: { $in: ['', ' '] }
    //});

    const uniqueAnswerFlags = await TestQuestion.distinct('answer_flag', {
      answer_flag: { $in: ['', ' '] }
    });

    // Use find to get unique documents based on answer_flag
    const unmarkedTests = await TestQuestion.find({
      answer_flag: { $in: uniqueAnswerFlags }
    });

    console.log('unmarked == ', unmarkedTests);

    if (unmarkedTests.length > 0) {
      return res.send(unmarkedTests);
    } else {
      return res.status(400).json({ msg: 'There is no unmarked test!' });
    }
  } catch (err: any) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

async function getUserById(userId: string) {
  try {
    // Find the user by their _id (assuming userId is the user's ObjectId)
    //const user = await User.findById(userId);
    const user = await User.findById(userId);

    if (user){
       console.log('user: ', user.name);
    }
   
    if (!user) {
      return null; // User not found
    }

    // Return the user object
    return user.name;
  } catch (error) {
    console.error('Error retrieving user:', error);
    throw error; // You can handle the error in the calling code
  }
}
async function getUserId(testName: string) {
  // Use the split method to split the string by the hyphen character
  const parts = testName.split('-');

  // The part before the hyphen is at index 0
  const extractedPart = parts[0];
  const tempUser = await User.findOne({ name: extractedPart });

  if (tempUser) {
    return tempUser._id;
  }

  return '';
}

// async function getTestNamesContainingString(searchString) {
//   try {
//     // Use a regular expression to find test names that include the searchString
//     const testNames = await TestQuestion.distinct('test_name', {
//       test_name: { $regex: searchString, $options: 'i' } // 'i' for case-insensitive search
//     });

//     console.log('testNames== ', testNames);

//     return testNames;
//   } catch (error) {
//     console.error('Error retrieving test names:', error);
//     throw error; // You can handle the error in the calling code
//   }
// }

async function getOnlyName(testName: string) {
  // Use the split method to split the string by the hyphen character
  const parts = await testName.split('-');

  // The part before the hyphen is at index 0
  const extractedPart = parts[0];
  return extractedPart;
}

export default router;
