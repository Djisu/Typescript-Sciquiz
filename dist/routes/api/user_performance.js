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
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const https_1 = __importDefault(require("https"));
const express_validator_1 = require("express-validator");
const User_Performance_js_1 = __importDefault(require("../../models/User_Performance.js"));
const ssl_root_cas_1 = __importDefault(require("ssl-root-cas"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Read the contents of the localhost.crt file
const certPath = path_1.default.join(__dirname, 'localhost.crt');
const crtContents = fs_1.default.readFileSync(certPath, 'utf8');
// Inject the self-signed certificate into the SSL/TLS root certificate store
ssl_root_cas_1.default.inject([crtContents]);
//sslRootCAs.inject();
https_1.default.globalAgent.options.ca = ssl_root_cas_1.default;
const config_1 = __importDefault(require("config"));
const yahooAppPassword = config_1.default.get('yahooAppPassword');
// @route  POST api/userperformance
// @desc   find all userperformance
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in userperformance router.get('/', ");
    try {
        const userperformance = yield User_Performance_js_1.default.find();
        //const userperformance = await UserPerformance.find(
        //  {},
        //  { userId: 1, _id: 1 }
        //);
        res.send(userperformance);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}));
// Define an API endpoint to get the uPerformance by userid
router.get('/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in userperformance router.get('/:email', ", req.params.email);
    const email = req.params.email; // Removed unnecessary destructuring
    try {
        const result = yield User_Performance_js_1.default.find({ email: email });
        if (result.length > 0) {
            // Check if any records were found
            console.log('result=', result);
            res.json(result);
        }
        else {
            console.log('no records found'); // Adjusted log message
            res.json([]); // Respond with an empty array when no records are found
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// @route  POST api/uPerformance
// @desc   Post uPerformance
// @access Public
//router.post(
router.post('/', [
    (0, express_validator_1.check)('userId', 'User is required').not().isEmpty(),
    (0, express_validator_1.check)('test_name', 'Test is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email address is required').not().isEmpty(),
    (0, express_validator_1.check)('score', 'Score is required').not().isEmpty(),
    (0, express_validator_1.check)('date', 'Date marks is required').not().isEmpty(),
    (0, express_validator_1.check)('test_details', 'Test details is required').not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //console.log('in user performance post api end point');
    try {
        const { userId, test_name, score, date, email, test_details } = req.body;
        const dateString = date;
        const formattedDate = (0, moment_1.default)(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD');
        // Convert the userId to ObjectId
        //  const objectId = mongoose.Types.ObjectId(userId);
        const objectId = new mongoose_1.default.Types.ObjectId(userId);
        // Create a new test object
        const newUserPerformance = new User_Performance_js_1.default({
            objectId,
            test_name,
            score,
            formattedDate,
            email,
            test_details
        });
        //  console.log('about to save to database', newUserPerformance);
        // Save the user performance
        yield newUserPerformance.save();
        console.log('email', email);
        let emailBody = 'Your test has a score of ' +
            score +
            '. Test details are as follows: ' +
            test_details +
            '. Visit your profile for details.';
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = String(0);
        //Email sending
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.yahoo.com',
            port: 587,
            auth: {
                user: 'pfleischer2002@yahoo.co.uk',
                pass: yahooAppPassword
            }
        });
        const mailOptions = {
            from: 'your_email@example.com',
            to: 'recipient@example.com',
            subject: 'Test Email',
            text: 'This is the email content in plain text.',
            html: '<p>This is the email content in HTML format.</p>'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
        console.log('end of sendmail processing');
        //End of Email
        res.json(newUserPerformance);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// Define an API endpoint to update a question in test_details array
router.put('/:id', [
    (0, express_validator_1.check)('_id', 'User is required').not().isEmpty(),
    (0, express_validator_1.check)('test_name', 'Test is required').not().isEmpty(),
    (0, express_validator_1.check)('score', 'Score is required').not().isEmpty(),
    (0, express_validator_1.check)('date', 'Date marks is required').not().isEmpty(),
    (0, express_validator_1.check)('test_details', 'Test details is required').not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in user performance put api end point', req.body);
    try {
        const { _id, test_name, score, date, email, test_details } = req.body;
        const dateString = date;
        const formattedDate = (0, moment_1.default)(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD');
        //Create tests object
        let uperformanceFields = {
            _id: _id || '',
            test_name: test_name || '',
            score: score || 0,
            formattedDate: formattedDate,
            email: email || '',
            test_details: test_details || ''
        };
        if (_id)
            uperformanceFields._id = _id;
        if (test_name)
            uperformanceFields.test_name = test_name;
        if (score)
            uperformanceFields.score = score;
        if (formattedDate)
            uperformanceFields.formattedDate = formattedDate;
        if (email)
            uperformanceFields.email = email;
        if (test_details)
            uperformanceFields.test_details = test_details;
        let uPerformanceItem = yield User_Performance_js_1.default.findOne({
            _id: req.params.id
        });
        if (uPerformanceItem) {
            // Update old question
            uPerformanceItem = yield User_Performance_js_1.default.findOneAndUpdate({ _id: req.params.id }, { $set: uperformanceFields }, { new: true });
            return res.json(uPerformanceItem);
        }
        else {
            return res.status(404).json({ message: 'User performance not found' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('in userperformance delete api', req.params.id);
        // Convert the userId to ObjectId
        //const objectId = mongoose.Types.ObjectId(userId);
        // Find the test by id and Remove question
        yield User_Performance_js_1.default.deleteOne({ _id: req.params.id });
        res.json({ msg: 'User performance deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}));
exports.default = router;
