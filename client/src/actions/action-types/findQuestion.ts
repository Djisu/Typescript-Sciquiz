import ActionType from ".";
import { Action } from "redux";

export interface Question {
    question: string
    answer:  string
    difficulty_level:  string
    subject_name:  string
    topic:  string
    question_year:  number
  }

interface FindQuestionRequestAction extends Action<ActionType.FIND_QUESTION_REQUEST> {
    payload: string
}

interface FindQuestionSuccessAction extends Action<ActionType.FIND_QUESTION_SUCCESS> {
    payload: Question
}

interface FindQuestionFailAction extends Action<ActionType.FIND_QUESTION_FAIL> {
    payload: string
}

interface FindQuestionLoadedAction extends Action<ActionType.FIND_QUESTION_LOADED> {
    payload: Question[]
}

export type FindQuestionAction = FindQuestionRequestAction | FindQuestionSuccessAction
| FindQuestionFailAction | FindQuestionLoadedAction


