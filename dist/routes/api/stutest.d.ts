declare const router: import("express-serve-static-core").Router;
export interface IStutests {
    userId: string;
    test_name: string;
    question: string;
    answer: string;
    marks: number;
    pass_marks: number;
    subject_name: string;
}
export default router;
