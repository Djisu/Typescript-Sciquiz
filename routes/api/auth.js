import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import auth from '../../middleware/auth.js';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';

import User from '../../models/User.js';
import Question from '../../models/Question.js';

const router = express.Router();
// @route  POST api/auth

// @desc   Test route
// @access Public
router.get('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/auth
// @desc   find all user
// @access Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.find().select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/auth
// @desc   Authenticate user and get token
// @access Public
// With auth, route becomes protective.
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //console.log('in login router.post(');

    // Destructure the req.body into email and password fields
    const { email, password } = req.body;

    try {
      // Request user from the database by using the user's email
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Compare user provided password to the user's password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //console.log("in auth router post user:", user)

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;

          res.json({ token });
        }
      );

      // res.send('User registered')
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

// GET API endpoint to get the count of answered questions for a specific user

router.get('/:userId/answered-questions', async (req, res) => {
  console.log(
    'in router.get(/auth/:userId/answered-questions',
    req.params.userId
  );

  try {
    const userId = req.params.userId;
    const objectId = new mongoose.Types.ObjectId(userId);

    const result = await Question.aggregate([
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
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: 'An error occurred while fetching answered questions count.'
    });
  }
});

export default router;
