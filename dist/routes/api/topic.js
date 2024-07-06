"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable semi */
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_validator_1 = require("express-validator");
const Topic_ts_1 = __importDefault(require("../../models/Topic.js"));
const Question_ts_1 = __importDefault(require("../../models/Question.js"));
const test_question_ts_1 = __importDefault(require("../../models/test_question.js"));
// // Function to count the remaining topics based on subjectName and topic
// function countRemainingTopics(subjectName, topic) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const topicCounts = {};
//       console.log('in countRemainingTopics')
//       const parentCount = await Question.countDocuments({
//         subject_name: subjectName,
//         topic: topic
//       });
//       console.log("parentCount is ", parentCount);
//       let remainingTopics = [];
//         if (TestQuestion){     
//           const questions = await TestQuestion.find({ subject_name: subjectName });
//           questions.forEach((question) => {
//             const { topic } = question;
//             topicCounts[topic] = (topicCounts[topic] || 0) + 1;
//           });
//           console.log("topicCounts is: ", topicCounts)
//           Object.keys(topicCounts).forEach((key) => {
//             const count = parentCount - (topicCounts[key] || 0); 
//             remainingTopics.push({ topic: key, count });
//           });
//           console.log('remainingTopics:: ', remainingTopics)
//         } else{
//           Object.keys(parentCount).forEach((key) => {
//             const count = parentCount[key] 
//             remainingTopics.push({ topic: key, count });
//           });
//         }
//       resolve(remainingTopics);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }
function getRemainingTopicCounts(subjectName, topic) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get the count of topics in the Question database
            const questionCounts = yield Question_ts_1.default.aggregate([
                { $match: { subject_name: subjectName, topic: topic } },
                { $group: { _id: '$topic', count: { $sum: 1 } } }
            ]);
            const topicCounts = {};
            questionCounts.forEach((count) => {
                topicCounts[count._id] = count.count;
            });
            // Get the count of topics in the TestQuestion database
            const testQuestionCounts = yield test_question_ts_1.default.aggregate([
                { $match: { subject_name: subjectName, topic: topic } },
                { $group: { _id: '$topic', count: { $sum: 1 } } }
            ]);
            testQuestionCounts.forEach((count) => {
                const topic = count._id;
                const testQuestionCount = count.count;
                topicCounts[topic] = (topicCounts[topic] || 0) - testQuestionCount;
            });
            const remainingTopics = Object.entries(topicCounts).map(([topic, count]) => ({
                topic,
                count
            }));
            // if (remainingTopics.length === 0) {
            //   console.log('No remaining topics.');
            // } else {
            //   console.log('Remaining Topics:', remainingTopics);
            // }
            return remainingTopics;
        }
        catch (err) {
            throw err;
        }
    });
}
// Route handler
// Route handler
router.get('/:subjectName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in backend router.get(/:subjectName');
    const { subjectName } = req.params;
    try {
        const questions = yield Question_ts_1.default.find({ subject_name: subjectName });
        if (questions.length === 0) {
            return res.status(404).json({
                message: 'No topics found for the given subject_name.'
            });
        }
        const topicCounts = {};
        questions.forEach((question) => {
            const { topic } = question;
            topicCounts[topic] = (topicCounts[topic] || 0) + 1;
        });
        const topicsWithCounts = Object.keys(topicCounts).map((topic) => ({
            topic: topic,
            count: topicCounts[topic]
        }));
        topicsWithCounts.sort((a, b) => a.topic.localeCompare(b.topic));
        // Array to store remaining topics
        const remainingTopics = [];
        for (const { topic, count } of topicsWithCounts) {
            // Call the getRemainingTopicCounts function with subjectName and topic
            const remainingCount = yield getRemainingTopicCounts(subjectName, topic);
            remainingTopics.push(...remainingCount);
        }
        //console.log('before returning topic count:', remainingTopics);
        res.json(remainingTopics);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));
