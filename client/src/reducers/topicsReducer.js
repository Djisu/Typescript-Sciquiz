import UPDATE_TOPICS_DATA from '../actions/types';

// topicsReducer.js
const initialState = {
  topicsData: [],
};

const topicsReducer = (state = initialState, action) => {
  console.log('in topicsReducer', action.payload);

  switch (action.type) {
    case 'UPDATE_TOPICS_DATA':
      return {
        ...state,
        topicsData: action.payload,
      };
    default:
      return state;
  }
};

export default topicsReducer;
