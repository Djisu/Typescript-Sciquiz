import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  loadTests,
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
} from '../../actions/tests.ts';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from '../profiles/Progressbar.tsx';
import PieChartOverallCorrect from '../profiles/PieChartOverallCorrect.tsx';
import { RootState } from '../../reducers/index.ts';
import { ThunkDispatch } from 'redux-thunk';
import { ScoreCandidate } from '../../reducers/scoreCandidate.ts';
import { Test } from '../../reducers/types/Test.ts';
import { OverAllScoreCandidateState } from '../../reducers/overallScoreCandidate.ts';

interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}

const ViewOverallStats: React.FC = () => {
  console.log('in ViewOverallStats')

   // Extract data from the scoreCandidate array
  const {overAllScoreCandidate}: OverAllScoreCandidateState = useSelector((state: RootState) => state.overAllScoreCandidate);
  
  const tests = useSelector((state: RootState) => state.tests.tests);

  const selectedQuestions = useSelector((state: RootState) => state.selectedQuestions);
 const {scoreCandidate} = useSelector((state: RootState) => state.scoreCandidate) ;

 

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  console.log('scoreCandidate== ', scoreCandidate)

  const { questionCount,
    correctAnswers,
    usedQuestionsLength,
    testCount }: ScoreCandidate = scoreCandidate;

console.log('1 questionCount:', scoreCandidate[0]);
console.log('2 correctAnswers:', scoreCandidate[1]);
console.log('3 usedQuestionsLength:', scoreCandidate[2]);
console.log('4 testCount:', scoreCandidate[3]);



  if (!overAllScoreCandidate.length){
    console.log('no overAllScoreCandidate found!!!')
  }
  

  const isAdmin = localStorage.getItem('isAdmin');
  const userId = localStorage.getItem('id');

  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
    if (Array.isArray(tests)) {
      setUserAnswers(Array(tests.length).fill(''));
    }
  }, [tests]);

  useEffect(() => {
    dispatch(loadTests());
  }, [dispatch]);

 const questionCountNew = scoreCandidate[0];
 const correct = scoreCandidate[1]
 const usedValue = scoreCandidate[2];
 const testCountNew = scoreCandidate[3]

 console.log('1 questionCount:', scoreCandidate[0]);
 console.log('2 correctAnswers:', scoreCandidate[1]);
 console.log('3 usedQuestionsLength:', scoreCandidate[2]);
 console.log('4 testCount:', scoreCandidate[3]);

  // Extract data from the scoreCandidate array
  const topics = overAllScoreCandidate.map((item) => item.topic);
  const topicCounts = overAllScoreCandidate.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidate.map((item) => item.correct);
  const usedCounts = overAllScoreCandidate.map((item) => item.used);
  const wrongCounts = overAllScoreCandidate.map((item) => item.wrong);

  console.log('correct== ', correct)
  console.log('usedValue== ', usedValue)
 


  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setTestName(e.target.value);

    dispatch(getTest(e.target.value));
    if (tests.length === 0) {
      dispatch(loadTests());
    }
  };

  // const handleInputChangeUnmarked = (e) => {
  //   e.preventDefault();
  //   setTestName(e.target.value);

  //   dispatch(getTest(e.target.value));
  //   if (tests.length === 0) {
  //     dispatch(loadTests());
  //   }
  // };

  // Event handler to handle option selection
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = (userAnswers: string, questionId: string, testName: string) => {
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName: string) => {
    dispatch(score_test(testName, userId));
  };

  const handleOverallScore = (testName: string) => {
    dispatch(overall_score_test(getOnlyName()));
  };

  const cleanName = (testName: string) => {
    // Split the input string by hyphens ("-")
    const parts = testName.split('-');

    // Extract the desired portion (from the first character to the last hyphen)
    const extractedString = parts.slice(0, -1).join(' ');

    //console.log(extractedString); // Output: "Paul Fleischer-Djoleto"
    return extractedString;
  };

  const getOnlyName = () => {
    // Use the split method to split the string by the hyphen character
    const parts = testName.split('-');

    // The part before the hyphen is at index 0
    const extractedPart = parts[0];
    return extractedPart;
  };

  //  const deleteCandidate = (testname) => {
  //    if (testname) {
  //      const newTestName = getOnlyName(testName);
  //      const result = window.confirm(
  //        'Are you sure you want to delete this item?'
  //      );
  //      if (result) {
  //        dispatch(deleteCandidateTests(newTestName));
  //        dispatch(setAlert('Deletion successful!', 'success'));
  //        dispatch(loadTests());
  //      } else {
  //        dispatch(setAlert('Deletion aborted!', 'danger'));
  //      }
  //    }
  //  };

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
            }}
          >
            <div className="form-group">
              Select old test to view statistics: &nbsp;
              <select
                name="testName"
                value={testName}
                onChange={handleInputChange}
                className="select-element"
              >
                <option key="default" value=""></option>
                {tests.map((test: Test) => (
                  <option key={test._id} value={test.test_name}>
                    {test.test_name}
                  </option>
                ))}
              </select>
            </div>
          </li>
        </ul>

        <div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleScore(testName)}
            >
              Show candidate overall statistics
            </button>
          </div>
          <div style={{ color: 'black', backgroundColor: 'white' }}>
            {/*Topics:{' '}*/}
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
          <li>
            <PieChartOverallCorrect correct={correct} used={usedValue} />
            <ProgressBar used={usedValue} questionCount={questionCountNew} />
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default ViewOverallStats;
