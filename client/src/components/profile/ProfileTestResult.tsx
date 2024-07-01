import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTest,
  postAnswer,
  overall_score_test,
  deleteCandidateTests,
  score_individual_test,
  loadTestsUserid,
} from '../../actions/tests.ts';
import { setAlert } from '../../actions/alert.ts';
import 'react-toastify/dist/ReactToastify.css';
import PieChartCorrectTopics from '../profiles/PieChartCorrectTopics.tsx';
import { RootState } from '../../reducers/index.ts';
import { ThunkDispatch } from 'redux-thunk';
import { Test } from '../../reducers/tests.ts';
import { OverAllScoreCandidateState } from '../../reducers/overallScoreCandidate.ts';

interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}

interface IHandleAnswer {
  userAnswers: string;
  questionId: string;
  testName: string;
}  

interface IProps {
  userId: string;
}

interface ProfileTestResultProps {
  userId: string;
  testName: string;
  newTestName: string;
  id: string;
}

interface TopicItem {
  trueAnswers: number;
  totalQuestions: number;
   topic: string;
}

const ProfileTestResult: React.FC<IProps> = ({ userId }) => {
  console.log('SSSSSSSS  in ProfileTestResult')

   const eachTopicScoreState = useSelector((state: RootState) => state.eachTopicScore);

   const {tests, loading, error} = useSelector((state: RootState) => state.tests);

   const selectedQuestions = useSelector((state: RootState) => state.selectedQuestions);
 
   const {overAllScoreCandidate}: OverAllScoreCandidateState = useSelector((state: RootState) => state.overAllScoreCandidate);
 
   const scoreCandidate = useSelector((state: RootState) => state.scoreCandidate);

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  //IMPORTANT CONSIDERATIONS

  console.log('tests:: ', tests)
 
  const { eachTopicScores } = eachTopicScoreState;

  const totalQuestionsSum = eachTopicScores.reduce((total, currentTopic) => {
    return total + currentTopic.totalQuestions;
  }, 0);

 

  const testScore = scoreCandidate;
  const questionCount = scoreCandidate[0];
  const correct = scoreCandidate[1];
  const usedValue = scoreCandidate[2];
  const testCount = scoreCandidate[3];

  const topics = overAllScoreCandidate.map((item) => item.topic);
  const topicCounts = overAllScoreCandidate.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidate.map((item) => item.correct);
  const usedCounts = overAllScoreCandidate.map((item) => item.used);
  const wrongCounts = overAllScoreCandidate.map((item) => item.wrong);

  const isAdmin = localStorage.getItem('isAdmin');

  useEffect(() => {
    if (Array.isArray(tests)) {
      setUserAnswers(Array(tests.length).fill(''));
    }
  }, [tests]);

  useEffect(() => {
    dispatch(loadTestsUserid(userId));
  }, [dispatch]);

  const handleInputChange = (e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const inputElement = e.target as HTMLInputElement;
    setTestName(inputElement.value);

    dispatch(getTest(inputElement.value));
    if (tests.length === 0) {
      dispatch(loadTestsUserid(userId));
    }
  };

  const handleOptionChange = (event: React.FormEvent<HTMLFormElement>) => {
    const inputElement = event.target as HTMLInputElement;
    setSelectedOption(inputElement.value);
  };

  const handleAnswer = (userAnswers: string, questionId: string, testName: string) => {
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName: string) => {
    dispatch(score_individual_test(testName, userId));
  };

  const handleOverallScore = (testName: string) => {
    dispatch(overall_score_test(getOnlyName()));
  };

  const cleanName = (testName: string) => {
    const parts = testName.split('-');
    return parts.slice(0, -1).join(' ');
  };

  const getOnlyName = () => {
    const parts = testName.split('-');
    return parts[0];
  };

  // const deleteCandidate = (testname: string) => {
  //   if (testname) {
  //     const newTestName = getOnlyName();
  //     const result = window.confirm('Are you sure you want to delete this item?');
  //     if (result) {
  //       dispatch(deleteCandidateTests(newTestName));
  //       dispatch(setAlert('Deletion successful!', 'success'));
  //       dispatch(loadTestsUserid(userId));
  //     } else {
  //       dispatch(setAlert('Deletion aborted!', 'danger'));
  //     }
  //   }
  // };

  return (
    <div>
      <br />
      <div>
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            <div className="form-group">
              Select a test:
              <select
                name="testName"
                value={testName}
                onChange={handleInputChange}
                className="select-element"
              >
                <option key="default" value=""></option>
                {tests.map((test: Test, index: number) => (
                  <option key={index} value={test.test_name}>
                    {test.test_name}
                  </option>
                ))}
              </select>
              {/* {isAdmin === 'true' && (
                <button className="btn btn-danger" onClick={() => deleteCandidate(testName)}>
                  Delete Old Candidate
                </button>
              )} */}
            </div>
          </li>

          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          ></li>
        </ul>

        <div>
          <div>
            <button type="submit" className="btn btn-primary" onClick={() => handleScore(testName)}>
              Show Individual Correct Statistics
            </button>
          </div>
          <div style={{ color: 'black', backgroundColor: 'white' }}>
            {topics.map((topic, index) => (
              <span key={index}>
                {topic} {/* Add a space character here */}
              </span>
            ))}{' '}
            <br />
            <br />
          </div>
        </div>
        <ul>
          {eachTopicScores.map((topicItem, index) => (
            <li key={index}>
              <PieChartCorrectTopics
                key={topicItem.topic} // Unique key based on topic
                topic={topicItem.topic}
                correct={topicItem.trueAnswers}
                totQuestions={totalQuestionsSum}
              />
            </li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default ProfileTestResult;






