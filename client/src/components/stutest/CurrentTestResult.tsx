import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTests, getTest, postAnswer, score_individual_test, deleteCandidateTests } from '../../actions/tests.ts';
import { setAlert } from '../../actions/alert.ts';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../reducers/index.tsx';
import { ThunkDispatch } from 'redux-thunk';
import PieChartCorrectTopics from '../profiles/PieChartCorrectTopics.tsx';
import { Test, TestState } from '../../reducers/tests.ts';
import { EachTopicScore } from '../../reducers/eachTopicScore.ts';

import { OverAllScoreCandidateItem, OverAllScoreCandidateState } from '../../reducers/overallScoreCandidate.ts';

const CurrentTestResult: React.FC = () => {
   console.log('in CurrentTestResult')

   // useSelector hooks
   const tests = useSelector((state: RootState) => state.tests);
   //console.log('tests.tests== ', tests.tests)

   const testsState = tests.tests

   //console.log('testsState[0]=== ', testsState[0])

    const eachTopicsScoreState = useSelector((state: RootState) => state.eachTopicScore);

  //const overAllScoreCandidateData = useSelector((state: RootState) => state.overAllScoreCandidate);
  const {overAllScoreCandidate}: OverAllScoreCandidateState = useSelector((state: RootState) => state.overAllScoreCandidate);
  
  console.log('overAllScoreCandidate== ', overAllScoreCandidate)

  const scoreCandidate = useSelector((state: RootState) => state.scoreCandidate);
 console.log('scoreCandidate== ', scoreCandidate)

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  /////////////////////////////////////////////
  useEffect(() => {
    //console.log('in dispatch(loadTests());')

    if (testsState.length === 0){
       dispatch(loadTests());
    }
  }, []);
  ////////////////////////////////////////////

  const [testName, setTestName] = useState('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const { eachTopicScores, loading, error } = eachTopicsScoreState;
  console.log('eachTopicScores=== ', eachTopicScores)

  const isAdmin = localStorage.getItem('isAdmin');
  const userId: string | null = localStorage.getItem('id');

  //console.log('isAdmin== ', isAdmin)
  //console.log('userId== ', userId)

  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
    if (Array.isArray(tests.tests)) {
      setUserAnswers(Array(tests.tests.length).fill(''));
    }
  }, [testsState]);

  // const uniqueTestnames: string[] = [];

  // for (let i = 0; i < testsState.length; i++) {
  //   if (!uniqueTestnames.includes(testsState[i].test_name)) {
  //     uniqueTestnames.push(testsState[i].test_name);
  //   }
  // }

  // console.log('uniqueTestnames== ', uniqueTestnames)

  // Extract data from the scoreCandidate array
  const topics = overAllScoreCandidate.map((item) => item.topic);
  const topicCounts = overAllScoreCandidate.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidate.map((item) => item.correct);
  const usedCounts = overAllScoreCandidate.map((item) => item.used);
  const wrongCounts = overAllScoreCandidate.map((item) => item.wrong);

  

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    setTestName(e.target.value);
 
    console.log('e.target.value== ', e.target.value)

    dispatch(getTest(e.target.value));
  };

  const handleAnswer = (userAnswer: string, questionId: string, testName: string) => {
    dispatch(postAnswer(questionId, userAnswer, testName, userId));
  };

  const handleScore = (testName: string) => {
    dispatch(score_individual_test(testName, userId));
  };

  // const deleteCandidate = (testName: string) => {
  //   if (testName) {
  //     const result = window.confirm('Are you sure you want to delete this item?');

  //     if (result) {
  //       dispatch(deleteCandidateTests(testName));
  //       dispatch(setAlert('Deletion successful!', 'success'));
  //       dispatch(loadTests());
  //     } else {
  //       dispatch(setAlert('Deletion aborted!', 'danger'));
  //     }
  //   }
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // if (!Array.isArray(eachTopicScores) || eachTopicScores.length === 0) {
  //   return <div>No topics available</div>;
  // }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <ul>
          <li    
              style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}>
            <div className="form-group">
              Select a test:
              <select 
                  name="testName" 
                  value={testName} 
                  onChange={handleInputChange} 
                  className="select-element">

                  <option key="default" value="">No tests</option>
                  
                  {testsState && testsState.length > 0 ? (
                    testsState.map((test: Test) => (
                      <option key={test._id} value={test.test_name}>
                      {test.test_name}
                    </option>
                    ))
                  ) : (
                    <div>No tests found</div>
                  )}                
              </select>          
            </div>
          </li>
        </ul>

        <div>
          <button 
             type="submit" 
             className="btn btn-primary" 
             onClick={() => handleScore(testName)}>
             Show individual statistics
          </button>

          <div style={{ color: 'black', backgroundColor: 'white' }}>
             {topics.map((topic, index) => (
                <span key={index}>
                  {topic}
                </span>
              ))}
              {/* {overAllScoreCandidate.map((item, index) => (
                <span key={index}>{item.topic} </span>
              ))} */}
          </div>
        </div>
        <ul>
        {eachTopicScores.map((topic: EachTopicScore, index: number) => (
            <li key={index}>
              <PieChartCorrectTopics topic={topic.topic} correct={topic.trueAnswers} totQuestions={topic.totalQuestions} />
            </li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default CurrentTestResult;









