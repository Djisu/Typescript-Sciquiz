"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const DifficultySchema = new mongoose_1.default.Schema({
    level: {
        type: String,
        required: true
    }
});
const Difficultylevel = mongoose_1.default.model('difficulty', DifficultySchema);
exports.default = Difficultylevel;
