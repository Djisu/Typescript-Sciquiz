import ActionType from ".";
import { Action } from "redux";

interface ScoreCandidate {
    questionCount: number
    correctAnswers: number
    usedQuestionsLength: number
    testCount: number
  }

interface ScoreQuestionRequestAction extends Action<ActionType.SCORE_QUESTION_REQUEST> {
    payload: string
}

interface ScoreQuestionSuccessAction extends Action<ActionType.SCORE_QUESTION_SUCCESS> {
    payload: ScoreCandidate
}

interface ScoreQuestionFailAction extends Action<ActionType.SCORE_QUESTION_FAIL> {
    payload: string
}

export type ScoreQuestionAction = ScoreQuestionRequestAction | ScoreQuestionSuccessAction
| ScoreQuestionFailAction 

