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

interface PutTestRequestAction extends Action<ActionType.PUT_TEST_REQUEST> {
    payload: string
}

interface PutTestSuccessAction extends Action<ActionType.PUT_TEST_SUCCESS> {
    payload: Test
}

interface PutTestFailAction extends Action<ActionType.PUT_TEST_FAIL> {
    payload: string
}

export type PutTestAction = PutTestRequestAction | PutTestSuccessAction
| PutTestFailAction

//PutTest