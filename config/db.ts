import mongoose, { ConnectOptions } from 'mongoose';
import config from 'config';

let db = config.get('mongoURI');

mongoose.set('strictQuery', true);

console.log('in db.js')

// Use the default connection URI or an environment variable if available
const mongoURI: string = process.env.MONGODB_URI || config.get('mongoURI');

const connectOptions: ConnectOptions = {
  dbName: 'test', // Replace with your database name
  // Add any other options you need, such as authentication credentials
};

const connectDB = async () => {

console.log('in connectDB')

  try {
    await mongoose.connect(mongoURI, connectOptions);
    console.log('MongoDB Connected...');

    // Event listeners for the connection
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from MongoDB');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;








// import mongoose, { ConnectOptions } from 'mongoose';
// import config from 'config';
// let db: string = config.get('mongoURI');

// mongoose.set('strictQuery', true);

// // Use the default connection URI or an environment variable if available
// db = process.env.MONGODB_URI || db;

// //console.log('db:', db);

// const connectDB = async () => {
//   try {
//     //console.log('in about to connect');

//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     //console.log('after await mongoose.connect(db');
//     //
//     // Event listeners for the connection
//     await mongoose.connection.on('connected', () => {
//       console.log('Connected to MongoDB');
//     });

//     await mongoose.connection.on('error', (err) => {
//       console.error(`MongoDB connection error: ${err}`);
//     });

//     await mongoose.connection.on('disconnected', () => {
//       console.log('Disconnected from MongoDB');
//     });
//     //

//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.log(err.message);

//     // Exit process with failure
//     process.exit(1);
//   }
// };

// export default connectDB;
