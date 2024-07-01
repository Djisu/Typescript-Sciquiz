import { combineReducers, Reducer } from 'redux';
import { alertReducer } from './alert.ts';
import {authReducer} from './auth.ts';
import {profileReducer} from './profile.ts';
import {profilesReducer} from './profiles.ts';
import {difficultyLevelReducer} from './difficulty_level.ts';
import {questionReducer} from './question.ts';
import {testsReducer} from './tests.ts';
import {subjectReducer} from './subject.ts';
import {userPerformanceReducer} from './user_performance.ts';
import {topicsReducer} from './topic.ts';
import {otherQuestionReducer} from './otherQuestion.ts';
import {fetchUniqueTopicsReducer} from './fetchUniqueTopics.ts';
import {fetchUniqueDifficultyLevelsReducer} from './fetchUniqueDifficultyLevels.ts';
import { fetchUniqueSubjectsReducer } from './fetchUniqueSubjects.ts';

import {selectedQuestionsReducer} from './selectedQuestions.ts';
import {userAnsweredQuestionsReducer} from './userAnsweredQuestions.ts';
import {onePerformanceReducer} from './one_performance.ts';
import {postAnswerReducer} from './postAnswer.ts';
import {scoreCandidateReducer} from './scoreCandidate.ts';
import {overAllScoreCandidateReducer} from './overallScoreCandidate.ts';
import {deleteCandidateTestsReducer} from './deleteCandidateTests.ts';
import {userUpdateReducer} from './user_update.ts';
import {eachTopicScoreReducer} from './eachTopicScore.ts';
import {selectedTestReducer} from './selectedTest.ts';
import {testUnmarkedReducer} from './testsUnmarked.ts';
import { topicsCountReducer } from './topicCount.ts';

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer,
  profiles: profilesReducer,
  difficultyLevels:difficultyLevelReducer,
  question:questionReducer,
  tests: testsReducer,
  subject: subjectReducer,
  userPerformance: userPerformanceReducer,
  topics: topicsReducer,
  otherQuestion: otherQuestionReducer,
  fetchUniqueTopics: fetchUniqueTopicsReducer,
  fetchUniqueDifficultyLevels: fetchUniqueDifficultyLevelsReducer,
  fetchUniqueSubjects: fetchUniqueSubjectsReducer,
  selectedQuestions: selectedQuestionsReducer,
  userAnsweredQuestions: userAnsweredQuestionsReducer,
  onePerformance: onePerformanceReducer,
  postAnswer: postAnswerReducer,
  scoreCandidate: scoreCandidateReducer,
  overAllScoreCandidate: overAllScoreCandidateReducer,
  deleteCandidateTests: deleteCandidateTestsReducer,
  userUpdate: userUpdateReducer,
  eachTopicScore: eachTopicScoreReducer,
  selectedTest: selectedTestReducer,
  testsUnmarked: testUnmarkedReducer,
  topicCount: topicsCountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;











