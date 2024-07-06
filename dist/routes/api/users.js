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
const gravatar_1 = __importDefault(require("gravatar"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const express_validator_1 = require("express-validator");
const User_js_1 = __importDefault(require("../../models/User.js"));
// @route  POST api/users
// @desc   Test route
// @access Public
router.get('/', (req, res) => {
    console.log('in api router.get');
    console.log(req.body);
    res.send('User route');
});
// @route  POST api/users
// @desc   Register user
// @access Public
router.post('/', [
    (0, express_validator_1.check)('name', 'Name is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Please include a valid email').isEmail(),
    (0, express_validator_1.check)('password', 'Please enter a password with 6 or more characters').isLength({
        min: 6
    })
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    console.log('POST api/users', req.body);
    try {
        // See if users exists
        let user = yield User_js_1.default.findOne({ email: email });
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'User already exists ' }] });
        }
        // Get user's gravatar
        const avatar = gravatar_1.default.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        // Create new user instance
        user = new User_js_1.default({
            name,
            email,
            password,
            avatar
        });
        // Encript password
        const salt = yield bcryptjs_1.default.genSalt(10);
        user.password = yield bcryptjs_1.default.hash(password, salt);
        yield user.save();
        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
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
// Update the 'isAdmin' field for a specific user by their email
router.put('/:email', [(0, express_validator_1.check)('email', 'Please include a valid email').isEmail()], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in router.put(/:email', req.params.email);
    const email = req.params.email;
    const isAdmin = req.body.isAdmin;
    try {
        const user = yield User_js_1.default.findOneAndUpdate({ email: email }, { isAdmin: isAdmin }, { new: true });
        if (user) {
            console.log('Admin created', user);
            return res.json(user);
        }
        else {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}));
exports.default = router;
