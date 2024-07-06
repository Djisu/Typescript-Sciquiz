"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TestSchema = new Schema({
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
    marks: {
        type: Number
    },
    pass_marks: {
        type: Number
    },
    subject_name: {
        type: String,
        required: true
    }
});
const Tests = mongoose_1.default.model('tests', TestSchema);
exports.default = Tests;
//export DefaultTests = mongoose.model('tests', TestSchema);
