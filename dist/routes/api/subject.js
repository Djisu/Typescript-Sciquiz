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
const Subject_js_1 = __importDefault(require("../../models/Subject.js"));
// @route  POST api/question
// @desc   find all question
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in subject router.get('/', ");
    try {
        const subject = yield Subject_js_1.default.find({}, { subject_name: 1, _id: 1 });
        res.send(subject);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  POST api/subject
// @desc   Post subject
// @access Public
router.post('/', [(0, express_validator_1.check)('subject_name', 'Subject is required').not().isEmpty()], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { subject_name } = req.body;
    // Build profile object
    const subjectFields = {
        subject_name: subject_name
    };
    //if (subject_name) subjectFields.subject_name = subject_name;
    try {
        let subject = yield Subject_js_1.default.findOne({
            subject_name: subject_name
        });
        if (subject) {
            // Update old difficult level
            subject = yield Subject_js_1.default.findOneAndUpdate({ subject_name: req.body.subject_name }, { $set: subjectFields }, { new: true });
            return res.json(subject);
        }
        // Create new difficult level
        subject = new Subject_js_1.default(subjectFields);
        yield subject.save();
        return res.json(subject);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  DELETE api/subject
// @desc   Delete subject
// @access Public
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in subject delete api', req.params.id);
    try {
        // Remove question
        yield Subject_js_1.default.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Subject deleted' });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
exports.default = router;
