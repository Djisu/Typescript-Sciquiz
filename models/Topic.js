const mongoose = require('mongoose');

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

module.exports = Topic = mongoose.model('topic', TopicSchema);
