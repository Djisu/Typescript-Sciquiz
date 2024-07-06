"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TopicSchema = new mongoose_1.default.Schema({
    topic: {
        type: String,
        required: true
    },
    subject_name: {
        type: String,
        required: true
    }
});
const Topic = mongoose_1.default.model('topic', TopicSchema);
exports.default = Topic;
//export default Topic = monconst Tests = mongoose.model('tests', TestsSchema);
//export default Tests;goose.model('topic', TopicSchema);
