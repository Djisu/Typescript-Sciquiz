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
const StuTests_js_1 = __importDefault(require("../../models/StuTests.js"));
// @route  POST api/// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/:userid/:test_name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in stutests router.get('/', ");
    const userId = req.params.userid;
    const test_name = req.params.test_name;
    try {
        const tests = yield StuTests_js_1.default.find({ userId, test_name });
        res.json(tests);
    }
    catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}));
// Define an API endpoint to get the test by test ID
router.get('/:test_name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { test_name } = req.params;
        // Find the test by ID
        const test = yield StuTests_js_1.default.findById(test_name);
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.json(test);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// Define an API endpoint to add a question to test_details array
// @route  POST api/test
// @desc   Post test  // '/tests/:testId/question',
// @access Public
//router.post(
router.post('/', [
    (0, express_validator_1.check)('userId', 'User id is required. Login before taking the test')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('question', 'Question is required').not().isEmpty(),
    (0, express_validator_1.check)('answer', 'Answer is required').not().isEmpty(),
    (0, express_validator_1.check)('marks', 'Marks is required').not().isEmpty(),
    (0, express_validator_1.check)('pass_marks', 'Pass marks is required').not().isEmpty(),
    (0, express_validator_1.check)('test_name', 'Test name is required').not().isEmpty(),
    (0, express_validator_1.check)('subject_name', 'Test name is required').not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in stutest post api end point');
    try {
        const { userid, question, answer, marks, pass_marks, test_name, subject_name } = req.body;
        // Find the test item with the given 'userid' and 'test_name'
        const testItem = yield StuTests_js_1.default.findOne({ userid, test_name, question });
        // If found just return. Operation aborted.
        if (testItem) {
            return res.status(404).json({ error: 'Test item already captured' });
        }
        // Create a new test object
        const newTest = new StuTests_js_1.default({
            userid,
            test_name,
            question,
            answer,
            marks,
            pass_marks,
            subject_name
        });
        // Save the test
        yield newTest.save();
        res.status(201).json(newTest);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// Define an API endpoint to update a question in test_details array
router.put('/:userid/:test_name', [
    (0, express_validator_1.check)('userid', 'User id is required. Login before taking the test')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('question', 'Question is required').not().isEmpty(),
    (0, express_validator_1.check)('answer', 'Answer is required').not().isEmpty(),
    (0, express_validator_1.check)('marks', 'Marks is required').not().isEmpty(),
    (0, express_validator_1.check)('pass_marks', 'Pass marks is required').not().isEmpty(),
    (0, express_validator_1.check)('test_name', 'Test name is required').not().isEmpty(),
    (0, express_validator_1.check)('subject_name', 'Test name is required').not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in stutest put api end point');
    try {
        const { userid, test_nameX } = req.params;
        const { userId, test_name, question, answer, marks, pass_marks, subject_name } = req.body;
        //Create stutests object
        let stutestFields = {
            userId: userId,
            test_name: test_name || '',
            question: question || '',
            answer: answer || '',
            marks: marks || 0,
            pass_marks: pass_marks || 0,
            subject_name: subject_name || ''
        };
        // if (userid) stutestFields.userid = userid;
        // if (test_name) stutestFields.test_name = test_name;
        // if (question) stutestFields.question = question;
        // if (answer) stutestFields.answer = answer;
        // if (marks) stutestFields.marks = marks;
        // if (pass_marks) stutestFields.pass_marks = pass_marks;
        // if (subject_name) stutestFields.subject_name = subject_name;
        // Update old question
        const stutestItem = yield StuTests_js_1.default.findOneAndUpdate({ userid: userid, test_name: test_nameX }, { $set: stutestFields }, { new: true });
        return res.json(stutestItem);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:userid/:test_name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in test delete api', req.params.id);
    const { userid, test_name } = req.params;
    try {
        // Find the test by id and Remove question
        yield StuTests_js_1.default.deleteOne({ _id: userid });
        res.json({ msg: 'Test deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
exports.default = router;
