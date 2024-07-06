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
const Question_js_1 = __importDefault(require("../../models/Question.js"));
// @route  GET api/unique_subjects
// @desc   Get all unique subjects
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('/unique_subjects backend api');
    try {
        const uniqueSubjects = yield Question_js_1.default.aggregate([
            {
                $group: {
                    _id: '$subject_name',
                    subject_name: { $first: '$subject_name' },
                    questions: { $push: '$$ROOT' },
                },
            },
        ]);
        //console.log('uniqueSubjects:::', uniqueSubjects);
        res.json(uniqueSubjects);
    }
    catch (error) {
        console.error('Error fetching unique subjects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
// /* eslint-disable semi */
// import express from 'express';
// const router = express.Router();
// import { check, validationResult } from 'express-validator';
// import Question from '../../models/Question.js';
// // @route  POST api/topic
// // @desc   find all topic
// // @access Public
// // Define a GET endpoint to fetch unique subjects
// router.get('/', async (req: Request, res: Response) => {
//     console.log('/unique_subjects backend api');
//   try {
//     const uniqueSubjects = await Question.distinct('subject_name');
//     console.log('uniqueSubjects:::', uniqueSubjects);
//     res.json(uniqueSubjects);
//   } catch (error) {
//     //console.error('Error fetching unique subjects:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// export default router;
