import { Action } from "redux";
//import { User } from "./user";
//import { UserSignin } from "./user";
import ActionType from ".";

import { SET_ALERT, REMOVE_ALERT } from '../types'

export interface SetAlertAction extends Action<ActionType.SET_ALERT>  {
  payload: { msg: string; alertType: string; id: string };
}

export interface RemoveAlertAction extends Action<ActionType.REMOVE_ALERT> {
  payload: string;
}

export type AlertAction = SetAlertAction | RemoveAlertAction;

export const setAlertValue = (msg: string, alertType: string, id: string): AlertAction => ({
  type: ActionType.SET_ALERT,
  payload: { msg, alertType, id },
});

export const removeAlert = (id: string): AlertAction => ({
  type: ActionType.REMOVE_ALERT,
  payload: id,
});

