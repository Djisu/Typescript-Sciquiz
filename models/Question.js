import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String
  },
  difficulty_level: {
    type: String
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
    type: Number
  },
  question_stats: {
    type: Number
  },
  answeredBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user' // Assuming you have a "User" model for users
    }
  ],
  answer_flag: {
    type: Boolean
  },
  user_answer: {
    type: String
  }
});

const Question = mongoose.model('question', QuestionSchema);
export default Question;