// // Route handler
// router.get('/:subjectName', async (req: Request, res: Response) => {
//   console.log('router.get(/:subjectName')
//   const {subjectName} = req.params;
//   try {
//     const questions = await Question.find({ subject_name: subjectName });// experiment to be reversed
//     if (questions.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No topics found for the given subject_name.' });
//     }
//    const remainingTopics = getRemainingTopicCounts(subjectName, topic)
//     console.log('remainingTopics:', remainingTopics)
//     res.json(remainingTopics);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
// router.get('/:subjectName', async (req: Request, res: Response) => {
//   const subject_name = req.params.subjectName;
//   try {
//     const questions = await Question.find({ subject_name });
//     if (questions.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No topics found for the given subject_name.' });
//     }
//     // Count the occurrences of each topic
//     const topicCounts = {};
//     questions.forEach((question) => {
//       const {topic} = question;
//       topicCounts[topic] = (topicCounts[topic] || 0) + 1;
//     });
//     // Convert topicCounts into an array of objects
//     const topicsWithCounts = Object.keys(topicCounts).map((topic) => ({
//       topic: topic,
//       count: topicCounts[topic]
//     }));
//     // Sort the array of objects by topic
//     topicsWithCounts.sort((a, b) => a.topic.localeCompare(b.topic));
//     res.json(topicsWithCounts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
// @route  POST api/topic/:topic
// @desc   find all topic
// @access Public
//router.get('/:subjectName', async (req: Request, res: Response) => {
//  const subject_name = req.params.subjectName;
//
//  //  console.log('In subjectName router.get("/:subjectName")', subject_name);
//
//  try {
//    const questions = await Question.find({ subject_name });
//
//    if (questions.length === 0) {
//      return res
//        .status(404)
//        .json({ message: 'No topics found for the given subject_name.' });
//    }
//
//    // Use Set to store distinct topic names
//    const distinctTopics = new Set(questions.map((question) => question.topic));
//
//    // Convert the Set to an array and sort it in ascending order
//    const sortedDistinctTopics = Array.from(distinctTopics).sort();
//
//    //console.log('Fetched Question topics:', Array.from(distinctTopics));
//
//    res.json(Array.from(distinctTopics));
//  } catch (err) {
//    console.error(err);
//    res.status(500).json({ message: 'Server error' });
//  }
//});
// @route  POST api/topic
// @desc   find all topic
// @access Public
// Define a GET endpoint to fetch unique topics
router.get('/unique-topics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('/unique-topics backend api');
    try {
        const uniqueTopics = yield Topic_ts_1.default.distinct('topic');
        console.log('after uniqueTopics:', uniqueTopics);
        res.json(uniqueTopics);
    }
    catch (error) {
        console.error('Error fetching unique topics:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// @route  POST api/topic
// @desc   Post topic
// @access Public
router.post('/', [(0, express_validator_1.check)('topic', 'Topic is required').not().isEmpty()], [(0, express_validator_1.check)('subject_name', 'Subject is required').not().isEmpty()], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { topic, subject_name } = req.body;
    console.log('in api topic:', topic);
    // Build topic object
    const topicFields = {};
    if (topic)
        topicFields.topic = topic;
    if (subject_name)
        topicFields.subject_name = subject_name;
    try {
        // Create new topic
        let topicItems = new Topic_ts_1.default(topicFields);
        yield topicItems.save();
        return res.json(topicItems);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  PUT api/topic
// @desc   put topic
// @access Public
router.put('/', [(0, express_validator_1.check)('topic', 'Topic is required').not().isEmpty()], [(0, express_validator_1.check)('subject_name', 'Subject is required').not().isEmpty()], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { topic, subject_name } = req.body;
    console.log('topic:', topic, subject_name);
    // Build topic object
    const topicFields = {};
    if (topic)
        topicFields.topic = topic;
    if (subject_name)
        topicFields.subject_name = subject_name;
    try {
        let topicItems = yield Topic_ts_1.default.findOne({
            $and: [{ topic: topic }, { subject_name: subject_name }]
        });
        if (topicItems) {
            // Update old topicItems
            topicItems = yield Topic_ts_1.default.findOneAndUpdate({ topic: req.body.topic }, { $set: topicFields }, { new: true });
            return res.json(topicItems);
        }
        // Create new topic
        topicItems = new Topic_ts_1.default(topicFields);
        yield topicItems.save();
        return res.json(topicItems);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  DELETE api/topic
// @desc   Delete topic
// @access Public
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in topic delete', req.params.id);
    try {
        // Remove question
        yield Topic_ts_1.default.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Topic deleted' });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
exports.default = router;
