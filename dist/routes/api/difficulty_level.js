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
const express_validator_1 = require("express-validator");
const Difficulty_level_ts_1 = __importDefault(require("../../models/Difficulty_level.js"));
const Question_ts_1 = __importDefault(require("../../models/Question.js"));
// @route  POST api/get/
// @desc   find all topic
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in difficultlevels router.get('/', ");
    try {
        const difficultyLevels = yield Difficulty_level_ts_1.default.find({});
        console.log('difficultyLevels returned: ', difficultyLevels);
        res.json(difficultyLevels);
    }
    catch (err) {
        console.error('Error:', err);
        res.json([]);
    }
}));
// @route  POST api/get/
// @desc   find all topic
// @access Public
router.get('/:difficulty_level', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in router.get('/:difficulty_level', ");
    const subject_name = req.query.subject_name;
    try {
        const distinctDifficultyLevels = yield Question_ts_1.default.aggregate([
            {
                $match: {
                    subject_name: subject_name
                }
            },
            {
                $group: {
                    _id: "$difficulty_level",
                    difficulty_level: { $first: "$difficulty_level" }
                }
            },
            // {
            //   $project: {
            //     _id: 0
            //   }
            // }
        ]);
        console.log('distinctDifficultyLevels returned: ', distinctDifficultyLevels);
        res.json(distinctDifficultyLevels);
    }
    catch (err) {
        console.error('Error:', err);
        res.json([]);
    }
}));
// // @route  POST api/topic/:topic
// // @desc   find all topic
// // @access Public
// router.get('/:difficulty_level', async (req: Request, res: Response) => {
//   console.log("in router.get('/:difficulty_level', ");
//   const subject_name = req.query.subject_name;
//   try {
//     const subjectNameParam = 'YourSubjectName'; // Replace with the subject_name you want to filter by
//     const difficultyLevels = await Question.distinct('difficulty_level', {
//       subject_name: subject_name
//     });
//     //console.log('Distinct Difficulty Levels:', difficultyLevels);
//     res.json(difficultyLevels);
//   } catch (err) {
//     console.error('Error:', err);
//     res.json([]);
//   }
// });
// @route  POST api/difficult_level
// @desc   Post difficult_level
// @access Public
router.post('/', [(0, express_validator_1.check)('level', 'Difficulty level is required').not().isEmpty()], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { level } = req.body;
    // Build profile object
    const difficultyFields = {};
    if (level)
        difficultyFields.level = level;
    console.log('in router.post Difficultylevel', req.body);
    try {
        let difficulty_level = yield Difficulty_level_ts_1.default.findOne({
            level: level
        });
        console.log('XXXXXXXXX in router.post Difficultylevel');
        if (difficulty_level) {
            // Update old difficult level
            difficulty_level = yield Difficulty_level_ts_1.default.findOneAndUpdate({ level: req.body.level }, { $set: difficultyFields }, { new: true });
            console.log('difficulty_level: ', difficulty_level);
            return res.json(difficulty_level);
        }
        // Create new difficult level
        difficulty_level = new Difficulty_level_ts_1.default(difficultyFields);
        yield difficulty_level.save();
        console.log('difficulty_level created= ', difficulty_level);
        const difficultyLevels = yield Difficulty_level_ts_1.default.find({});
        console.log('difficultyLevels returned: ', difficultyLevels);
        res.json(difficultyLevels);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  DELETE api/difficult_level
// @desc   Delete difficult_level
// @access Public
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in difficulty delete', req.params.id);
    try {
        // Remove question
        yield Difficulty_level_ts_1.default.deleteOne({ _id: req.params.id });
        const difficultyLevels = yield Difficulty_level_ts_1.default.find({});
        console.log('difficultyLevels returned: ', difficultyLevels);
        res.json(difficultyLevels);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
exports.default = router;
