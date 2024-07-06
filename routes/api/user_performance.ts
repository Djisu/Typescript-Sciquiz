/* eslint-disable semi */
import express, { Request, Response } from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import moment from 'moment';
import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';

import https from 'https';

import { check, validationResult } from 'express-validator';
import UserPerformance from '../../models/User_Performance.js';
import User from '../../models/User.js';

import sslRootCAs from 'ssl-root-cas';
import fs from 'fs';
import path from 'path';

interface IUperformance {
  _id: string; 
  test_name: string; 
  score: number; 
  formattedDate: string; 
  email: string; 
  test_details: string;
}

// Read the contents of the localhost.crt file
const certPath = path.join(__dirname, 'localhost.crt');
const crtContents = fs.readFileSync(certPath, 'utf8');

// Inject the self-signed certificate into the SSL/TLS root certificate store
sslRootCAs.inject([crtContents]);


//sslRootCAs.inject();

https.globalAgent.options.ca = sslRootCAs as unknown as (string | Buffer | (string | Buffer)[]);

import config from 'config';
const yahooAppPassword = config.get('yahooAppPassword');

// @route  POST api/userperformance
// @desc   find all userperformance
// @access Public
router.get('/', async (req: Request, res: Response) => {
  console.log("in userperformance router.get('/', ");

  try {
    const userperformance = await UserPerformance.find();
    //const userperformance = await UserPerformance.find(
    //  {},
    //  { userId: 1, _id: 1 }
    //);

    res.send(userperformance);
  } catch (err: any) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// Define an API endpoint to get the uPerformance by userid
router.get('/:email', async (req: Request, res: Response) => {
  console.log("in userperformance router.get('/:email', ", req.params.email);

  const email = req.params.email; // Removed unnecessary destructuring

  try {
    const result = await UserPerformance.find({ email: email });

    if (result.length > 0) {
      // Check if any records were found
      console.log('result=', result);
      res.json(result);
    } else {
      console.log('no records found'); // Adjusted log message
      res.json([]); // Respond with an empty array when no records are found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route  POST api/uPerformance
// @desc   Post uPerformance
// @access Public
//router.post(

router.post(
  '/',
  [
    check('userId', 'User is required').not().isEmpty(),
    check('test_name', 'Test is required').not().isEmpty(),
    check('email', 'Email address is required').not().isEmpty(),
    check('score', 'Score is required').not().isEmpty(),
    check('date', 'Date marks is required').not().isEmpty(),
    check('test_details', 'Test details is required').not().isEmpty()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //console.log('in user performance post api end point');
    try {
      const { userId, test_name, score, date, email, test_details } = req.body;

      const dateString = date;
      const formattedDate = moment(dateString, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );

      // Convert the userId to ObjectId
      //  const objectId = mongoose.Types.ObjectId(userId);
      const objectId = new mongoose.Types.ObjectId(userId);

      // Create a new test object
      const newUserPerformance = new UserPerformance({
        objectId,
        test_name,
        score,
        formattedDate,
        email,
        test_details
      });

      //  console.log('about to save to database', newUserPerformance);
      // Save the user performance
      await newUserPerformance.save();

      console.log('email', email);

      let emailBody =
        'Your test has a score of ' +
        score +
        '. Test details are as follows: ' +
        test_details +
        '. Visit your profile for details.';

      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = String(0);

      //Email sending
      const transporter = nodemailer.createTransport({
        host: 'smtp.yahoo.com',
        port: 587,
        auth: {
          user: 'pfleischer2002@yahoo.co.uk',
          pass: yahooAppPassword
        }
      } as TransportOptions);

      const mailOptions: nodemailer.SendMailOptions = {
        from: 'your_email@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is the email content in plain text.',
        html: '<p>This is the email content in HTML format.</p>'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
          console.log('Email sent: ' + (info as SentMessageInfo).response);
        }
    });

      console.log('end of sendmail processing');

      //End of Email

      res.json(newUserPerformance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// Define an API endpoint to update a question in test_details array
router.put(
  '/:id',
  [
    check('_id', 'User is required').not().isEmpty(),
    check('test_name', 'Test is required').not().isEmpty(),
    check('score', 'Score is required').not().isEmpty(),
    check('date', 'Date marks is required').not().isEmpty(),
    check('test_details', 'Test details is required').not().isEmpty()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('in user performance put api end point', req.body);

    try {
      const { _id, test_name, score, date, email, test_details } = req.body;

      const dateString = date;
      const formattedDate = moment(dateString, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );

      //Create tests object
      let uperformanceFields: IUperformance = {
        _id: _id || '',
        test_name: test_name || '',
        score: score || 0,
        formattedDate: formattedDate,
        email: email || '',
        test_details: test_details || ''
      };

      if (_id) uperformanceFields._id = _id;
      if (test_name) uperformanceFields.test_name = test_name;
      if (score) uperformanceFields.score = score;
      if (formattedDate) uperformanceFields.formattedDate = formattedDate;
      if (email) uperformanceFields.email = email;
      if (test_details) uperformanceFields.test_details = test_details;

      let uPerformanceItem = await UserPerformance.findOne({
        _id: req.params.id
      });

      if (uPerformanceItem) {
        // Update old question
        uPerformanceItem = await UserPerformance.findOneAndUpdate(
          { _id: req.params.id },
          { $set: uperformanceFields },
          { new: true }
        );
        return res.json(uPerformanceItem);
      } else {
        return res.status(404).json({ message: 'User performance not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route  DELETE api/test
// @desc   Delete test
// @access Public
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    console.log('in userperformance delete api', req.params.id);
    // Convert the userId to ObjectId
    //const objectId = mongoose.Types.ObjectId(userId);

    // Find the test by id and Remove question
    await UserPerformance.deleteOne({ _id: req.params.id });
    res.json({ msg: 'User performance deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
