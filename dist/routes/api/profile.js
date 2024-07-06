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
const router = express_1.default.Router();
const auth_ts_1 = __importDefault(require("../../middleware/auth.js"));
const express_validator_1 = require("express-validator");
const Profile_ts_1 = __importDefault(require("../../models/Profile.js"));
const User_ts_1 = __importDefault(require("../../models/User.js"));
// // @route  POST api/profile
// // @desc   Test route
// // @access Public
// router.get('/', (req: Request, res: Response) => res.send('profile route'))
// @route  GET api/profile/me
// @desc   Get current user profile
// @access Private
router.get('/me', auth_ts_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield Profile_ts_1.default.findOne({
            user: req.user.id
        })
            .populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  POST api/profile
// @desc   Create or update a user profile
// @access Private
// Define your validation middleware
const profileValidation = [
    (0, express_validator_1.check)('school', 'School is required').not().isEmpty(),
    (0, express_validator_1.check)('status', 'Status is required').not().isEmpty(),
    (0, express_validator_1.check)('name', 'Name is required').not().isEmpty(),
    (0, express_validator_1.check)('bio', 'Bio is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email address is required').not().isEmpty(),
];
router.post('/', [
    auth_ts_1.default,
    ...profileValidation,
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Cast the req object to the appropriate type
    const customReq = req;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in POST api/profile post/put');
    const { user, school, status, bio, name, email } = req.body;
    // Build profile object
    const profileFields = {
        user: user,
        school: school || '',
        status: status || '',
        bio: bio || '',
        name: name || '',
        email: email || '',
    };
    profileFields.user = user;
    if (school)
        profileFields.school = school;
    if (status)
        profileFields.status = status;
    if (bio) {
        profileFields.bio = bio;
    }
    if (name)
        profileFields.name = name;
    if (email)
        profileFields.email = email;
    try {
        //      let profile = await Profile.findOne({ user: req.user.id });
        //
        //      if (profile) {
        //        // Update
        //        profile = await Profile.findOneAndUpdate(
        //          { user: req.user.id },
        //          { $set: profileFields },
        //          { new: true }
        //        );
        //        return res.json(profile);
        //      }
        // Create new profile
        let profile = new Profile_ts_1.default(profileFields);
        yield profile.save();
        //experiment
        Profile_ts_1.default.updateMany({}, [
            {
                $lookup: {
                    from: 'User', // The name of the User collection
                    localField: profileFields.user, // The field in the Profile collection
                    foreignField: user, // The field in the User collection
                    as: 'user_data'
                }
            },
            {
                $unwind: '$user_data'
            },
            {
                $set: {
                    email: '$user_data.email'
                }
            }
        ]);
        //end of experiment
        return res.json(profile);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  PUT api/profile
// @desc   Update a user profile
// @access Private
router.put('/', [
    auth_ts_1.default,
    ...profileValidation,
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('in POST api/profile post/put');
    const { user, school, status, name, bio, email } = req.body;
    // // Build profile object
    // const profileFields = {};
    // profileFields.user = user;
    // if (school) profileFields.school = school;
    // if (status) profileFields.status = status;
    // if (name) profileFields.name = name;
    // if (bio) profileFields.bio = bio;
    // if (email) profileFields.email = email;
    // Build profile object
    const profileFields = {
        user: user,
        school: school || '',
        status: status || '',
        bio: bio || '',
        name: name || '',
        email: email || '',
    };
    // profileFields.user = user;
    // if (school) profileFields.school = school;
    // if (status) profileFields.status = status;
    // if (bio) {
    //   profileFields.bio = bio;
    // }
    // if (name) profileFields.name = name;
    // if (email) profileFields.email = email;
    try {
        let profile = yield Profile_ts_1.default.findOne({ user: user });
        if (profile) {
            // Update
            profile = yield Profile_ts_1.default.findOneAndUpdate({ user: user }, { $set: profileFields }, { new: true });
            return res.json(profile);
        }
        else {
            console.log('Profile not found');
            res.status(404).send('Profile not found');
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  GET api/profile
// @desc   GET all profiles
// @access Public
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in profile router.get(/');
    try {
        //const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        const profiles = yield Profile_ts_1.default.aggregate([
            {
                $lookup: {
                    from: "users", // Name of the user collection
                    localField: "user", // Field in the profiles collection
                    foreignField: "_id", // Field in the users collection
                    as: "userDetails" // Alias for the joined user details
                }
            },
            {
                $unwind: "$userDetails" // Deconstruct the array field created by $lookup
            },
            {
                $project: {
                    _id: 1, // Include the profile _id field
                    name: 1, // Include other profile fields you want
                    status: 1,
                    school: 1,
                    bio: 1,
                    user: 1, // Include user fields as profile fields
                    avatar: "$userDetails.avatar",
                    email: "$userDetails.email",
                }
            }
        ]);
        console.log('backend FETCHED profiles', profiles);
        return res.json(profiles);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
// @route  GET api/profile/user/:user_id
// @desc   GET profile by user ID
// @access Public
router.get('/user/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('router.get(/user/:userId', req.params.userId);
    const newUserId = new mongoose_1.default.Types.ObjectId(req.params.userId);
    if (!mongoose_1.default.Types.ObjectId.isValid(newUserId)) {
        return res.status(400).json({ message: 'Invalid userId' });
    }
    console.log('newUserId:: ', newUserId);
    try {
        const profile = yield Profile_ts_1.default.aggregate([
            {
                $match: {
                    user: newUserId // Use the newUserId variable
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetails"
                }
            },
            {
                $unwind: "$userDetails"
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    status: 1,
                    school: 1,
                    bio: 1,
                    user: 1,
                    avatar: "$userDetails.avatar",
                    email: "$userDetails.email",
                    userName: "$userDetails.name",
                }
            }
        ]);
        console.log('fetched profileXXXXX=', profile);
        console.log('=================================================');
        return res.json(profile);
    }
    catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error');
    }
}));
// @route  GET api/profile/:status
// @desc   GET profile by status
// @access Public
router.get('/:status', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  console.log('in profile by status', req.params.status);
    //  console.log('req==', req);
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const profile = yield Profile_ts_1.default.find({
            status: { $eq: req.params.status }
        });
        if (!profile)
            return res.status(400).json({ msg: 'Profile not found' });
        // console.log('profile===', profile)
        res.json(profile);
    }
    catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error');
    }
}));
// @route  DELETE api/profile/:id
// @desc   Delete profile, user & posts
// @access Private
router.delete('/:id', auth_ts_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = useParams();
    try {
        // Remove profile
        yield Profile_ts_1.default.findOneAndRemove({ user: id });
        // Remove user
        yield User_ts_1.default.findOneAndRemove({ _id: id });
        res.json({ msg: 'User deleted' });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));
exports.default = router;
function useParams() {
    throw new Error('Function not implemented.');
}
