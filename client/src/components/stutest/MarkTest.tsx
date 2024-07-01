import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
  deleteCandidateTests,
  loadTestsUnmarked,
} from '../../actions/tests.ts';
import { setAlert } from '../../actions/alert.ts';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from '../profiles/Progressbar.tsx';
import PieChartOverallCorrect from '../profiles/PieChartOverallCorrect.tsx';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import { ScoreCandidate, ScoreCandidateState } from '../../reducers/scoreCandidate.ts';
import { TestUnmarked, TestsUnmarkedState } from '../../reducers/testsUnmarked.ts';
import { OverAllScoreCandidateState } from '../../reducers/overallScoreCandidate.ts';
import { SelectedTestState, SelectedTest} from '../../reducers/selectedTest.ts';

interface IValues {
  userId: string | null
  test_name: string
}

interface PieChartOverallCorrectProps {
  correct: number;
  used: number;
}

interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}


const MarkTest: React.FC = () => {
  console.log('in MarkTest')

  //useSelector hooks
  const { selectedTest }: SelectedTestState = useSelector(
    (state: RootState) => state.selectedTest 
  );
 
  const {overAllScoreCandidate}: OverAllScoreCandidateState = useSelector((state: RootState) => state.overAllScoreCandidate);

  const {scoreCandidate} = useSelector((state: RootState) => state.scoreCandidate);

  
  console.log('scoreCandidate== ', scoreCandidate)

  const { questionCount,
    correctAnswers,
    usedQuestionsLength,
    testCount }: ScoreCandidate = scoreCandidate;

console.log('1 questionCount:', scoreCandidate[0]);
console.log('2 correctAnswers:', scoreCandidate[1]);
console.log('3 usedQuestionsLength:', scoreCandidate[2]);
console.log('4 testCount:', scoreCandidate[3]);

  
  const testScore = scoreCandidate;

  const { testsUnmarked, loading, error }: TestsUnmarkedState = useSelector((state: RootState) => state.testsUnmarked) 

  const isAdmin = localStorage.getItem('isAdmin');
  const userId = localStorage.getItem('id');

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  //const [selectedTest, setSelectedTest] = useState(''); 
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const [loadingx, setLoadingx] = useState(true);

  if (!selectedTest ) {
    //return <div>No test selected yet</div>;
    console.log('No test selected yet')
  }

  
  let filteredSelectedTest: SelectedTest[] = [];

  if (Array.isArray(selectedTest)) {
    filteredSelectedTest = selectedTest.filter((test: SelectedTest) => {
      return test.answer_flag === '' || test.answer_flag === ' ';
    });
  }

  if (!testsUnmarked) {
    console.log('No unmarked tests', 'danger')
    dispatch(setAlert('No unmarked tests', 'danger'));
  }

  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
      if (Array.isArray(testsUnmarked)) {
        setUserAnswers(Array(testsUnmarked.length).fill(''));
      }
  }, [testsUnmarked]);

  ///////////////////////////////////////////////////
  useEffect(() => {
      console.log('in useEffect dispatch(loadTestsUnmarked())');  

      if (testsUnmarked.length === 0){
        dispatch(loadTestsUnmarked());
      }       
  }, []);
  ///////////////////////////////////////////////////

  if (!testsUnmarked || testsUnmarked.length === 0) {
    return <div>No unmarked tests</div>;
  }

  const uniqueTestnames: string[] = [];

  for (let i = 0; i < testsUnmarked.length; i++) {
    if (!uniqueTestnames.includes(testsUnmarked[i].test_name)) {
      uniqueTestnames.push(testsUnmarked[i].test_name);
    }
  }

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

  const handleInputChangeUnmarked = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('in handleInputChangeUnmarked ', e.target.value);

    e.preventDefault();
    setTestName(e.target.value);

    dispatch(getTest(e.target.value));

    if (testsUnmarked.length === 0) {
      dispatch(loadTestsUnmarked());
    }
  };

  const handleAnswer = (userAnswers: string, questionId: string, testName: string) => {
    console.log('in handleAnswer')
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName: string) => {
    dispatch(score_test(testName, userId));
  };

  const handleOverallScore = (testName: string) => {
    dispatch(overall_score_test(getOnlyName()));
  };

  const getOnlyName = () => {
    const parts = testName.split('-');
    const extractedPart = parts[0];
    return extractedPart;
  };

  const deleteCandidate = (testname: string) => {
    if (testname) {
      const newTestName = getOnlyName();
      const result = window.confirm(
        'Are you sure you want to delete this item?'
      );
      if (result) {
        dispatch(deleteCandidateTests(newTestName));
        dispatch(setAlert('Deletion successful!', 'success'));
        dispatch(loadTestsUnmarked());
      } else {
        dispatch(setAlert('Deletion aborted!', 'danger'));
      }
    }
  };

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
              Select a test to mark:
              <select
                name="testName"
                value={testName}
                onChange={(e) => handleInputChangeUnmarked(e)}
                className="select-element"
              >
                <option key="default" value=""></option> 

                {uniqueTestnames && uniqueTestnames.length > 0 ? (
                    uniqueTestnames.map((test, index) => (
                      <option key={index} value={test}>
                      {test}
                    </option>
                    ))
                  ) : (
                    <div>No tests found</div>
                )}
              </select>
{/* 
              {isAdmin === 'true' && (
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCandidate(testName)}
                >
                  Delete Old Candidate
                </button>
              )}  */}
            </div>
          </li>

          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {Array.isArray(filteredSelectedTest) ? (
              filteredSelectedTest.map((question, index) => (
                <div key={index}>
                  <p>
                    Question {index + 1}: {question.question}
                  </p>

                  {isAdmin === 'true' && (
                    <div style={{ color: 'black', backgroundColor: 'white' }}>
                      <p style={{ color: 'red', backgroundColor: 'white' }}>
                        Answer: {question.answer}
                      </p>

                      <div>
                        Topic: {question.topic} <br />
                        Difficulty Level: {question.difficulty_level}
                        <br />
                        Question Id: {question.questionId}
                        <br />
                        Test Name: {question.test_name}
                        <br />
                        Answer_flag: {question.answer_flag}
                      </div>

                      <div>
                        <label htmlFor="optionSelect">Select an option:</label>
                        <select
                          id="optionSelect"
                          value={userAnswers[index] || ''}
                          onChange={(e) => {
                            const updatedAnswers = [...userAnswers]; // Create a copy of the state array
                            updatedAnswers[index] = e.target.value; // Update the corresponding value
                            setUserAnswers(updatedAnswers); // Set the new state
                          }}
                          className="select-element"
                        >
                          <option value="">Select an option</option>
                          <option value="true">true</option>
                          <option value="false">false</option>
                        </select>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={() =>
                            handleAnswer(
                              userAnswers[index],
                              question.questionId,
                              question.test_name
                            )
                          }
                        >
                          Post Answer
                        </button>
                      </div>
                      <br />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No questions to display</p>
            )}
          </li>
        </ul>

        <div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleScore(testName)}
            >
              Show individual statistics
            </button>
          </div>
          <div style={{ color: 'black', backgroundColor: 'white' }}>
              {topics.map((topic, index) => (
                <span key={index}>
                  {topic}
                </span>
              ))}
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

export default MarkTest;
