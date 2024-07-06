"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TestQuestionSchema = new mongoose_1.default.Schema({
    test_name: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    difficulty_level: {
        type: String,
        required: true
    },
    subject_name: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    question_year: {
        type: Number,
        required: true
    },
    question_stats: {
        type: Number
    },
    answeredBy: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'user' // Assuming you have a "User" model for users
        }
    ],
    answer_flag: {
        type: String,
        default: '' // Set default value to an empty string
    },
    user_answer: {
        type: String
    },
    questionId: {
        type: String,
        required: true
    }
});
const TestQuestion = mongoose_1.default.model('testQuestion', TestQuestionSchema);
exports.default = TestQuestion;
