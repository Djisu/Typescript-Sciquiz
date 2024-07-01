import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectQuestionsSubjects } from '../../actions/question.ts';
import { setAlert } from '../../actions/alert.ts';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import { setAlertValue } from '../../actions/action-types/alert.ts';

interface ISelectedQuestion {
  _id: string
  test_name: string
  questionId: string
  question: string
  answer: string
  difficulty_level: string
  subject_name: string
  topic: string
  question_year: Date
  user_answer: string
}

interface Params extends Record<string, string | undefined> {
  checkedSubjects: string;
  userId: string;
  noofquestions: string;
}

const MainTestSubjects: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  let [questions, setQuestions] = useState<ISelectedQuestion[]>([]);
  const isAdmin = localStorage.getItem('isAdmin');

  const { checkedSubjects, userId, noofquestions } = useParams<Params>();

  if (!checkedSubjects || checkedSubjects.length === 0) {
    return  <div>No subjects found</div>;
  }
  if (!userId) {
    return  <div>No user id found</div>;
  }
  if (!noofquestions) {
    return  <div>No number of questions found</div>;
  }

  const selectedQuestions = useSelector((state: RootState) => state.selectedQuestions);

  // Parse the string parameters into arrays and number
  const subjectsArray = checkedSubjects.split(',');
  const numberOfQuestions = parseInt(noofquestions, 10);

  useEffect(() => {
    console.log('in useEffect');

    if (subjectsArray) {
      dispatch(selectQuestionsSubjects(subjectsArray, userId, numberOfQuestions));
    }
  }, []);

  // Update selectedQuestions after API call
  useEffect(() => {
    if (selectedQuestions) {
      // Replace with actual variable name
      setQuestions(selectedQuestions);
      console.log('questions==', questions);
    } else {
      setAlertValue('No question found', 'danger', '01');
    }
  }, [selectedQuestions]);

  const handleClick = () => {
    setShowAnswer(true);
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
                  Question:{index} <span> </span>
                  {question.question}
                </div>

                {showAnswer && (
                  <p style={{ color: 'red', backgroundColor: 'white' }}>
                    Answer: {question.answer}
                  </p>
                )}
                <br />
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

export default MainTestSubjects;
