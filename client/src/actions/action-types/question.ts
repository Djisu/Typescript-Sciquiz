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
  

interface QuestionRequestAction extends Action<ActionType.QUESTION_REQUEST> {
    payload: string
}

interface QuestionSuccessAction extends Action<ActionType.QUESTION_SUCCESS> {
    payload: Question
}

interface QuestionFailAction extends Action<ActionType.QUESTION_FAIL> {
    payload: string
}

interface QuestionLoadedAction extends Action<ActionType.QUESTION_LOADED> {
    payload: Question
}

export type QuestionAction = QuestionRequestAction | QuestionSuccessAction
| QuestionFailAction | QuestionLoadedAction

