import { AnyAction } from 'redux';
import { TopicAction } from '../actions/action-types/topic.ts';
import {
  TOPIC_REQUEST,
  TOPIC_SUCCESS,
  TOPIC_FAIL,
  TOPIC_LOADED,
} from '../actions/types.ts';
//import { Topic } from './types/TopicState.js';

// Define the interface for a topic
// In your reducer file
export interface Topic {
  _id: string
  topic: string
}

// export interface TopicState {
//   topic: Topic | null;
//   loading: boolean;
//   error?: any;
// }

export interface TopicsState {
  topics: Topic[];
  loading: boolean;
  error?: any;
}

const initialState: TopicsState = {
  topics: [],
  loading: false,
  error: null,
};


export const topicsReducer = (state: TopicsState = initialState, action: AnyAction) =>{
  const { type, payload } = action;

  //console.log('topics payload= ', payload)

  switch (action.type) {
    case TOPIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

      case TOPIC_SUCCESS:
        return {
          ...state,
          loading: false,
          topics: payload || [],
        };
      case TOPIC_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

