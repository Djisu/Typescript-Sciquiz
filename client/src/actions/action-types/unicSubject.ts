import ActionType from ".";
import { Action } from "redux";

export interface Subject {
    subject_name: string;
  }
 
interface UnicSubjectRequestAction extends Action<ActionType.UNIC_SUBJECT_REQUEST> {
    payload: string
}

interface UnicSubjectSuccessAction extends Action<ActionType.UNIC_SUBJECT_SUCCESS> {
    payload: Subject[]
}

interface UnicSubjectFailAction extends Action<ActionType.UNIC_SUBJECT_FAIL> {
    payload: string
}

interface UnicSubjectLoadedAction extends Action<ActionType.UNIC_SUBJECT_LOADED> {
    payload: Subject[]
}

export type UnicSubjectAction = UnicSubjectRequestAction | UnicSubjectSuccessAction
| UnicSubjectFailAction | UnicSubjectLoadedAction

//UnicSubject