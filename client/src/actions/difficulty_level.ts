import { Dispatch } from 'react';
import api from '../utils/api.ts';
import { setAlert } from './alert.ts';
import { DifficultyLevelAction } from './action-types/difficultyLevel.ts';
import { UnicDifficultyLevelAction } from './action-types/unicdifficultylevel.ts';
import ActionType from './action-types/index.ts';

import {
  DIFFICULTY_LEVEL_SUCCESS,
  DIFFICULTY_LEVEL_FAIL,
  DIFFICULTY_LEVEL_REQUEST,
  DIFFICULTY_LEVEL_LOADED,
  UNIC_DIFFICULTY_LEVEL_REQUEST,
  UNIC_DIFFICULTY_LEVEL_SUCCESS,
  UNIC_DIFFICULTY_LEVEL_FAIL,
  UNIC_DIFFICULTY_LEVEL_LOADED,
} from './types.ts';
import { AlertAction } from './action-types/alert.ts';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers/index.ts';


interface IDifficultyLevel {
  level: string
}

type DifficultyLevelRequest = {
  type: typeof ActionType.DIFFICULTY_LEVEL_REQUEST
  payload: string
}

// //export const DIFFICULTY_LEVEL_SUCCESS = 'DIFFICULTY_LEVEL_SUCCESS';
type DifficultyLevelSuccess = {
  type: ActionType.DIFFICULTY_LEVEL_SUCCESS
  payload: IDifficultyLevel[]
}

// //export const DIFFICULTY_LEVEL_FAIL = 'DIFFICULTY_LEVEL_FAIL';
type DifficultyLevelFail = {
  type: ActionType.DIFFICULTY_LEVEL_FAIL
  payload: string
}

// //export const ADD_DIFFICULTY_LEVEL = 'ADD_DIFFICULTY_LEVEL';
type AddDifficultyLevel = {
  type: ActionType.ADD_DIFFICULTY_LEVEL
  payload: IDifficultyLevel[]
}

// //export const DIFFICULTY_LEVEL_LOADED = 'DIFFICULTY_LEVEL_LOADED';
type DifficultyLevelLoaded = {
  type: ActionType.DIFFICULTY_LEVEL_LOADED
  payload: IDifficultyLevel[]
}

// export const loadDifficultyLevelsValue = (): DifficultyLevelAction => ({
//   type: ActionType.DIFFICULTY_LEVEL_LOADED,
//   payload: [
//       { level: 'Easy' },
//       { level: 'Medium' },
//       { level: 'Hard' },
//   ],
// })

interface IDifficultyLevel {
  level: string
}

interface IAlert {
  msg: string
  alertType: string
}

export const createDifficultyLevel =
  (difficultyLevelData: IDifficultyLevel | IDifficultyLevel[]): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<DifficultyLevelAction | AlertAction | any>) => {
    console.log('in createDifficultyLevel', difficultyLevelData);

    if (Array.isArray(difficultyLevelData)) {
      dispatch({
        type: ActionType.ADD_DIFFICULTY_LEVEL,
        payload: difficultyLevelData,
      });
    } else {
      if (difficultyLevelData.level === '') {
        alert('Empty difficultyLevelData');
        return;
      }
      const tokenX = localStorage.getItem('token');

      if (!tokenX) {
        setAlert('You must login', 'danger');
        return;
      }

      dispatch({ type: ActionType.DIFFICULTY_LEVEL_REQUEST, payload: 'Getting difficulty level' });

      try {
        const res = await api.post('/difficulty_level', difficultyLevelData);

        console.log('after post difficultyLevelData');

        dispatch({
          type: ActionType.DIFFICULTY_LEVEL_SUCCESS,
          payload: res.data,
        });

        dispatch(setAlert('difficultyLevel Creation Successful', 'success'));
      } catch (err: any) {
        const errors: any[] = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
          type: ActionType.DIFFICULTY_LEVEL_FAIL,
          payload: 'Error in getting data'
        });
      }
    }
  };



// Fetch Topics
export const fetchDifficultyLevelsValue = (subjectName: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<DifficultyLevelAction>) => {
  //  console.log('in fetchDifficultyLevels');

  dispatch({ type: ActionType.DIFFICULTY_LEVEL_REQUEST, payload: 'Getting difficulty level' });

  try {
    //console.log('in fetchTopics api.get(/difficulty_level/:difficulty_level');

    const res = await api.get('/difficulty_level/:difficulty_level', {
      params: { subject_name: subjectName },
    });

    //console.log(' Fetched difficulty levels????:', res.data);

    dispatch({
      type: ActionType.DIFFICULTY_LEVEL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.DIFFICULTY_LEVEL_FAIL,
      payload: "Error in getting data"
    });
  }
};

// Load User
export const loadDifficultyLevels = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<DifficultyLevelAction>) => {
  console.log('in loadDifficultyLevels action');

  try {
    const res = await api.get('/difficulty_level');

    console.log('difficulty_levels:', res.data);

    dispatch({
      type: ActionType.DIFFICULTY_LEVEL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.DIFFICULTY_LEVEL_FAIL,
      payload: 'Error in loading data'
    });
  }
};




// Delete difficulty level
export const deleteDifficultyLevel = (id: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<DifficultyLevelAction | any>) => {
  dispatch({ type: ActionType.DIFFICULTY_LEVEL_REQUEST });

  console.log('in deleteDifficultyLevel action');

  try {
    const res = await api.delete(`/difficulty_level/${id}`);

    dispatch({
      type: ActionType.DIFFICULTY_LEVEL_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Difficulty level Removed', 'success'));
  } catch (err: any) {
    dispatch({
      type: ActionType.DIFFICULTY_LEVEL_FAIL,
      payload: "Error in access difficulty level",
    });
  }
};

// Action creator for fetching unique topics
export const fetchUniqueDifficultyLevels = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<DifficultyLevelAction | UnicDifficultyLevelAction>) => {
  dispatch({ type: ActionType.UNIC_DIFFICULTY_LEVEL_REQUEST, payload: "Getting Difficulty level" });

  //  console.log('in action fetchUniqueTopics');

  try {
    const res = await api.get('/unique_difficultylevels');

    //console.log('in topics action res.data', res.data);

    const uniqueTopics = res.data;

    dispatch({ type: ActionType.UNIC_DIFFICULTY_LEVEL_SUCCESS, payload: res.data });
  } catch (error) {
    console.error('Error fetching unique topics:', error);

    dispatch({
      type: ActionType.UNIC_DIFFICULTY_LEVEL_FAIL,
      payload: 'Failed to fetch unique topics',
    });
  }
};
