import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectQuestionsTopicsDifficultylevels } from '../../actions/question.ts';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert.ts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import { ISelectedQuestionsState, SelectedQuestion } from '../../reducers/selectedQuestions.ts';

interface Params extends Record<string, string | undefined> {
  checkedTopics: string;
  checkedDifficultylevels: string;
  checkedSubjects: string;
  userId: string;
  noofquestions: string;
  test_name: string;
}

const MainTest: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [testName, setTestName] = useState('');

  const { 
    checkedTopics, 
    checkedDifficultylevels, 
    checkedSubjects, 
    userId, 
    noofquestions, 
    test_name 
  } = useParams<Params>();

  if (!checkedTopics || checkedTopics.length === 0) {
    return  <div>No topics found</div>;
  }
  if (!checkedDifficultylevels || checkedDifficultylevels.length === 0) {
    return  <div>No difficulty levels found</div>;
  }
  if (!checkedSubjects || checkedSubjects.length === 0) {
    return  <div>No subjects found</div>;
  }
  if (!userId) {
    return  <div>No user id found</div>;
  }
  if (!noofquestions) {
    return  <div>No number of questions found</div>;
  }
  const {selectedQuestions, loading, error}: ISelectedQuestionsState = useSelector((state: RootState) => state.selectedQuestions) 

  console.log("selectedQuestions:: ", selectedQuestions)

  const name = localStorage.getItem('name') ?? ''; // Provide a default value


  const isAdminString = localStorage.getItem('isAdmin') ?? '';
  const isAdmin: boolean = isAdminString === 'true';
  

  
  const [newTestName, setNewTestName] = useState(''); // Use state to store the test name

  const navigate = useNavigate();

  let responseflag = false;

  const dispatchSelectQuestions = useCallback(() => {
    if (
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length > 0 &&
      responseflag == false
    ) {
      // Parse the string parameters into arrays and number
      const topicsArray = checkedTopics.split(',');
      const difficultyLevelsArray = checkedDifficultylevels.split(',');
      const subjectsArray = checkedSubjects.split(',');
      const numberOfQuestions = parseInt(noofquestions, 10);

      dispatch(
        selectQuestionsTopicsDifficultylevels(
          topicsArray,
          difficultyLevelsArray,
          subjectsArray,
          userId,
          numberOfQuestions,
          name // Use the generated test name here
        )
      );
      responseflag = true;
    } else {
      setAlert('No questions found', 'danger');
    }
  }, [
    dispatch,
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions,
    responseflag,
  ]);

  useEffect(() => {
    console.log('in useEffect MainTest.js');

    dispatchSelectQuestions();
  }, []); // Call dispatchSelectQuestions only once on component mount

  const handleClick = () => {
    setShowAnswer(true);
  };

  const deleteQuestion = (questionId: string) => {};

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {isAdmin === true && (
          <button className="btn btn-primary" onClick={handleClick}>
            See Answers
          </button>
        )}
        {testName && <p>Test name: {testName}</p>}

        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {Array.isArray(selectedQuestions) ? (
              selectedQuestions.map((question, index) => (
                <div key={index}>
                  <p>
                    Question {index + 1}: {question.question}
                  </p>

                  <div>
                    {isAdmin === true && (
                      <div style={{ color: 'red', backgroundColor: 'white' }}>
                        Topic: {question.topic}
                        Difficulty Level: {question.difficulty_level}
                      </div>
                    )}
                  </div>
                  {showAnswer && (
                    <div style={{ color: 'red', backgroundColor: 'white' }}>
                      <p>Answer: {question.answer}</p>
                    </div>
                  )}
                  <br />
                  <ToastContainer position="top-right" autoClose={3000} />
                </div>
              ))
            ) : (
              <p>No questions to display</p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTest;
