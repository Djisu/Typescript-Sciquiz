import ActionType from ".";
import { Action } from "redux";

interface OverAllScoreCandidateItem {
    topic: string;
    topicCount: number;
    correct: number;
    used: number;
    wrong: number;
    userId: string;
  }

interface OverallScoreQuestionRequestAction extends Action<ActionType.OVERALL_SCORE_QUESTION_REQUEST> {
    payload: string
}

interface OverallScoreQuestionSuccessAction extends Action<ActionType.OVERALL_SCORE_QUESTION_SUCCESS> {
    payload: OverAllScoreCandidateItem
}

interface OverallScoreQuestionFailAction extends Action<ActionType.OVERALL_SCORE_QUESTION_FAIL> {
    payload: string
}

export type OverallScoreQuestionAction = OverallScoreQuestionRequestAction | OverallScoreQuestionSuccessAction
| OverallScoreQuestionFailAction

