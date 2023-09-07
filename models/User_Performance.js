import mongoose from 'mongoose';
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
  },
  email: {
    type: String,
    required: true
  },
  test_details: {
    type: String,
    required: true
  }
});

const User_Performance = mongoose.model(
  'user_performance',
  User_PerformanceSchema
);
export default User_Performance;

//export default mongoose.model('user_performance', User_PerformanceSchema);
