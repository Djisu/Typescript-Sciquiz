import { ObjectId } from "mongoose";

export interface ItestUnmarked {
    test_name: string;
    question: string;
    answer: string;
    difficulty_level: string;
    subject_name: string;
    topic: string;
    question_year: number;
    question_stats?: number;
    answeredBy: ObjectId[];
    answer_flag?: string;
    user_answer?: string;
    questionId: string;
  }
  
  // export interface TestUnmarkedState {
  //   testUnmarked: ItestUnmarked | null;
  //   loading: boolean;
  //   error: string | null;
  // }
  
  
  export interface TestsUnmarkedState {
    testsUnmarked: ItestUnmarked[];
    loading: boolean;
    error: string | null;
  }