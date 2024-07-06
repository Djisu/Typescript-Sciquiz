import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StuTestsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
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

const stuTests = mongoose.model('stutests', StuTestsSchema);
export default stuTests;
