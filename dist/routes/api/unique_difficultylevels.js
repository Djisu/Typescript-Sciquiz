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
// @route  POST api/uniquedifficultylevels
// @desc   find all uniquedifficultylevels
// @access Public
// Define a GET endpoint to fetch unique uniquedifficultylevelss
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  console.log('/unique_difficultylevel backend api');
    try {
        const uniquedifficultylevels = yield Question_js_1.default.distinct('difficulty_level');
        //console.log('uniquedifficultylevels:::', uniquedifficultylevels);
        res.json(uniquedifficultylevels);
    }
    catch (error) {
        console.error('Error fetching unique difficulty levels:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
