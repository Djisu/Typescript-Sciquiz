import mongoose from 'mongoose';
declare const TestQuestion: mongoose.Model<{
    difficulty_level: string;
    answer: string;
    question_year: number;
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    answer_flag: string;
    test_name: string;
    questionId: string;
    question_stats?: number | undefined;
    user_answer?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    difficulty_level: string;
    answer: string;
    question_year: number;
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    answer_flag: string;
    test_name: string;
    questionId: string;
    question_stats?: number | undefined;
    user_answer?: string | undefined;
}> & {
    difficulty_level: string;
    answer: string;
    question_year: number;
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    answer_flag: string;
    test_name: string;
    questionId: string;
    question_stats?: number | undefined;
    user_answer?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    difficulty_level: string;
    answer: string;
    question_year: number;
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    answer_flag: string;
    test_name: string;
    questionId: string;
    question_stats?: number | undefined;
    user_answer?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    difficulty_level: string;
    answer: string;
    question_year: number;
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    answer_flag: string;
    test_name: string;
    questionId: string;
    question_stats?: number | undefined;
    user_answer?: string | undefined;
}>> & mongoose.FlatRecord<{
    difficulty_level: string;
    answer: string;
    question_year: number;
    question: string;
    subject_name: string;
    topic: string;
    answeredBy: mongoose.Types.ObjectId[];
    answer_flag: string;
    test_name: string;
    questionId: string;
    question_stats?: number | undefined;
    user_answer?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default TestQuestion;
