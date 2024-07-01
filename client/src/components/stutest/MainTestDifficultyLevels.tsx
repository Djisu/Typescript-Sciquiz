import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postAnswer, selectQuestionsDifficultylevels } from '../../actions/question.ts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import { setAlertValue } from '../../actions/action-types/alert.ts';
import { SelectedQuestion } from '../../reducers/selectedQuestions.ts';

interface Params extends Record<string, string | undefined> {
  checkedDifficultylevels: string;
  checkedSubjects: string;
  userId: string;
  noofquestions: string;
  test_name: string;
}

const MainTestDifficultyLevels: React.FC = () => {

  console.log('in MainTestDifficultyLevels')

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  let [questions, setQuestions] = useState<SelectedQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));

  const isAdmin = localStorage.getItem('isAdmin');

  const { checkedDifficultylevels, checkedSubjects, userId, noofquestions } = useParams<Params>();

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

  // Parse the string parameters into arrays and number
  const difficultyLevelsArray = checkedDifficultylevels.split(',');
  const subjectsArray = checkedSubjects.split(',');
  const numberOfQuestions = parseInt(noofquestions, 10);

  const selectedQuestions = useSelector((state: RootState) => state.selectedQuestions);

  const name = localStorage.getItem('name') ?? ''; // Provide a default value

  useEffect(() => {
    if (checkedDifficultylevels) {
      dispatch(
        selectQuestionsDifficultylevels(
          difficultyLevelsArray,
          subjectsArray,
          userId,
          numberOfQuestions
        )
      );
    }
  }, []);

  // Update selectedQuestions after API call
  useEffect(() => {
    console.log('in useEffect  if (selectedQuestions) {}')

    if (selectedQuestions) {
      setQuestions(selectedQuestions);

      console.log('questions fetched== ', questions)
     
    } else {
      console.log('in else No question found')
      setAlertValue('No question found', 'danger', '01');
    }
  }, [selectedQuestions]);

  const handleClick = () => {
    setShowAnswer(true);
  };

  const handleAnswer = (userAnswer: string, questionId: string) => {
    dispatch(postAnswer(questionId, userAnswer, name));
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {isAdmin && (
          <button className="btn btn-primary" onClick={handleClick}>
            See Answers
          </button>
        )}
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {questions.map((question, index) => (
              <div key={index}>
                <div>
                  <p>
                    Question {index}: {question.question}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    name="user_answer"
                    placeholder="Type answer"
                    value={userAnswers[index] || ''}
                    onChange={(e) => {
                      const updatedAnswers = [...userAnswers]; // Create a copy of the state array
                      updatedAnswers[index] = e.target.value; // Update the corresponding value
                      setUserAnswers(updatedAnswers); // Set the new state
                    }}
                    style={{
                      width: '100%', // Set the input width to 100%
                      padding: '8px', // Add some padding for spacing
                      border: '1px solid #ccc', // Add a border for styling
                      borderRadius: '4px', // Add rounded corners
                    }}
                  />
                  {isAdmin === 'true' && (
                    <div style={{ color: 'red', backgroundColor: 'white' }}>
                      Topic: {question.topic}
                      Difficulty Level: {question.difficulty_level}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() =>
                      handleAnswer(userAnswers[index], question._id)
                    }
                  >
                    Post Answer
                  </button>
                </div>
                {showAnswer && (
                  <div style={{ color: 'red', backgroundColor: 'white' }}>
                    <p>Answer: {question.answer}</p>
                  </div>
                )}
                <br />
                <ToastContainer position="top-right" autoClose={3000} />
              </div>
            ))}
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainTestDifficultyLevels;
