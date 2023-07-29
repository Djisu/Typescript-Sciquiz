import mongoose from 'mongoose';
const Schema = mongoose.Schema

const DifficultySchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  }
});

const Difficultylevel = mongoose.model('difficulty', DifficultySchema);
export default Difficultylevel;
