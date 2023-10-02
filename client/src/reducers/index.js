import { combineReducers } from 'redux';
import alert from './alert.js';
import auth from './auth.js';

import profile from './profile.js';
import profiles from './profiles.js';

import payment from './payment.js';
import difficultyLevel from './difficulty_level.js';
import question from './question.js';
import tests from './tests.js';
import subject from './subject.js';
import userPerformance from './user_performance.js';
import topic from './topic.js';
import otherQuestion from './otherQuestion.js';
import fetchUniqueTopics from './fetchUniqueTopics.js';
import fetchUniqueDifficultyLevels from './fetchUniqueDifficultyLevels.js';
import fetchUniqueSubjects from './fetchUniqueSubjects.js';
import selectedQuestions from './selectedQuestions.js';
import userAnsweredQuestions from './userAnsweredQuestions.js';
import onePerformance from './one_performance.js';
import postAnswer from './postAnswer.js';
import scoreCandidate from './scoreCandidate.js';
import overAllScoreCandidate from './overallScoreCandidate';

export default combineReducers({
  alert,
  auth,
  profile,
  profiles,
  payment,
  question,
  difficultyLevel,
  tests,
  subject,
  onePerformance,
  userPerformance,
  topic,
  otherQuestion,
  fetchUniqueTopics,
  fetchUniqueDifficultyLevels,
  fetchUniqueSubjects,
  selectedQuestions,
  userAnsweredQuestions,
  postAnswer,
  scoreCandidate,
  overAllScoreCandidate,
});
