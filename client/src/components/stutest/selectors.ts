import { createSelector } from 'reselect';
import { RootState } from '../../reducers';
import { FetchUniqueSubject, FetchUniqueSubjectsState } from '../../reducers/fetchUniqueSubjects';

interface TopicsProps {
    topic: string
    count: number
  }


// Define an input selector to extract the topics slice of state
const selectTopicsSlice = (state: RootState) => state.topics.topics;

 // Create a memoized output selector using createSelector
 export const selectTopics = createSelector(
    selectTopicsSlice,
    (topics) =>
      topics.map(({ topic, count }: TopicsProps) => ({
        topic,
        count,
      }))
  );

  // Define an input selector to extract the fetchUniqueSubjects slice of state
const selectFetchUniqueSubjectsSlice = (state: RootState) => state.fetchUniqueSubjects  as FetchUniqueSubjectsState;

// Create a memoized output selector using createSelector
export const selectFetchUniqueSubjects = createSelector(
  selectFetchUniqueSubjectsSlice,
  (fetchUniqueSubjects) => fetchUniqueSubjects
);