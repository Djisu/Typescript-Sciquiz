const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  //  question_no: {
  //    type: String,
  //    required: true
  //  },
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
  }
});

module.exports = Question = mongoose.model('question', QuestionSchema);
