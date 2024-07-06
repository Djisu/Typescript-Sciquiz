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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_js_1 = __importDefault(require("../../middleware/auth.js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const express_validator_1 = require("express-validator");
const User_js_1 = __importDefault(require("../../models/User.js"));
const Question_js_1 = __importDefault(require("../../models/Question.js"));
const router = express_1.default.Router();
// @route  POST api/auth
// @desc   Test route
// @access Public
router.get('/:id', auth_js_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_js_1.default.findById(req.params.id).select('-password');
        res.json(user);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  POST api/auth
// @desc   find all user
// @access Public 
router.get('/', auth_js_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('in router.get(/, auth')
    try {
        const user = yield User_js_1.default.findById(req.user.id).select('-password');
        //console.log('user== ', user)
        res.json(user);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}));
// // @route  POST api/auth
// // @desc   find all user
// // @access Public 
// router.get('/', auth, async (req, res) => {
//   console.log('in router.get(/, auth')
//   try {
//     const user = await User.find(req.user.id).select('-password');
//     console.log('user== ', user)
//     res.json(user);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send('Server Error');
//   }
// });
// @route  POST api/auth
// @desc   Authenticate user and get token
// @access Public
// With auth, route becomes protective.
router.post('/', [
    (0, express_validator_1.check)('email', 'Please include a valid email').isEmail(),
    (0, express_validator_1.check)('password', 'Password is required').exists()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = yield User_js_1.default.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        const payload = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            }
        };
        const token = jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret'), {
            expiresIn: 360000
        });
        res.json({ token });
    }
    catch (err) {
        throw err;
    }
}));
// GET API endpoint to get the count of answered questions for a specific user
router.get('/:userId/answered-questions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in router.get(/auth/:userId/answered-questions', req.params.userId);
    try {
        const userId = req.params.userId;
        const objectId = new mongoose_1.default.Types.ObjectId(userId);
        const result = yield Question_js_1.default.aggregate([
            {
                $match: {
                    answeredBy: objectId
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]).exec();
        if (result.length > 0) {
            res.json(result);
        }
        else {
            res.json([]);
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'An error occurred while fetching answered questions count.'
        });
    }
}));
exports.default = router;
