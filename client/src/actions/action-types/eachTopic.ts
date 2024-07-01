import ActionType from ".";
import { Action } from "redux";

interface EachTopic {
    trueAnswers: number
    totalQuestions: number
    topic: string 
}


interface EachTopicRequestAction extends Action<ActionType.EACH_TOPIC_REQUEST> {
    payload: string
}

interface EachTopicSuccessAction extends Action<ActionType.EACH_TOPIC_SUCCESS> {
    payload: EachTopic 
}

interface EachTopicFailAction extends Action<ActionType.EACH_TOPIC_FAIL> {
    payload: string
}

interface EachTopicLoadedAction extends Action<ActionType.EACH_TOPIC_LOADED> {
    payload: EachTopic
}


export type EachTopicAction = EachTopicRequestAction | EachTopicSuccessAction
| EachTopicFailAction | EachTopicLoadedAction

