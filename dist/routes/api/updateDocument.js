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
const test_question_js_1 = __importDefault(require("../../models/test_question.js"));
const router = express_1.default.Router();
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_answer, id, test_name } = req.body;
    try {
        // Find the question based on both test_name and id
        const updatedQuestion = yield test_question_js_1.default.findOneAndUpdate({ test_name, _id: id }, { $set: { user_answer } }, { new: true, upsert: true }).exec();
        if (!updatedQuestion) {
            // If no question was found, you can handle it here
            return res.status(404).send('Question not found');
        }
        return res.status(200).send('Answer posted successfully');
    }
    catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}));
//router.get('/', (req: Request, res: Response) => {
//  console.log('updateDocument works');
//});
//
//// Define a route to handle the PUT request for updating the document.
//router.put('/', async (req: Request, res: Response) => {
//  console.log('in /api/updateDocument');
//
//  const { user_answer, id } = req.body;
//  console.log('user_answer:', user_answer);
//
//  try {
//    // Use $set and upsert to update or initialize the user_answer field
//    const updatedQuestion = await TestQuestion.findByIdAndUpdate(
//      id,
//      { $set: { user_answer } },
//      { new: true, upsert: true }
//    ).exec();
//
//    console.log(updatedQuestion);
//    return res.status(200).send('Answer posted successfully');
//  } catch (err) {
//    console.error(err);
//    return res.status(500).send('Internal Server Error');
//  }
//});
exports.default = router;
