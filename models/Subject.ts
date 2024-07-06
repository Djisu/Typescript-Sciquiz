import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true
  }
});

const Subject = mongoose.model('subject', SubjectSchema);
export default Subject;

//export default Subject = mongoose.model('subject', SubjectSchema);
