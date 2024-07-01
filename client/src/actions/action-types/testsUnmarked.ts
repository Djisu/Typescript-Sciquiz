import { ObjectId } from "mongoose";
import ActionType from ".";
import { Action } from "redux";

export interface TestUnmarked {
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

interface TestsUnmarkedRequestAction extends Action<ActionType.TESTS_UNMARKED_REQUEST> {
    payload: string
}

interface TestsUnmarkedSuccessAction extends Action<ActionType.TESTS_UNMARKED_SUCCESS> {
    payload: TestUnmarked
}

interface TestsUnmarkedFailAction extends Action<ActionType.TESTS_UNMARKED_FAIL> {
    payload: string
}

interface TestsUnmarkedLoadedAction extends Action<ActionType.TESTS_UNMARKED_LOADED> {
    payload: TestUnmarked
}

export type TestsUnmarkedAction = TestsUnmarkedRequestAction | TestsUnmarkedSuccessAction
| TestsUnmarkedFailAction | TestsUnmarkedLoadedAction

