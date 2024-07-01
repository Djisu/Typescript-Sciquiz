import api from '../utils/api.ts';

import {
  SUBJECT_SUCCESS,
  SUBJECT_FAIL,
  SUBJECT_REQUEST,
  SUBJECT_LOADED,
  UNIC_SUBJECT_REQUEST,
  UNIC_SUBJECT_SUCCESS,
  UNIC_SUBJECT_FAIL,
  UNIC_SUBJECT_LOADED,
} from './types.js';
import { SubjectAction } from './action-types/subject.ts';
import { AlertAction, setAlertValue } from './action-types/alert.ts';

import { Dispatch } from 'react';
import ActionType from './action-types/index.ts';
import { UnicSubjectAction } from './action-types/unicSubject.ts';
import { RootState } from '../reducers/index.ts';
import { ThunkAction } from 'redux-thunk';

import { FetchUniqueSubject } from '../reducers/fetchUniqueSubjects.ts';

interface ISubject {
  subject_name: string
}

// Load Subjects
export const loadSubjects = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<SubjectAction | AlertAction>) => {
  //console.log('in loadSubjects');

  try {
    const res = await api.get('/subject');

    //console.log('subject res.data[0]:',  res.data[0]);

    dispatch({
      type: ActionType.SUBJECT_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SUBJECT_FAIL, payload: 'Error in getting data'
    });
  }
};

// Create or update Subject
export const createSubject = (subjectData: ISubject): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<SubjectAction | AlertAction>) => {
  console.log('in  createSubject ', subjectData);

  if (subjectData.subject_name === '') {
    alert('Empty subject');
    return;
  }
  const tokenX = localStorage.getItem('token');

  if (!tokenX) {
    setAlertValue('You must login', 'danger', '01');
    return;
  }

  dispatch({ type: ActionType.SUBJECT_REQUEST, payload: 'Getting ready' });
  try {
    const res = await api.post('/subject', subjectData);

    console.log('after post subject');

    dispatch({
      type: ActionType.SUBJECT_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Subject Creation Successful', 'success', '01'));
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
    }

    dispatch({
      type: ActionType.SUBJECT_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Subject
export const deleteSubject = (id: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<SubjectAction | AlertAction>) => {
  dispatch({ type: ActionType.SUBJECT_REQUEST, payload: 'Getting ready' });

  console.log('in deleteSubject action:', id);

  try {
    const res = await api.delete(`/subject/${id}`);

    dispatch({
      type: ActionType.SUBJECT_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Subject Removed', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type:  ActionType.SUBJECT_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Action creator for fetching unique subjects
export const fetchUniqueSubjectsAction = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<UnicSubjectAction | AlertAction>) => {
  dispatch({ type: ActionType.UNIC_SUBJECT_REQUEST, payload: 'Getting ready' });

    console.log('in action fetchUniqueSubjects');

  try {
    const res = await api.get('/unique_subjects');

    //console.log('in fetchUniqueSubjectsAction action res.data', res.data);

    const data: FetchUniqueSubject[] = res.data;

    dispatch({ type: ActionType.UNIC_SUBJECT_SUCCESS, payload: data });
  } catch (error: any) {
    console.error('Error fetching unique subjects:', error);

    dispatch({
      type: ActionType.UNIC_SUBJECT_FAIL,
      payload: 'Failed to fetch unique subjects',
    });
  }
};
