/* eslint-disable semi */
import express, { Request, Response } from 'express';
const router = express.Router();
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';

import User from '../../models/User.js';

// @route  POST api/users
// @desc   Test route
// @access Public
router.get('/', (req: Request, res: Response) => {
   console.log('in api router.get')

  console.log(req.body);
  res.send('User route');
});

// @route  POST api/users
// @desc   Register user
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    console.log('POST api/users', req.body);

    try {
      // See if users exists
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists ' }] });
      }

      // Get user's gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      // Create new user instance
      user = new User({
        name,
        email,
        password,
        avatar
      });

      // Encript password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
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

// Update the 'isAdmin' field for a specific user by their email
router.put(
  '/:email',
  [check('email', 'Please include a valid email').isEmail()],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in router.put(/:email', req.params.email);

    const email = req.params.email;
    const isAdmin = req.body.isAdmin;

    try {
      const user = await User.findOneAndUpdate(
        { email: email },
        { isAdmin: isAdmin },
        { new: true }
      );

      if (user) {
        console.log('Admin created', user);
        return res.json(user);
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
