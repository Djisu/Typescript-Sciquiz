/* eslint-disable semi */
const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Difficulty_level = require('../../models/Difficulty_level');

// @route  POST api/difficult_level
// @desc   Test route
// @access Public
router.get('/', (req, res) => {
  console.log(req.body);
  res.send('Difficulty_level route');
});

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

    try {
      let difficulty_level = await Difficulty_level.findOne({
        level: level
      });

      if (difficulty_level) {
        // Update old difficult level
        difficulty_level = await Difficulty_level.findOneAndUpdate(
          { level: req.body.level },
          { $set: difficultyFields },
          { new: true }
        );
        return res.json(difficulty_level);
      }

      // Create new difficult level
      difficulty_level = new Difficulty_level(difficultyFields);

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

module.exports = router;
