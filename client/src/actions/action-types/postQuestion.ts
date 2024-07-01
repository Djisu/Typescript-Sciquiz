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
  

interface PostQuestionRequestAction extends Action<ActionType.POST_QUESTION_REQUEST> {
    payload: string
}

interface PostQuestionSuccessAction extends Action<ActionType.POST_QUESTION_SUCCESS> {
    payload: Question
}

interface PostQuestionFailAction extends Action<ActionType.POST_QUESTION_FAIL> {
    payload: string
}

export type PostQuestionAction = PostQuestionRequestAction | PostQuestionSuccessAction
| PostQuestionFailAction






//PostQuestion
// export const POST_QUESTION_REQUEST = 'POST_QUESTION_REQUEST';
// export const POST_QUESTION_SUCCESS = 'POST_QUESTION_SUCCESS';
// export const POST_QUESTION_FAIL = 'POST_QUESTION_FAIL';