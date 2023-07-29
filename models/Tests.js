import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TestsSchema = new Schema({
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

const Tests = mongoose.model('tests', TestsSchema);
export default Tests;

//export DefaultTests = mongoose.model('tests', TestSchema);
