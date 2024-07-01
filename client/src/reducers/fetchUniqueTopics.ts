import { UnicTopicAction } from '../actions/action-types/unictopic.ts';
import {
  UNIC_TOPIC_SUCCESS,
  UNIC_TOPIC_FAIL,
  UNIC_TOPIC_REQUEST,
  UNIC_TOPIC_LOADED,
} from '../actions/types.ts';

interface FetchUniqueTopicsState {
  fetchUniqueTopics: string[]
  loading: boolean
  error: null
}

const initialState = {
  fetchUniqueTopics: [], // Initial state for the topic data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

export const fetchUniqueTopicsReducer = (state: FetchUniqueTopicsState = initialState, action: UnicTopicAction) => {
  const { type, payload } = action;

  //  console.log('action.payload', action.payload);

  switch (action.type) {
    case UNIC_TOPIC_SUCCESS:
      return {
        ...state,
        fetchUniqueTopics: action.payload, // Set the topics data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case UNIC_TOPIC_FAIL:
      return {
        ...state,
        fetchUniqueTopics: [], // Clear the topics data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: action.payload,
      };
    default:
      return state;
  }
}


