import mongoose from 'mongoose';
import config from 'config';
let db = config.get('mongoURI');

mongoose.set('strictQuery', true);

// Use the default connection URI or an environment variable if available
db = process.env.MONGODB_URI || db;

//console.log('db:', db);

const connectDB = async () => {
  try {
    //console.log('in about to connect');

    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    //console.log('after await mongoose.connect(db');
    //
    // Event listeners for the connection
    await mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
    });

    await mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    await mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from MongoDB');
    });
    //

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);

    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
