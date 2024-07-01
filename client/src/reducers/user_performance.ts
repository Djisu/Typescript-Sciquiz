import { ObjectId } from "mongoose";
import ActionType from "../actions/action-types";
import { UserPerformanceAction } from '../actions/action-types/userPerformance.ts';
import {
  USER_PERFORMANCE_SUCCESS,
  USER_PERFORMANCE_FAIL,
  USER_PERFORMANCE_REQUEST,
  USER_PERFORMANCE_LOADED,
} from '../actions/types.ts';
import { UserPerformancesState } from "./index.ts";

const initialState: UserPerformancesState = {
  userPerformances: [],
  loading: false,
  error: '',
};

export const userPerformanceReducer = (state: UserPerformancesState = initialState, action: UserPerformanceAction) => {
  const { type, payload } = action;

  switch (type) {
    case USER_PERFORMANCE_SUCCESS:
      return {
        ...state,
        userPerformances: payload,
        loading: false,
      };
    case USER_PERFORMANCE_FAIL:
      return {
        ...state,
        userPerformances: [], // Reset to an empty array on failure
        loading: false,
      };
    default:
      return state;
  }
};