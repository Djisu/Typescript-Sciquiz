"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
mongoose_1.default.set('strictQuery', true);
// Use the default connection URI or an environment variable if available
const mongoURI = process.env.MONGODB_URI || config_1.default.get('mongoURI');
const connectOptions = {
    dbName: 'test', // Replace with your database name
    // Add any other options you need, such as authentication credentials
};
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(mongoURI, connectOptions);
        console.log('MongoDB Connected...');
        // Event listeners for the connection
        mongoose_1.default.connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });
        mongoose_1.default.connection.on('error', (err) => {
            console.error(`MongoDB connection error: ${err}`);
        });
        mongoose_1.default.connection.on('disconnected', () => {
            console.log('Disconnected from MongoDB');
        });
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
exports.default = connectDB;
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
