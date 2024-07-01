import { Action } from "redux";
import ActionType from ".";

export interface TopicCount {
  topic: string
  count: number
}

export interface TopicCountRequestAction extends Action<ActionType.TOPIC_COUNT_REQUEST> {
  payload: string
}

export interface TopicCountSuccessAction extends Action<ActionType.TOPIC_COUNT_SUCCESS> {
  payload: TopicCount[];
}

export interface TopicCountFailAction extends Action<ActionType.TOPIC_COUNT_FAIL> {
  payload: string;
}

export type TopicCountAction = 
  | TopicCountRequestAction 
  | TopicCountSuccessAction 
  | TopicCountFailAction;

