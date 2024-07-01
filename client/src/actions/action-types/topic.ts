import { ObjectId } from "mongoose";
import ActionType from ".";
import { Action } from "redux";

export interface Topic {
    _id: ObjectId
    topic: string
    subject_name: string;
  }

interface TopicRequestAction extends Action<ActionType.TOPIC_REQUEST> {
    payload: string
}

interface TopicSuccessAction extends Action<ActionType.TOPIC_SUCCESS> {
    payload: Topic[]
}

interface TopicFailAction extends Action<ActionType.TOPIC_FAIL> {
    payload: string
}

interface TopicLoadedAction extends Action<ActionType.TOPIC_LOADED> {
    payload: Topic[]
}

export type TopicAction = TopicRequestAction | TopicSuccessAction
| TopicFailAction | TopicLoadedAction

//Topic