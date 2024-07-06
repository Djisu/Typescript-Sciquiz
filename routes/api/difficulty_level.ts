/* eslint-disable semi */
import express, { Request, Response } from 'express';
import auth from '../../middleware/auth.js';
const router = express.Router();

import { check, validationResult } from 'express-validator';

import Difficultylevel from '../../models/Difficulty_level.js';
import Question from '../../models/Question.js';

export interface Difficultylevel {
  level: string
}

// @route  POST api/get/
// @desc   find all topic
// @access Public
router.get('/', async (req: Request, res: Response) => {
  console.log("in difficultlevels router.get('/', ");

  try {

    const difficultyLevels = await Difficultylevel.find({});

    console.log('difficultyLevels returned: ', difficultyLevels)

    res.json(difficultyLevels);
  } catch (err) {
    console.error('Error:', err);
    res.json([]);
  }
});

// @route  POST api/get/
// @desc   find all topic
// @access Public
router.get('/:difficulty_level', async (req: Request, res: Response) => {
  console.log("in router.get('/:difficulty_level', ");

  const subject_name = req.query.subject_name;

  try {

    const distinctDifficultyLevels = await Question.aggregate([
      {
        $match: {
          subject_name: subject_name
        }
      },
      {
        $group: {
          _id: "$difficulty_level",
          difficulty_level: { $first: "$difficulty_level" }
        }
      },
      // {
      //   $project: {
      //     _id: 0
      //   }
      // }
    ]);

    console.log('distinctDifficultyLevels returned: ', distinctDifficultyLevels)

    res.json(distinctDifficultyLevels);
  } catch (err) {
    console.error('Error:', err);
    res.json([]);
  }
});

// // @route  POST api/topic/:topic
// // @desc   find all topic
// // @access Public
// router.get('/:difficulty_level', async (req: Request, res: Response) => {
//   console.log("in router.get('/:difficulty_level', ");

//   const subject_name = req.query.subject_name;

//   try {
//     const subjectNameParam = 'YourSubjectName'; // Replace with the subject_name you want to filter by

//     const difficultyLevels = await Question.distinct('difficulty_level', {
//       subject_name: subject_name
//     });

//     //console.log('Distinct Difficulty Levels:', difficultyLevels);
//     res.json(difficultyLevels);
//   } catch (err) {
//     console.error('Error:', err);
//     res.json([]);
//   }
// });

// @route  POST api/difficult_level
// @desc   Post difficult_level
// @access Public
router.post(
  '/',
  [check('level', 'Difficulty level is required').not().isEmpty()],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { level }: Difficultylevel = req.body;

    // Build profile object
    const difficultyFields: any = {};

    if (level) difficultyFields.level = level;
    console.log('in router.post Difficultylevel', req.body);

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

        console.log('difficulty_level: ', difficulty_level)

        return res.json(difficulty_level);
      }

     

      // Create new difficult level
      difficulty_level = new Difficultylevel(difficultyFields);

      await difficulty_level.save();

      console.log('difficulty_level created= ', difficulty_level)

      const difficultyLevels = await Difficultylevel.find({});

      console.log('difficultyLevels returned: ', difficultyLevels)

      res.json(difficultyLevels);
      
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  DELETE api/difficult_level
// @desc   Delete difficult_level
// @access Public
router.delete('/:id', async (req: Request, res: Response) => {
  console.log('in difficulty delete', req.params.id);

  try {
    // Remove question
    await Difficultylevel.deleteOne({ _id: req.params.id });


    const difficultyLevels = await Difficultylevel.find({});

    console.log('difficultyLevels returned: ', difficultyLevels)

    res.json(difficultyLevels);

  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
