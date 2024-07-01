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
 
interface StuTestsRequestAction extends Action<ActionType.STU_TESTS_REQUEST> {
    payload: string
}

interface StuTestsSuccessAction extends Action<ActionType.STU_TESTS_SUCCESS>  {
    payload: Test[]
}

interface StuTestsFailAction extends Action<ActionType.STU_TESTS_FAIL>  {
    payload: string
}

interface StuTestsLoadedAction extends Action<ActionType.STU_TESTS_LOADED>  {
    payload: Test[]
}

export type StuTestsAction = StuTestsRequestAction | StuTestsSuccessAction
| StuTestsFailAction | StuTestsLoadedAction

//StuTests