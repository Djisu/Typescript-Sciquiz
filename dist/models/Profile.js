"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    school: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    name: {
        type: String
    },
    bio: {
        type: String
    },
    email: {
        type: String
    }
});
const Profile = mongoose_1.default.model('profile', ProfileSchema);
exports.default = Profile;
