"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QuestionSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    difficulty_level: {
        type: String
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
        type: Number
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
        type: Boolean
    },
    user_answer: {
        type: String
    }
});
const Question = mongoose_1.default.model('question', QuestionSchema);
exports.default = Question;
