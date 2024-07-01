import { ObjectId } from "mongoose";
import ActionType from ".";
import { Action } from "redux";

export interface Topic {
    _id: ObjectId
    topic: string
    subject_name: string;
  }

interface UnicTopicRequestAction extends Action<ActionType.UNIC_TOPIC_REQUEST> {
    payload: string
}

interface UnicTopicSuccessAction extends Action<ActionType.UNIC_TOPIC_SUCCESS> {
    payload: Topic[]
}

interface UnicTopicFailAction extends Action<ActionType.UNIC_TOPIC_FAIL> {
    payload: string
}

interface UnicTopicLoadedAction extends Action<ActionType.UNIC_TOPIC_LOADED> {
    payload: Topic[]
}

export type UnicTopicAction = UnicTopicRequestAction | UnicTopicSuccessAction
| UnicTopicFailAction | UnicTopicLoadedAction

//UnicTopic