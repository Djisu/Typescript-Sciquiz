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
//import nodemailer from 'nodemailer';
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
//import { check, validationResult } from 'express-validator';
const express_validator_1 = require("express-validator");
const Question_js_1 = __importDefault(require("../../models/Question.js"));
const test_question_js_1 = __importDefault(require("../../models/test_question.js"));
const multer_1 = __importDefault(require("multer"));
const xlsx_1 = __importDefault(require("xlsx"));
const router = express_1.default.Router();
const emailPassword = config_1.default.get('emailPassword');
//import checkQuestionSelected from '../../middleware/checkQuestionSelected';
// Multer configuration for file upload
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
// Route for seeding data
//router.get('/seed', async (req: Request, res: Response) => {
//  //  const client = new MongoClient(url);
//  console.log('router.get(seed)');
//
//  try {
//    // Insert the data into the collection
//    const result = await Question.insertMany(questionData);
//    console.log(`${result.insertedCount} documents inserted.`);
//
//    res.json({ message: `${result.insertedCount} documents inserted.` });
//  } catch (err) {
//    console.error('Error:', err);
//    res.status(500).json({ error: 'An error occurred while seeding data.' });
//  }
//});
// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("in question router.get('/', ");
    try {
        const question = yield Question_js_1.default.find({}, { question: 1, _id: 1 });
        res.send(question);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}));
