import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import auth from '../../middleware/auth.js';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';

import User from '../../models/User.js';
import Question from '../../models/Question.js';
import { AuthenticatedRequest } from './profile.js';

const router = express.Router();
// @route  POST api/auth

// @desc   Test route
// @access Public
router.get('/:id', auth, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (err: any) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/auth
// @desc   find all user
// @access Public 
router.get('/', auth, async (req: Request, res: Response) => {
  //console.log('in router.get(/, auth')
 
  try {
    const user = await User.findById((req as AuthenticatedRequest).user.id).select('-password');

    //console.log('user== ', user)

    res.json(user);
  } catch (err: any) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

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
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    console.log('in login')

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

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

      const token = jwt.sign(
        payload,
        config.get('jwtSecret') as jwt.Secret,
        {
          expiresIn: 360000
        }
      );
        res.json({ token });
      } catch (err) {
        throw err;
      }
  }
);

// GET API endpoint to get the count of answered questions for a specific user

router.get('/:userId/answered-questions', async (req: Request, res: Response) => {
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
  } catch (error: any) {
    console.error('Error:', error);
    res.status(500).json({
      error: 'An error occurred while fetching answered questions count.'
    });
  }
});

export default router;
