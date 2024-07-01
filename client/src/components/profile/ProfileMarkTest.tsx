import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadTestsUserid,
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
  deleteCandidateTests,
} from '../../actions/tests.ts';
import { setAlert } from '../../actions/alert.ts';
import { RootState } from '../../reducers/index.ts';
import PieChartOverallCorrect from '../profiles/PieChartOverallCorrect.tsx';
import ProgressBar from '../profiles/Progressbar.tsx';
import { ThunkDispatch } from 'redux-thunk';
import { ScoreCandidate, ScoreCandidateState } from '../../reducers/scoreCandidate.ts';
import { OverAllScoreCandidateState } from '../../reducers/overallScoreCandidate.ts';
import { IterationStatement } from 'typescript';
import { SelectedTestState } from '../../reducers/selectedTest.ts';


// interface IUserid {
//   userId: string
// }

// interface PieChartOverallCorrectProps {
//   correct: number;
//   used: number;
// }

// interface ProgressBarProps {
//   used: number;
//   questionCount: number;
// }

interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}

interface ProfileMarkTestProps {
  userId: string;
}

const ProfileMarkTest: React.FC<ProfileMarkTestProps> = ({ userId }) => {
  console.log('XXXXXXX in ProfileMarkTest: userId= ', userId)

  const tests = useSelector((state: RootState) => state.tests.tests) 
  
  const {scoreCandidate} = useSelector((state: RootState) => state.scoreCandidate);

  //const fetchedTest = useSelector((state: RootState) => state.selectedTest);
  const { selectedTest }: SelectedTestState = useSelector(
    (state: RootState) => state.selectedTest 
  );

  const {overAllScoreCandidate}: OverAllScoreCandidateState = useSelector((state: RootState) => state.overAllScoreCandidate);
  

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  //const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  console.log('overAllScoreCandidate:: ', overAllScoreCandidate)

  console.log('scoreCandidate== ', scoreCandidate)

  const { questionCount,
    correctAnswers,
    usedQuestionsLength,
    testCount }: ScoreCandidate = scoreCandidate;

console.log('1 questionCount:', scoreCandidate[0]);
console.log('2 correctAnswers:', scoreCandidate[1]);
console.log('3 usedQuestionsLength:', scoreCandidate[2]);
console.log('4 testCount:', scoreCandidate[3]);

  useEffect(() => {
    const fetchTestDetails = async () => {
      console.log('Fetching test details...');

      if (tests.length > 0 && userId) {
        dispatch(score_test(tests[0].toString(), userId));
      } else {
        console.log('No tests found for user.');
      }
    };

    const delay = setTimeout(fetchTestDetails, 1000);

    return () => clearTimeout(delay);
  }, [tests, userId, dispatch]);

  

  useEffect(() => {
    if (selectedTest) {
      dispatch(setAlert('Tests obtained', 'success'));
    }
  }, [selectedTest, dispatch]);

  
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

  useEffect(() => {
    if (Array.isArray(tests)) {
      setUserAnswers(Array(tests.length).fill(''));
    }
  }, [tests]);

  useEffect(() => {
    if (userId) {
       console.log('in useEffect dispatch(loadTestsUserid(userId));')

      dispatch(loadTestsUserid(userId));
      dispatch(setAlert('Tests obtained', 'success'));
      console.log('Tests obtained')
    } else {
      console.log('No user id provided');
      dispatch(setAlert('No user id provided', 'danger'));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestName(e.target.value);
    dispatch(getTest(e.target.value));
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = (userAnswers: string, questionId: string, testName: string) => {
    if (userId) {
      dispatch(postAnswer(questionId, userAnswers, testName, userId));
    }
  };

  const handleScore = (testName: string) => {
    if (userId) {
      dispatch(score_test(testName, userId));
    }
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

  return (
    <div>
    
      <div>
        <div>       
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
  )
};

export default ProfileMarkTest;

{/* <PieChartOverallCorrect correct={correct} used={usedValue} />
<ProgressBar used={usedValue} questionCount={questionCountNew} /> */}






