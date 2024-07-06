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
const test_question_js_1 = __importDefault(require("../../models/test_question.js"));
const User_js_1 = __importDefault(require("../../models/User.js"));
// @route  GET api/
// @access Public
router.get('/unmarked/:randnum', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const uniqueAnswerFlags = yield test_question_js_1.default.distinct('answer_flag', {
            answer_flag: { $in: ['', ' '] }
        });
        // Use find to get unique documents based on answer_flag
        const unmarkedTests = yield test_question_js_1.default.find({
            answer_flag: { $in: uniqueAnswerFlags }
        });
        console.log('unmarked == ', unmarkedTests);
        if (unmarkedTests.length > 0) {
            return res.send(unmarkedTests);
        }
        else {
            return res.status(400).json({ msg: 'There is no unmarked test!' });
        }
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
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
        // Use the split method to split the string by the hyphen character
        const parts = testName.split('-');
        // The part before the hyphen is at index 0
        const extractedPart = parts[0];
        const tempUser = yield User_js_1.default.findOne({ name: extractedPart });
        if (tempUser) {
            return tempUser._id;
        }
        return '';
    });
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
