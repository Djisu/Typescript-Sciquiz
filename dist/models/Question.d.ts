import mongoose from 'mongoose';
declare const Question: mongoose.Model<{
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    difficulty_level?: string | undefined;
    answer?: string | undefined;
    question_year?: number | undefined;
    question_stats?: number | undefined;
    answer_flag?: boolean | undefined;
    user_answer?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    difficulty_level?: string | undefined;
    answer?: string | undefined;
    question_year?: number | undefined;
    question_stats?: number | undefined;
    answer_flag?: boolean | undefined;
    user_answer?: string | undefined;
}> & {
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    difficulty_level?: string | undefined;
    answer?: string | undefined;
    question_year?: number | undefined;
    question_stats?: number | undefined;
    answer_flag?: boolean | undefined;
    user_answer?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    difficulty_level?: string | undefined;
    answer?: string | undefined;
    question_year?: number | undefined;
    question_stats?: number | undefined;
    answer_flag?: boolean | undefined;
    user_answer?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    difficulty_level?: string | undefined;
    answer?: string | undefined;
    question_year?: number | undefined;
    question_stats?: number | undefined;
    answer_flag?: boolean | undefined;
    user_answer?: string | undefined;
}>> & mongoose.FlatRecord<{
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    difficulty_level?: string | undefined;
    answer?: string | undefined;
    question_year?: number | undefined;
    question_stats?: number | undefined;
    answer_flag?: boolean | undefined;
    user_answer?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Question;
