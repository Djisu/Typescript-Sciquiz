import  express from 'express'
const  router = express.Router()
import  bcrypt from 'bcryptjs'
import auth from '../../middleware/auth.js';
import  jwt from 'jsonwebtoken'
import config from 'config';
import  { check, validationResult } from 'express-validator'

import User from '../../models/User.js';

// @route  POST api/auth

// @desc   Test route
// @access Public
router.get('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password')
    res.json(user)
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

// @route  POST api/auth
// @desc   find all user
// @access Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.find().select('-password')
    res.json(user)
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

// @route  POST api/auth
// @desc   Authenticate user and get token
// @access Public
// With auth, route becomes protective.
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

//console.log('in router.post(');

    // Destructure the req.body into email and password fields
    const { email, password } = req.body

    try {
      // Request user from the database by using the user's email
      let user = await User.findOne({ email })

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      // Compare user provided password to the user's password stored in the database
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

//console.log("in auth router post user:", user)


      // Return jsonwebtoken
      const payload = {
        user: {
            id: user.id,       
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
      }
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err

          res.json({ token });
        },
      )

      // res.send('User registered')
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error')
    }
  },
)

export default  router
