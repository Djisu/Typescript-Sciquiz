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

interface TestsRequestAction extends Action<ActionType.TESTS_REQUEST> {
    payload: string
}

interface TestsSuccessAction extends Action<ActionType.TESTS_SUCCESS> {
    payload: Test
}

interface TestsFailAction extends Action<ActionType.TESTS_FAIL> {
    payload: string
}

interface TestsLoadedAction extends Action<ActionType.TESTS_LOADED> {
    payload: Test
}

export type TestsAction = TestsRequestAction | TestsSuccessAction
| TestsFailAction | TestsLoadedAction

//Tests