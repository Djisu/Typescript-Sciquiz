import ActionType from "."
import { Action } from "redux"

export interface DeleteCandidateTestsRequestAction extends Action<ActionType.DELETE_CANDIDATE_TESTS_REQUEST> {
    payload: string
}

export interface DeleteCandidateTestsSuccessAction extends Action<ActionType.DELETE_CANDIDATE_TESTS_SUCCESS>  {
    payload: string
}

export interface DeleteCandidateTestsFailAction extends Action< ActionType.DELETE_CANDIDATE_TESTS_FAIL>  {
    payload: string
}

export type DeleteCandidateAction = DeleteCandidateTestsRequestAction | DeleteCandidateTestsSuccessAction
| DeleteCandidateTestsFailAction
