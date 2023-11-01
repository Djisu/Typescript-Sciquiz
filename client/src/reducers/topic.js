import {
  TOPIC_REQUEST,
  TOPIC_SUCCESS,
  TOPIC_FAIL,
  TOPIC_LOADED,
} from '../actions/types.js';

const initialState = {
  topics: [], // Initial state for the topic data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

function topicReducer(state = initialState, action) {
  const { type, payload } = action;

//  console.log('in topicReducer== ', action.payload);

  switch (action.type) {
    case 'TOPIC_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TOPIC_LOADED:
      return {
        ...state,
        topics: action.payload, // Set the topics data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case TOPIC_FAIL:
      return {
        ...state,
        topics: [], // Clear the topics data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: action.payload,
      };
    default:
      return state;
  }
}

export default topicReducer;
