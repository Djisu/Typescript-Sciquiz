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
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
const express_validator_1 = require("express-validator");
const test_question_js_1 = __importDefault(require("../../models/test_question.js"));
const User_js_1 = __importDefault(require("../../models/User.js"));
const Tests_js_1 = __importDefault(require("../../models/Tests.js"));
const Question_js_1 = __importDefault(require("../../models/Question.js"));
// Create a route for creating and seeding the database
router.post('/seed', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('in testquestion database seed');
        // Create a test question record
        const testQuestion = new test_question_js_1.default({
            test_name: 'Sample Test',
            question: 'What is the capital of France?',
            answer: 'Paris',
            difficulty_level: 'Easy',
            subject_name: 'Geography',
            topic: 'Capitals',
            question_year: 2022,
            question_stats: 0,
            answeredBy: [],
            answer_flag: '',
            user_answer: '',
            questionId: 'ABC123',
        });
        // Save the test question record to the database
        yield testQuestion.save();
        res.status(201).json({ message: 'Database created and seeded successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while creating and seeding the database' });
    }
}));
router.get('/:name/:userId/:randNum', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testName = req.params.name;
        console.log('in router.get(/:name/:randNum', testName);
        // Get user's name from the userId
        const user = yield getOnlyName(testName);
        console.log('user= ', user);
        let userName = '';
        if (user) {
            userName = user;
        }
        const testCount = yield test_question_js_1.default.countDocuments({
            test_name: { $regex: user, $options: 'i' }
        });
        console.log('testCount == ', testCount);
        const usedQuestions = yield test_question_js_1.default.find({
            test_name: { $regex: user, $options: 'i' }
        });
        console.log('usedQuestions.length == ', usedQuestions.length);
        // Count of total questions in the database
        const questionCount = yield Question_js_1.default.estimatedDocumentCount()
            .then((count) => {
            console.log(`Total count of documents in the collection: ${count}`);
            return count;
        })
            .catch((err) => {
            console.log('Error:', err);
            return 0;
        });
        console.log('questionCount== ', questionCount);
        // Total number of questions answered correctly
        const correctAnswers = yield test_question_js_1.default.countDocuments({
            $and: [
                {
                    answer_flag: 'true'
                },
                {
                    test_name: { $regex: user, $options: 'i' }
                }
            ]
        });
        console.log('questionCount: ', questionCount, 'correct: ', correctAnswers, 'used: ', usedQuestions.length, 'testCount: ', testCount);
        const usedQuestionsLength = usedQuestions.length;
        const resultArray = [
            questionCount,
            correctAnswers,
            usedQuestionsLength,
            testCount
        ];
        console.log('resultArray:: ', resultArray);
        return res.json(resultArray);
    }
    catch (error) {
        console.error(error);
        return res.json([]);
        //res.status(500).json({ error: 'Internal Server Error' });
    }
}));
//// Define an API endpoint to get the test by userId
router.get('/:randNum/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in router.get(/:randNum/:userId');
    try {
        //const rand = req.params.rand;
        const id = req.params.userId;
        //const objectId = new mongoose.Types.ObjectId(id);
        //console.log('objectId:::: ', objectId);
        // Validate that the provided userId is a valid ObjectId
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid userId format' });
        }
        const userName = yield getUserById(id);
        //console.log('userName== ', userName);
        // Find the test by test_name
        //const test = await TestQuestion.find({ test_name: test_name });
        const tests = yield getTestNamesContainingString(userName || '');
        if (tests)
            console.log('testsOOOOOOO:: ', tests);
        if (!tests) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.json(tests);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
