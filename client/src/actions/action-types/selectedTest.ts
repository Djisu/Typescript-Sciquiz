import ActionType from ".";
import { Action } from "redux";

export interface SelectedTest {
    test_name: string
    question: string
    answer: string
    marks: number
    pass_marks: number
    subject_name: string
  }

interface SelectedTestRequestAction extends Action<ActionType.SELECTED_TEST_REQUEST> {
    payload: string
}

interface SelectedTestSuccessAction extends Action<ActionType.SELECTED_TEST_SUCCESS> {
    payload: SelectedTest
}

interface SelectedTestFailAction extends Action<ActionType.SELECTED_TEST_FAIL> {
    payload: string
}

interface SelectedTestLoadedAction extends Action<ActionType.SELECTED_TEST_LOADED> {
    payload: SelectedTest
}

export type SelectedTestAction = SelectedTestRequestAction | SelectedTestSuccessAction
| SelectedTestFailAction | SelectedTestLoadedAction

//SelectedTest