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
const express_1 = __importDefault(require("express"));
const test_question_js_1 = __importDefault(require("../../models/test_question.js"));
const User_js_1 = __importDefault(require("../../models/User.js"));
const Question_js_1 = __importDefault(require("../../models/Question.js"));
const router = express_1.default.Router();
// Define a route that accepts a userId parameter to generate statistics for a candidate tests
router.get('/:testName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testName = req.params.testName;
        console.log('in scoreCandidate router.get(/:testName', testName);
        console.log('testName==', testName);
        // 1. Extract all topics corresponding to the testName parameter ------
        const questionCount = yield Question_js_1.default.countDocuments({});
        console.log('questionCount== ', questionCount);
        //  const tempUserId = getUserId(testName);
        const tempUserId = yield User_js_1.default.findOne({ name: testName });
        if (tempUserId) {
            console.log('tempUserId._id=== ', tempUserId._id);
            const topicCountAnsweredBy = yield Question_js_1.default.countDocuments({
                answeredBy: { $exists: true, $ne: [], $in: [tempUserId._id] }
            });
            console.log('topicCountAnsweredBy== ', topicCountAnsweredBy);
            // 3. Count records with answer_flag as "true" for each topic   topic,
            const topicCountWithFlagTrue = yield test_question_js_1.default.countDocuments({
                $and: [
                    {
                        answer_flag: 'true'
                    },
                    {
                        test_name: { $regex: testName, $options: 'i' }
                    }
                ]
            });
            // console.log('answeredQuestion:: ', answeredQuestion);
            return res.json([
                questionCount,
                topicCountAnsweredBy,
                topicCountWithFlagTrue
            ]);
        }
        else {
            return res.json([]);
        }
    }
    catch (error) {
        console.error(error);
        return res.json([]);
        //res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/:testname/:randNum', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in router.get(/:name/:randNum/:userId');
    const testName = req.params.testname;
    try {
        const topicStatistics = yield test_question_js_1.default.aggregate([
            { $match: { test_name: testName } },
            {
                $group: {
                    _id: '$topic',
                    trueAnswers: {
                        $sum: { $cond: [{ $eq: ['$answer_flag', 'true'] }, 1, 0] }
                    },
                    totalQuestions: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    topic: '$_id',
                    trueAnswers: 1,
                    totalQuestions: 1
                }
            }
        ]);
        console.log('Topic Statistics:', topicStatistics);
        return res.json(topicStatistics);
    }
    catch (error) {
        console.error('Error getting topic statistics:', error);
        throw error;
    }
}));
// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:testName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in test delete /:testName', req.params.testName);
    try {
        const partialTestName = req.params.testName;
        const userId = getUserId(partialTestName);
        // Create a regex pattern for the partialTestName as a wildcard
        const regexPattern = new RegExp(partialTestName, 'i'); // 'i' for case-insensitive
        // Use the regex pattern to delete matching documents
        yield test_question_js_1.default.deleteMany({ test_name: { $regex: regexPattern } });
        console.log('clearing answered_by array');
        yield Question_js_1.default.updateMany({ answeredBy: userId }, // Filter by the userId
        { $set: { answeredBy: [] } } // Set the "answeredBy" field to an empty array
        );
        console.log('answered_by array CLEARED');
        res.json({ msg: 'All tests of candidate deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
function getUserId(testName) {
    return __awaiter(this, void 0, void 0, function* () {
        // Use the split method to split the string by the hyphen character
        const parts = yield testName.split('-');
        // The part before the hyphen is at index 0
        const extractedPart = parts[0];
        const tempUser = User_js_1.default.findOne({ name: extractedPart });
        if (tempUser) {
            return tempUser;
        }
        return '';
    });
}
exports.default = router;
