/* eslint-disable semi */
import express from 'express';
import auth from '../../middleware/auth.js';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Difficultylevel from '../../models/Difficulty_level.js';

// @route  POST api/difficult_level
// @desc   find all difficult_level
// @access Public
router.get('/',  async (req, res) => {
    console.log("in router.get('/', ");
  try {
    const difficulty_level = await Difficultylevel.find(
      {},
      { level: 1, _id: 1 }
    );

    res.send(difficulty_level)
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

// @route  POST api/difficult_level
// @desc   Post difficult_level
// @access Public
router.post(
  '/',
  [check('level', 'Difficulty level is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

   

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { level } = req.body;

    // Build profile object
    const difficultyFields = {};

    if (level) difficultyFields.level = level;
 console.log("in router.post Difficultylevel", req.body)

    try {
      let difficulty_level = await Difficultylevel.findOne({
        level: level
      });
console.log('XXXXXXXXX in router.post Difficultylevel');

      if (difficulty_level) {
        // Update old difficult level
        difficulty_level = await Difficultylevel.findOneAndUpdate(
          { level: req.body.level },
          { $set: difficultyFields },
          { new: true }
        );
        return res.json(difficulty_level);
      }

      // Create new difficult level
      difficulty_level = new Difficultylevel(difficultyFields);

      await difficulty_level.save();
      return res.json(difficulty_level);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  DELETE api/difficult_level
// @desc   Delete difficult_level
// @access Public
router.delete('/:id', async (req, res) => {
  console.log('in difficulty delete', req.params.id);

  try {
    // Remove question
    await Difficulty_level.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Difficult level deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default  router;
