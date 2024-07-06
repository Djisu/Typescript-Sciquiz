import mongoose from 'mongoose';
declare const Topic: mongoose.Model<{
    subject_name: string;
    topic: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    subject_name: string;
    topic: string;
}> & {
    subject_name: string;
    topic: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    subject_name: string;
    topic: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    subject_name: string;
    topic: string;
}>> & mongoose.FlatRecord<{
    subject_name: string;
    topic: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Topic;
