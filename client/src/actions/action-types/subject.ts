import ActionType from ".";
import { Action } from "redux";

export interface Subject {
    subject_name: string;
  }
  
 
interface SubjectRequestAction extends Action<ActionType.SUBJECT_REQUEST> {
    payload: string
}

interface SubjectSuccessAction extends Action<ActionType.SUBJECT_SUCCESS> {
    payload: Subject[]
}

interface SubjectFailAction extends Action<ActionType.SUBJECT_FAIL> {
    payload: string
}

interface SubjectLoadedAction extends Action<ActionType.SUBJECT_LOADED> {
    payload: Subject[]
}

export type SubjectAction = SubjectRequestAction | SubjectSuccessAction
| SubjectFailAction | SubjectLoadedAction

//Subject