declare const questionsData: ({
    question: string;
    answer: string;
    difficulty_level: string;
    subject_name: string;
    topic: string;
    question_year: number;
} | {
    question: string;
    answer: string;
    difficulty_level: string;
    subject_name: string;
    topic: string;
    question_year: string;
} | {
    question: string;
    answer: string;
    subject_name: string;
    topic: string;
    question_year: string;
    difficulty_level?: undefined;
} | {
    question: string;
    difficulty_level: string;
    subject_name: string;
    topic: string;
    question_year: number;
    answer?: undefined;
} | {
    question: string;
    answer: string;
    difficulty_level: string;
    subject_name: string;
    topic: string;
    question_year?: undefined;
})[];
export default questionsData;
