import express from 'express';
import TestQuestion from '../../models/test_question.js';
import User from '../../models/User.js';
import Profile from '../../models/Profile.js';
import Question from '../../models/Question.js';
const router = express.Router();

// Define a route that accepts a userId parameter to generate statistics for a candidate tests
router.get('/:testName', async (req, res) => {
  try {
    const testName = req.params.testName;
    console.log('in scoreCandidate router.get(/:testName', testName);

    console.log('testName==', testName);

    // 1. Extract all topics corresponding to the testName parameter ------
    const questionCount = await Question.countDocuments({});

    console.log('questionCount== ', questionCount);

    //  const tempUserId = getUserId(testName);
    const tempUserId = await User.findOne({ name: testName });

    //console.log('tempUserId._id=== ', tempUserId._id);

    const topicCountAnsweredBy = await Question.countDocuments({
      answeredBy: { $exists: true, $ne: [], $in: [tempUserId._id] }
    });

    console.log('topicCountAnsweredBy== ', topicCountAnsweredBy);

    return res.json([questionCount, topicCountAnsweredBy]);
  } catch (error) {
    console.error(error);
    return res.json([]);
    //res.status(500).json({ error: 'Internal Server Error' });
  }
});

// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:testName', async (req, res) => {
  console.log('in test delete /:testName', req.params.testName);

  try {
    const partialTestName = req.params.testName;
    const userId = getUserId(partialTestName);

    // Create a regex pattern for the partialTestName as a wildcard
    const regexPattern = new RegExp(partialTestName, 'i'); // 'i' for case-insensitive

    // Use the regex pattern to delete matching documents
    await TestQuestion.deleteMany({ test_name: { $regex: regexPattern } });

    console.log('clearing answered_by array');

    await Question.updateMany(
      { answeredBy: userId }, // Filter by the userId
      { $set: { answeredBy: [] } } // Set the "answeredBy" field to an empty array
    );
    console.log('answered_by array CLEARED');

    res.json({ msg: 'All tests of candidate deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

async function getUserId(testName) {
  // Use the split method to split the string by the hyphen character
  const parts = await testName.split('-');

  // The part before the hyphen is at index 0
  const extractedPart = parts[0];
  const tempUser = User.findOne({ name: extractedPart });

  if (tempUser) {
    return tempUser._id;
  }

  return '';
}

export default router;
