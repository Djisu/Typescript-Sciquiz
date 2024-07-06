"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const User_PerformanceSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    test_name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    },
    test_details: {
        type: String,
        required: true
    }
});
const User_Performance = mongoose_1.default.model('user_performance', User_PerformanceSchema);
exports.default = User_Performance;
//export default mongoose.model('user_performance', User_PerformanceSchema);
