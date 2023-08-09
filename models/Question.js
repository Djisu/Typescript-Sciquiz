import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  difficulty_level: {
    type: String,
    required: true
  },
  subject_name: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  question_year: {
    type: Number,
    required: true
  },
  question_stats: {
    type: Number
  },
  answeredBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', // Assuming you have a "User" model for users
    },
  ],
});

const Question = mongoose.model('question', QuestionSchema);
export default Question;


