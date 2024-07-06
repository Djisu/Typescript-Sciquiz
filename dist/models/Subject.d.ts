import mongoose from 'mongoose';
declare const Subject: mongoose.Model<{
    subject_name: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    subject_name: string;
}> & {
    subject_name: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    subject_name: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    subject_name: string;
}>> & mongoose.FlatRecord<{
    subject_name: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Subject;
