import api from '../utils/api.ts';
import { setAlert } from './alert.ts';

import {
  TOPIC_SUCCESS,
  TOPIC_FAIL,
  TOPIC_REQUEST,
  TOPIC_LOADED,
  UNIC_TOPIC_REQUEST,
  UNIC_TOPIC_SUCCESS,
  UNIC_TOPIC_FAIL,
  UNIC_TOPIC_LOADED,
  TOPIC_COUNT_REQUEST,
  TOPIC_COUNT_SUCCESS,
  TOPIC_COUNT_FAIL
} from './types.ts';
import { AlertAction, setAlertValue } from './action-types/alert.ts';
import { SetAlertAction } from './action-types/alert.ts';
import { TopicAction } from './action-types/topic.ts';
import { Dispatch } from 'react';
import ActionType from './action-types/index.ts';
import { UnicTopicAction } from './action-types/unictopic.ts';
import { RootState } from '../reducers/index.ts';
import { ThunkAction } from 'redux-thunk';;

import { TopicCount } from '../reducers/topicCount.ts';

import { TopicCountAction } from './action-types/topicCount.ts';


export const fetchTopicCounts = (subjectName: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TopicCountAction>) => {
  console.log('in fetchTopicCounts Action', subjectName)
  
  try {
    dispatch({ type: ActionType.TOPIC_COUNT_REQUEST, payload: 'Getting ready' });

    //const res = await api.get<ITopicCount[]>('/api/topicCounts'); // Assuming your API returns an array of ITopicCount <TopicCount[]>
    const res = await api.get(`/topic/${subjectName}`);

    if (res.data){
      //console.log('Data found for topic count: ', res.data)
    }else{
      console.log('No data found from backend')
    }

    dispatch({
      type: ActionType.TOPIC_COUNT_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionType.TOPIC_COUNT_FAIL,
      payload: error.message,
    });
  }
};

// Fetch Topics
export const fetchTopics = (subjectName: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<TopicAction>) => {
    console.log('in fetchTopics: ', subjectName);

  dispatch({ type: ActionType.TOPIC_REQUEST, payload: 'Getting ready' });

  try {
    const res = await api.get(`/topic/${subjectName}`);

    console.log(' res.data:', res.data);

    dispatch({
      type: ActionType.TOPIC_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.TOPIC_FAIL,
      payload: 'Error in getting data'
    });
  }
};

// Load Topics
export const loadTopics = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<TopicAction>) => {
  console.log('in loadTopics');

  try {
    const res = await api.get('/topic');

    console.log(' res.data[0]:', res.data[0]);

    dispatch({
      type: ActionType.TOPIC_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.TOPIC_FAIL,
      payload: 'Error in getting data'
    });
  }
};

// Action creator for fetching unique topics
export const fetchUniqueTopics = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<TopicAction | UnicTopicAction>) => {
  dispatch({ type: ActionType.UNIC_TOPIC_REQUEST, payload: 'Getting ready' });

  //  console.log('in action fetchUniqueTopics');

  try {
    const res = await api.get('/unique_topics');

    //console.log('in topics action res.data', res.data);

    const uniqueTopics = res.data;

    dispatch({ type: ActionType.UNIC_TOPIC_SUCCESS, payload: res.data });
  } catch (error: any) {
    console.error('Error fetching unique topics:', error);

    dispatch({ type: ActionType.UNIC_TOPIC_FAIL, payload: 'Failed to fetch unique topics' });
  }
};

interface ITopicData {
  topic: string
  subject_name: string
}

// Create or update Question
export const createTopic = (topicData: ITopicData): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<TopicAction | AlertAction>) => {
  dispatch({ type: ActionType.TOPIC_REQUEST, payload: 'Getting ready' });

  console.log('in topic action');

  try {
    const res = await api.post('/topic', topicData);

    dispatch({
      type: ActionType.TOPIC_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Topic Creation Successful', 'success', '01'));
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
    }

    dispatch({
      type: ActionType.TOPIC_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Question
export const deleteTopic = (id: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<TopicAction | AlertAction>) => {
  dispatch({ type: ActionType.TOPIC_REQUEST, payload: 'Getting ready' });

  console.log('in deleteTopic action');

  try {
    const res = await api.delete(`/topic/${id}`);

    dispatch({
      type: ActionType.TOPIC_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Topic Removed', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type: ActionType.TOPIC_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};
