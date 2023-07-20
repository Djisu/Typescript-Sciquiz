const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  test_name: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  marks: {
    type: Number
  },
  pass_marks: {
    type: Number
  },
  subject_name: {
    type: String,
    required: true
  }
});

module.exports = Tests = mongoose.model('tests', TestSchema);
