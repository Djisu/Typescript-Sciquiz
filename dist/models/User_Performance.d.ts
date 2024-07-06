import mongoose from 'mongoose';
declare const User_Performance: mongoose.Model<{
    date: Date;
    email: string;
    test_name: string;
    score: number;
    test_details: string;
    userId?: mongoose.Types.ObjectId | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    date: Date;
    email: string;
    test_name: string;
    score: number;
    test_details: string;
    userId?: mongoose.Types.ObjectId | undefined;
}> & {
    date: Date;
    email: string;
    test_name: string;
    score: number;
    test_details: string;
    userId?: mongoose.Types.ObjectId | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    date: Date;
    email: string;
    test_name: string;
    score: number;
    test_details: string;
    userId?: mongoose.Types.ObjectId | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    date: Date;
    email: string;
    test_name: string;
    score: number;
    test_details: string;
    userId?: mongoose.Types.ObjectId | undefined;
}>> & mongoose.FlatRecord<{
    date: Date;
    email: string;
    test_name: string;
    score: number;
    test_details: string;
    userId?: mongoose.Types.ObjectId | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default User_Performance;
