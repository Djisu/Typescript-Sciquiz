import mongoose from 'mongoose';
declare const Difficultylevel: mongoose.Model<{
    level: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    level: string;
}> & {
    level: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    level: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    level: string;
}>> & mongoose.FlatRecord<{
    level: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Difficultylevel;
