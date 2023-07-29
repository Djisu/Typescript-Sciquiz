import mongoose from 'mongoose';

const TopicSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  subject_name: {
    type: String,
    required: true
  }
});

const Topic = mongoose.model('topic', TopicSchema);
export default Topic;

//export default Topic = monconst Tests = mongoose.model('tests', TestsSchema);
//export default Tests;goose.model('topic', TopicSchema);