//// Define an API endpoint to get the test by test ID
router.get('/:test_name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in router.get(/:test_name');
    try {
        const { test_name } = req.params;
        const userId = getUserId(test_name);
        // Find the test by test_name
        const test = yield test_question_js_1.default.find({ test_name: test_name });
        if (test.length === 0) {
            return res.status(404).json({ message: 'Test not found' });
        }
        console.log('test is ', test);
        return res.json(test);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// router.put('/:userAnswers/:testName/:questionId', async (req: Request, res: Response) => {
//   console.log('in test put API endpoint');
//   try {
//     const { userAnswers, questionId, testName } = req.params;
//     // Find the existing document based on testName and questionId
//     const filter = {
//       questionId: questionId,
//       test_name: testName
//     };
//     // Find the existing document and return it
//     let existingTestItem = await TestQuestion.findOne(filter);
//     if (!existingTestItem) {
//       // If the document doesn't exist, create a new one
//       const newTestItem = new TestQuestion({
//         test_name: testName,
//         questionId: questionId,
//         answer_flag: userAnswers
//         // Add other fields here if needed
//       });
//       //Push userId into answeredBy array
//       //Update answeredBy array for each question
//       newTestItem.answeredBy.push(userId);
//       await newTestItem.save();
//       res.status(200).json({ message: 'New document created', newItem: newTestItem });
//     } else {
//       // If the document exists, update the answer_flag while keeping other fields unchanged
//       const update = {
//         $set: {
//           answer_flag: userAnswers
//         }
//       };
//       const options = {
//         new: true // Return the modified document
//       };
//       let updatedTestItem = await TestQuestion.findOneAndUpdate(
//         filter,
//         update,
//         options
//       );
//       res
//         .status(200)
//         .json({ message: 'Update successful', updatedItem: updatedTestItem });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
// Define an API endpoint to update a question in test_details array questionId, userAnswers, testName, :userAnswers/
router.put('/:testName/:questionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { testName, questionId } = req.params;
        const { answer_flag, userId } = req.body;
        console.log('in test put API endpoint', testName, questionId, answer_flag, userId);
        // Use the `upsert` option to create a new document if it doesn't exist
        const filter = {
            questionId: questionId,
            test_name: testName
        };
        const update = {
            $set: {
                answer_flag: answer_flag
            }
        };
        const options = {
            upsert: true,
            new: true // Return the modified document
        };
        let testItem = yield test_question_js_1.default.findOneAndUpdate(filter, update, options);
        // Check if the document was found and updated
        if (!testItem) {
            return res.status(404).json({ message: 'Question not found' });
        }
        // Push the userId into the answeredBy array
        testItem.answeredBy.push(userId);
        yield testItem.save();
        //// Update answeredBy array for each question
        //for (const question of testItem) {
        //  question.answeredBy.push(userId);
        //  await question.save();
        //}
        res.status(200).json({ message: 'Update successful' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// Define an API endpoint to update a question in test_details array
router.put('/:id', [
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
    console.log('in test put api end point');
    try {
        const { test_name, question, answer, marks, pass_marks, subject_name } = req.body;
        //Create tests object
        let testFields = {
            test_name: test_name || '',
            question: question || '',
            answer: answer || '',
            marks: marks || 0,
            pass_marks: pass_marks || 0,
            subject_name: subject_name || ''
        };
        if (test_name)
            testFields.test_name = test_name;
        if (question)
            testFields.question = question;
        if (answer)
            testFields.answer = answer;
        if (marks)
            testFields.marks = marks;
        if (pass_marks)
            testFields.pass_marks = pass_marks;
        if (subject_name)
            testFields.subject_name = subject_name;
        const tName = req.params.id;
        console.log(tName);
        let testItem = yield test_question_js_1.default.findOne({
            test_name: tName
        });
        if (testItem) {
            // Update old question
            testItem = yield test_question_js_1.default.findOneAndUpdate({ test_name: req.params.id }, { $set: testFields }, { new: true });
            return res.json(testItem);
        }
        else {
            return res.status(404).json({ message: 'Test not found' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in test delete api', req.params.id);
    try {
        // Find the test by id and Remove question
        yield test_question_js_1.default.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Test deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// @route  GET api/
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in tests router.get('/', ");
    try {
        //const tests = await TestQuestion.find();
        //const tests = await TestQuestion.distinct('test_name');
        const tests = yield test_question_js_1.default.aggregate([
            {
                $group: {
                    _id: '$test_name', // Group by the test_name field
                    doc: { $first: '$$ROOT' } // Keep the first document encountered for each group
                }
            },
            {
                $replaceRoot: { newRoot: '$doc' } // Replace the root with the original document
            }
        ]);
        console.log('TESTS obtained from the backend == ', tests);
        res.send(tests);
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).json({ msg: 'There is no test found' });
    }
}));
//// @route  GET api/
//// @access Public
//router.get('/unmarked/:randnum', async (req: Request, res: Response) => {
//  console.log("in tests router.get('/unmarked', ");
//
//  try {
//    const tests = await TestQuestion.find({ answer_flag: 'false' });
//
//    console.log('unmarked tests== ', tests);
//
//    if (tests) {
//      return res.send(tests);
//    } else {
//      return res.json([]);
//    }
//  } catch (err) {
//    console.log(err.message);
//    res.status(500).send('Server Error');
//  }
//});
// Define an API endpoint to add a question to test_details array
// @route  POST api/test
// @desc   Post test  // '/tests/:testId/question',
// @access Public
//router.post(
router.post('/', [
    (0, express_validator_1.check)('question', 'Question is required').not().isEmpty(),
    (0, express_validator_1.check)('answer', 'Answer is required').not().isEmpty(),
    (0, express_validator_1.check)('test_name', 'Test name is required').not().isEmpty(),
    (0, express_validator_1.check)('subject_name', 'Test name is required').not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in test post api end point router.post(');
    try {
        const { question, answer, marks, pass_marks, test_name, subject_name } = req.body;
        const query = {
            $and: [{ question: question }, { test_name: test_name }]
        };
        // Performing the find operation
        const testItem = yield test_question_js_1.default.findOne(query);
        if (testItem) {
            return res.status(409).json({
                msg: 'Test already exists with the same question and test_name'
            });
        }
        // Create a new test object
        const newTest = new Tests_js_1.default({
            test_name: test_name || '',
            question: question || '',
            answer: answer || '',
            marks: marks || 0,
            pass_marks: pass_marks || 0,
            subject_name: subject_name || ''
        });
        console.log('newTest:::', newTest);
        // Save the test
        yield newTest.save();
        res.json(newTest);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}));
function getUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Find the user by their _id (assuming userId is the user's ObjectId)
            //const user = await User.findById(userId);
            const user = yield User_js_1.default.findById(userId);
            if (user) {
                console.log('user: ', user.name);
            }
            if (!user) {
                return null; // User not found
            }
            // Return the user object
            return user.name;
        }
        catch (error) {
            console.error('Error retrieving user:', error);
            throw error; // You can handle the error in the calling code
        }
    });
}
function getUserId(testName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use the split method to split the string by the hyphen character
            const parts = testName.split('-');
            // The part before the hyphen is at index 0
            const extractedPart = parts[0];
            const tempUser = yield User_js_1.default.findOne({ name: extractedPart });
            if (tempUser) {
                return tempUser._id;
            }
            return '';
        }
        catch (error) {
            console.error('Error getting user ID:', error);
            throw error;
        }
    });
}
function getTestNamesContainingString(searchString) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('searchString== ', searchString);
        try {
            // Use a regular expression to find test names that include the searchString
            const testNames = yield test_question_js_1.default.distinct('test_name', {
                test_name: { $regex: searchString, $options: 'i' } // 'i' for case-insensitive search
            });
            console.log('testNames== ', testNames);
            return testNames;
        }
        catch (error) {
            console.error('Error retrieving test names:', error);
            throw error; // You can handle the error in the calling code
        }
    });
}
function getOnlyName(testName) {
    return __awaiter(this, void 0, void 0, function* () {
        // Use the split method to split the string by the hyphen character
        const parts = yield testName.split('-');
        // The part before the hyphen is at index 0
        const extractedPart = parts[0];
        return extractedPart;
    });
}
exports.default = router;
