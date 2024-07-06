import mongoose from 'mongoose';
declare const Tests: mongoose.Model<{
    answer: string;
    question: string;
    subject_name: string;
    test_name: string;
    marks?: number | undefined;
    pass_marks?: number | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    answer: string;
    question: string;
    subject_name: string;
    test_name: string;
    marks?: number | undefined;
    pass_marks?: number | undefined;
}> & {
    answer: string;
    question: string;
    subject_name: string;
    test_name: string;
    marks?: number | undefined;
    pass_marks?: number | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    answer: string;
    question: string;
    subject_name: string;
    test_name: string;
    marks?: number | undefined;
    pass_marks?: number | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    answer: string;
    question: string;
    subject_name: string;
    test_name: string;
    marks?: number | undefined;
    pass_marks?: number | undefined;
}>> & mongoose.FlatRecord<{
    answer: string;
    question: string;
    subject_name: string;
    test_name: string;
    marks?: number | undefined;
    pass_marks?: number | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Tests;
