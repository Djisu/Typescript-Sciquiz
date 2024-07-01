import ActionType from "."
import { Action } from "redux"

interface Question {
    question: string
    answer:  string
    difficulty_level:  string
    subject_name:  string
    topic:  string
    question_year:  number
  }

export interface CountedQuestionRequestAction extends Action< ActionType.COUNTED_QUESTION_REQUEST> {
    payload: string
}

export interface CountedQuestionSuccessAction extends Action<ActionType.COUNTED_QUESTION_SUCCESS> {
    payload: string
}

export interface CountedQuestionFailAction extends Action<ActionType.COUNTED_QUESTION_FAIL> {
    payload: string
}

export interface CountedQuestionLoadedAction extends Action<ActionType.COUNTED_QUESTION_LOADED>  {
    payload: Question
}

export type CountedQuestionAction = CountedQuestionRequestAction | CountedQuestionSuccessAction 
| CountedQuestionFailAction | CountedQuestionLoadedAction