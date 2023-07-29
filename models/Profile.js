import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  school: {
    type: String,
    required: true
  },

  status: {
    type: String
  },
  name: {
    type: String
  }
});

const Profile = mongoose.model('profile', ProfileSchema);
export default Profile;
