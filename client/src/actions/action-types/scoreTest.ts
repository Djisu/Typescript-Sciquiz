import ActionType from ".";
import { Action } from "redux";

export interface Test {
    _id: string
    test_name: string
    question: string
    answer: string
    marks: number
    pass_marks: number
    subject_name: string
  }
  

interface ScoreTestRequestAction extends Action<ActionType.SCORE_TEST_REQUEST> {
    payload: string
}

interface ScoreTestSuccessAction extends Action<ActionType.SCORE_TEST_SUCCESS> {
    payload: Test
}

interface ScoreTestFailAction extends Action<ActionType.SCORE_TEST_FAIL> {
    payload: string
}

export type ScoreTestAction = ScoreTestRequestAction | ScoreTestSuccessAction
| ScoreTestFailAction 

//Test
