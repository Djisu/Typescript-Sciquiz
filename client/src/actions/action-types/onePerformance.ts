import ActionType from ".";
import { Action } from "redux";

export interface UserPerformance {
    _id: string
    userId: string
    test_name: string;
    score: number;
    date: Date;
    email: string;
    test_details: string;
  }

interface OnePerformanceRequestAction extends Action<ActionType.ONE_PERFORMANCE_REQUEST> {
    payload: string
}

interface OnePerformanceSuccessAction extends Action<ActionType.ONE_PERFORMANCE_SUCCESS> {
    payload: UserPerformance
}

interface OnePerformanceFailAction extends Action<ActionType.ONE_PERFORMANCE_FAIL> {
    payload: string
}

interface OnePerformanceLoadedAction extends Action<ActionType.ONE_PERFORMANCE_LOADED> {
    payload: UserPerformance
}

export type OnePerformanceAction = OnePerformanceRequestAction | OnePerformanceSuccessAction
| OnePerformanceFailAction | OnePerformanceLoadedAction

//OnePerformance