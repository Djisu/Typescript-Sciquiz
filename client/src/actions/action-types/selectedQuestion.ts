import ActionType from ".";
import { Action } from "redux";

export interface SelectedQuestion {
    _id: string
    test_name: string
    questionId: string
    question: string
    answer: string
    difficulty_level: string
    subject_name: string
    topic: string
    question_year: Date
    user_answer: string
  }

interface SelectedQuestionRequestAction extends Action<ActionType.SELECTED_QUESTION_REQUEST> {
    payload: string
}

interface SelectedQuestionSuccessAction extends Action<ActionType.SELECTED_QUESTION_SUCCESS> {
    payload: SelectedQuestion 

}

interface SelectedQuestionFailAction extends Action<ActionType.SELECTED_QUESTION_FAIL> {
    payload: string
}

interface SelectedQuestionLoadedAction extends Action<ActionType.SELECTED_QUESTION_LOADED> {
    payload: SelectedQuestion
}

export type SelectedQuestionAction = SelectedQuestionRequestAction | SelectedQuestionSuccessAction
| SelectedQuestionFailAction | SelectedQuestionLoadedAction

//SelectedQuestion





