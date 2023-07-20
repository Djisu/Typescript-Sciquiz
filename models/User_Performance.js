const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User_PerformanceSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  test_name: {
    type: String,
    required: true
  },

  score: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user_performance', User_PerformanceSchema);