router.get('/questions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const topicParam = req.query.topic;
    const difficultyLevelParam = req.query.difficultylevel;
    try {
        const questions = yield Question_js_1.default.aggregate([
            {
                $match: {
                    topic: topicParam,
                    difficulty_level: difficultyLevelParam
                }
            },
            {
                $project: {
                    _id: 0,
                    question: 1,
                    answer: 1,
                    difficulty_level: 1,
                    subject_name: 1,
                    topic: 1,
                    question_year: 1,
                    question_stats: 1
                }
            }
        ]);
        res.json(questions);
    }
    catch (error) {
        console.error('Error fetching questions:', error);
        res
            .status(500)
            .json({ error: 'An error occurred while fetching questions.' });
    }
}));
//app.get('/question/:checkedTopics/:checkedDifficultylevels/:checkedSubjects/:userId', (req: Request, res: Response) => {/:testName
router.get('/:checkedTopics/:checkedDifficultyLevels/:checkedSubjects/:userId/:noofquestions/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { checkedTopics, checkedDifficultyLevels, checkedSubjects, userId, noofquestions, name } = req.params;
        //   `/question/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}`
        console.log('IN IN ', checkedTopics, checkedDifficultyLevels, checkedSubjects, userId, noofquestions, name);
        //Generate test name at the backend
        const testNameX = name +
            '-' +
            checkedSubjects +
            '-' +
            Math.floor(Math.random() * 1000000);
        const testName = testNameX;
        const userIdObject = new mongoose_1.default.Types.ObjectId(userId);
        // Now, convert it back to a plain string
        const userIdStringPlain = userIdObject.toString();
        //      // Enable this block of code just clear the  answered_by array
        //  console.log('clearing answered_by array');
        yield Question_js_1.default.updateMany({}, { $set: { answeredBy: [] } });
        console.log('answered_by array CLEARED');
        //
        //      console.log('  userId= ', userId);
        //noofquestions = parseInt(noofquestions);
        // Splitting param arrays into variables
        const topicsArray = checkedTopics.split(',');
        const difficultyLevelsArray = checkedDifficultyLevels.split(',');
        const subjectsArray = checkedSubjects.split(',');
        console.log('xxxxxx ARRAYS' + topicsArray + " " + difficultyLevelsArray + " " + subjectsArray);
        const totalQuestions = yield Question_js_1.default.countDocuments({
            topic: { $in: topicsArray },
            difficulty_level: { $in: difficultyLevelsArray },
            subject_name: { $in: subjectsArray }
        });
        if (totalQuestions === 0) {
            return res.json([]);
        }
        const actualNoOfQuestions = Math.min(parseInt(noofquestions), totalQuestions > 0 ? totalQuestions : 1);
        console.log('actualNoOfQuestions: ', actualNoOfQuestions);
        //
        const questions = yield Question_js_1.default.find({
            topic: { $in: topicsArray },
            difficulty_level: { $in: difficultyLevelsArray },
            subject_name: { $in: subjectsArray }
        }).limit(actualNoOfQuestions);
        //  console.log('questions SELECTED: ', questions);
        let testArray = [];
        // Update the "answeredBy" array by pushing the userId
        for (const question of questions) {
            if (!question.answeredBy.includes(new mongoose_1.default.Types.ObjectId(userId))) {
                const filter = { _id: question._id };
                const update = {
                    $push: {
                        answeredBy: userId
                    }
                };
                Question_js_1.default.updateOne(filter, update)
                    .then((result) => {
                    console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
                })
                    .catch((err) => {
                    console.error(`Error updating document: ${err}`);
                });
                testArray.push(question);
                //  console.log('answeredBy updated with ', question._id, userId);
            }
            else {
                console.log('IT SEEMS QUESTION ALREADY DONE BY CANDIDATE!!!');
            }
        }
        console.log('testArray.length===', testArray.length);
        //  console.log('about to createTest', questions, testName);
        //Create test questions here
        if (testArray.length == 0) {
            console.log('Test already tackled by candidate. EMPTY TESTS');
            return res.json([]);
        }
        if (testArray.length > 0) {
            const currentDate = new Date();
            const testQuestions = []; // Initialize an array to store the test questions
            // Iterate through the fetched questions and insert into TestQuestion schema
            for (const question of questions) {
                const testQuestionData = {
                    test_name: testName, // Set the test_name as needed
                    questionId: question._id,
                    question: question.question,
                    answer: question.answer || 'answer later',
                    difficulty_level: question.difficulty_level,
                    subject_name: question.subject_name,
                    topic: question.topic,
                    question_year: currentDate.getFullYear(),
                    user_answer: question.user_answer
                };
                // Create a new TestQuestion document and save it
                const testQuestion = new test_question_js_1.default(testQuestionData);
                yield testQuestion.save();
                // Push the newly created test question to the array
                testQuestions.push(testQuestion);
            }
            if (testQuestions.length == 0) {
                return res.json([]);
            }
            console.log('SUCCESS, SUCCESS, SUCCESS: ', testName);
            return res.json(testQuestions);
        }
    }
    catch (error) {
        console.error('Error fetching questions:', error);
        res
            .status(500)
            .json({ error: 'An error occurred while fetching questions' });
    }
}));
const createTests = (questionData, test_name) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in createTests = async (questionData, test_name)');
    for (const question of questionData) {
        console.log('test_name:::: ', test_name);
    }
    try {
        if (questionData.length === 0) {
            return [];
        }
        const currentDate = new Date();
        const testQuestions = []; // Initialize an array to store the test questions
        // Iterate through the fetched questions and insert into TestQuestion schema
        for (const question of questionData) {
            const testQuestionData = {
                test_name: test_name, // Set the test_name as needed
                questionId: question._id,
                question: question.question,
                answer: question.answer,
                difficulty_level: question.difficulty_level,
                subject_name: question.subject_name,
                topic: question.topic,
                question_year: currentDate.getFullYear(),
                user_answer: question.user_answer
            };
            // Create a new TestQuestion document and save it
            const testQuestion = new test_question_js_1.default(testQuestionData);
            yield testQuestion.save();
            // Push the newly created test question to the array
            testQuestions.push(testQuestion);
        }
        //console.log('Tests created== ', test_name);
        return testQuestions; // Return the array of test questions after processing all questions
    }
    catch (error) {
        return [];
    }
});
router.get('/:checkedTopics/:checkedSubjects/:userId/:noofquestions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in router.get(/:checkedTopics/:checkedSubjects/:userId/:noofquestions');
    try {
        const { checkedTopics, checkedSubjects, userId, noofquestions } = req.params;
        console.log('req.params: ', checkedTopics, checkedSubjects, userId, noofquestions);
        const topicsArray = checkedTopics.split(',');
        const subjectsArray = checkedSubjects.split(',');
        // Enable this block of code just clear the  answered_by array
        //  console.log('clearing answered_by array');
        //  await Question.updateMany({}, { $set: { answeredBy: [] } });
        //  console.log('answered_by array CLEARED');
        console.log('topicsArray, subjectsArray: ', topicsArray, subjectsArray);
        const totalQuestions = yield Question_js_1.default.countDocuments({
            topic: { $in: topicsArray },
            subject_name: { $in: subjectsArray },
            answeredBy: { $nin: [userId] }
        });
        const actualNoOfQuestions = Math.min(parseInt(noofquestions), totalQuestions > 0 ? totalQuestions : 1);
        console.log('actualNoOfQuestions: ', actualNoOfQuestions);
        const questions = yield Question_js_1.default.find({
            topic: { $in: topicsArray },
            subject_name: { $in: subjectsArray },
            answeredBy: { $nin: [userId] } // Assuming you want to filter by the userId in answeredBy array
        })
            .limit(actualNoOfQuestions) // Limit the number of questions returned
            .populate('answeredBy', 'username'); // Populate the user details in answeredBy array
        // Update answeredBy array for each question
        for (const question of questions) {
            question.answeredBy.push(new mongoose_1.default.Types.ObjectId(userId));
            yield question.save();
        }
        console.log('questions selected: ', questions);
        return res.json(questions);
    }
    catch (error) {
        console.error('Error fetching questions:', error);
        res
            .status(500)
            .json({ error: 'An error occurred while fetching questions' });
    }
}));
//app.get('/question/:checkedDifficultylevels/:userId', (req: Request, res: Response) => {
router.get('/:checkedDifficultyLevels/:checkedSubjects/:userId/:noofquestions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { checkedDifficultyLevels, checkedSubjects, userId, noofquestions } = req.params;
        const difficultyLevelsArray = checkedDifficultyLevels.split(',');
        const subjectsArray = checkedSubjects.split(',');
        const totalQuestions = yield Question_js_1.default.countDocuments({
            difficulty_level: { $in: difficultyLevelsArray },
            subject_name: { $in: subjectsArray },
            answeredBy: { $nin: [userId] }
        });
        const actualNoOfQuestions = Math.min(parseInt(noofquestions), totalQuestions > 0 ? totalQuestions : 1);
        const questions = yield Question_js_1.default.find({
            difficulty_level: { $in: difficultyLevelsArray },
            subject_name: { $in: subjectsArray },
            answeredBy: { $nin: [userId] } // Assuming you want to filter by the userId in answeredBy array
        })
            .limit(actualNoOfQuestions) // Limit the number of questions returned
            .populate('answeredBy', 'username'); // Populate the user details in answeredBy array
        // Update answeredBy array for each question
        for (const question of questions) {
            question.answeredBy.push(new mongoose_1.default.Types.ObjectId(userId));
            yield question.save();
        }
        return res.json(questions);
    }
    catch (error) {
        console.error('Error fetching questions:', error);
        res
            .status(500)
            .json({ error: 'An error occurred while fetching questions' });
    }
}));
router.get('/:checkedSubjects/:userId/:noofquestions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { checkedSubjects, userId, noofquestions } = req.params;
        const subjectsArray = checkedSubjects.split(',');
        const totalQuestions = yield Question_js_1.default.countDocuments({
            subject_name: { $in: subjectsArray },
            answeredBy: { $nin: [userId] }
        });
        const actualNoOfQuestions = Math.min(parseInt(noofquestions), totalQuestions > 0 ? totalQuestions : 1);
        const questions = yield Question_js_1.default.find({
            subject_name: { $in: subjectsArray },
            answeredBy: { $nin: [userId] }
        })
            .limit(actualNoOfQuestions)
            .populate('answeredBy', 'username');
        for (const question of questions) {
            question.answeredBy.push(new mongoose_1.default.Types.ObjectId(userId));
            yield question.save();
        }
        return res.json(questions);
    }
    catch (error) {
        console.error('Error fetching questions:', error);
        res
            .status(500)
            .json({ error: 'An error occurred while fetching questions' });
    }
}));
// @route  POST api/question
// @desc   Post question
// @access Public
router.post('/', [
    (0, express_validator_1.check)('question', 'Question is required').not().isEmpty(),
    (0, express_validator_1.check)('answer', 'Answer is required').not().isEmpty(),
    (0, express_validator_1.check)('difficulty_level', 'Difficulty level is required').not().isEmpty(),
    (0, express_validator_1.check)('subject_name', 'Subject is required').not().isEmpty(),
    (0, express_validator_1.check)('topic', 'Topic is required').not().isEmpty(),
    (0, express_validator_1.check)('question_year', 'Question year is required').not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //    console.log('in router.post question', req.body);
    //
    //    console.log('in question post api end point');
    const { question, answer, difficulty_level, subject_name, topic, question_year } = req.body;
    // Build question object question_no
    const questionFields = {};
    if (question)
        questionFields.question = question;
    if (answer)
        questionFields.answer = answer;
    if (difficulty_level)
        questionFields.difficulty_level = difficulty_level;
    if (subject_name)
        questionFields.subject_name = subject_name;
    if (topic)
        questionFields.topic = topic;
    if (question_year)
        questionFields.question_year = question_year;
    questionFields.question_stats = 0;
    try {
        // Create new question
        let questionItem = new Question_js_1.default(questionFields);
        yield questionItem.save();
        return res.json(questionItem);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  PUT api/question
// @desc   Put question
// @access Public
router.put('/:id', [
    ((0, express_validator_1.check)('question', 'Question is required').not().isEmpty(),
        (0, express_validator_1.check)('answer', 'Answer is required').not().isEmpty(),
        (0, express_validator_1.check)('difficulty_level', 'Difficulty level is required').not().isEmpty(),
        (0, express_validator_1.check)('subject', 'Subject is required').not().isEmpty(),
        (0, express_validator_1.check)('topic', 'Topic is required').not().isEmpty(),
        (0, express_validator_1.check)('question_year', 'Question year is required').not().isEmpty())
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in question put api end point');
    const { _id, question, answer, difficulty_level, subject_name, topic, question_year } = req.body;
    // Build question object question_no
    const questionFields = {};
    if (_id) {
        questionFields._id = _id;
    }
    if (question) {
        questionFields.question = question;
    }
    if (answer) {
        questionFields.answer = answer;
    }
    if (difficulty_level) {
        questionFields.difficulty_level = difficulty_level;
    }
    if (subject_name) {
        questionFields.subject_name = subject_name;
    }
    if (topic) {
        questionFields.topic = topic;
    }
    if (question_year) {
        questionFields.question_year = question_year;
    }
    try {
        let questionItem = yield Question_js_1.default.findOne({
            _id: req.params.id
        });
        if (questionItem) {
            // Update old question
            questionItem = yield Question_js_1.default.findOneAndUpdate({ _id: req.params.id }, { $set: questionFields }, { new: true });
            return res.json(questionItem);
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  DELETE api/question
// @desc   Delete question
// @access Public
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in question delete', req.params.id);
    try {
        // Remove question
        yield Question_js_1.default.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Question deleted' });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  GET api/question /questions/question
// @desc   Get question
// @access Public
// Define a route to handle the findQuestion request
router.get('/:question', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('in get(/:question....) ', req.params.question);
    try {
        // Assuming the 'question' parameter is passed in the query string
        //
        // Mock an API call to the database (replace this with your actual database query)
        const foundQuestion = yield Question_js_1.default.findOne({
            question: req.params.question
        });
        //if (foundQuestion){
        //    console.log('foundQuestion===', foundQuestion);
        //}
        if (!foundQuestion) {
            return res.status(404).json({ msg: 'Question not found' });
        }
        return res.json(foundQuestion);
    }
    catch (err) {
        //console.error('Error==========:', err);
        res.status(500).json({ msg: 'Server Error' });
    }
}));
// Route to handle user answers
router.post('/answer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, questionId } = req.body;
    try {
        // Find the question by its ID
        const question = yield Question_js_1.default.findById(questionId);
        // Check if the user has already answered the question
        if (!question) {
            return res.status(500).json({ error: 'Internal server error.' });
        }
        if (question) {
            if (question.answeredBy.includes(userId)) {
                return res
                    .status(400)
                    .json({ message: 'You have already answered this question.' });
            }
            // Update the "answeredBy" field with the user's ID
            question.answeredBy.push(userId);
            yield question.save();
            return res.status(200).json({ message: 'Answer recorded successfully.' });
        }
    }
    catch (error) {
        console.error('Error recording answer:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}));
router.post('/api/upload', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const workbook = xlsx_1.default.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx_1.default.utils.sheet_to_json(worksheet);
        // Assuming your Excel columns match the schema fields
        for (const row of data) {
            const question = new Question_js_1.default({
                question: row.question,
                answer: row.answer,
                difficulty_level: row.difficulty_level,
                subject_name: row.subject_name,
                topic: row.topic,
                question_year: row.question_year,
                question_stats: row.question_stats,
                answer_flag: row.answer_flag,
                user_answer: row.user_answer
            });
            yield question.save();
        }
        return res.status(200).json({ message: 'Excel data uploaded successfully' });
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: 'An error occurred while uploading the Excel file' });
    }
}));
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.default = router;
