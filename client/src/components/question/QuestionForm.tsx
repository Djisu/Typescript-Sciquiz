import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loadDifficultyLevels } from '../../actions/difficulty_level.ts';
import { loadSubjects } from '../../actions/subject.ts';
import { loadTopics } from '../../actions/topic.ts';
import {
  createQuestion,
  deleteQuestion,
  loadQuestions,
} from '../../actions/question.ts';
import { setAlert } from '../../actions/alert.ts';
import { ThunkDispatch } from 'redux-thunk';
import { Question as QuestionType } from '../../reducers/question.ts';
import { Subject } from '../../reducers/subject.ts';
import { RootState } from '../../reducers/index.ts';

import { DifficultyLevel } from '../../reducers/difficulty_level.ts';
import { Topic } from '../../reducers/topic.ts';

const QuestionForm: React.FC = () => {
  const [questionData, setQuestionData] = useState({
    question: '',
    answer: '',
    difficulty_level: '',
    subject_name: '',
    topic: '',
    question_year: 0,
  });

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadSubjects());
  }, [dispatch]);

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadDifficultyLevels());
  }, [dispatch]);

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadTopics());
  }, [dispatch]);

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadQuestions());
  }, [dispatch]);

  const difficultyLevels = useSelector(
    (state: RootState) => state.difficultyLevel as DifficultyLevel[]
  );
  const difficultyLevelLoading = useSelector(
    (state: RootState) => state.difficultyLevel 
  );

  const subjectsState = useSelector((state: RootState) => state.subject) ;
  // Access the subjects array from the subjectsState
  const { subjects } = subjectsState;

  const subjectLoading = useSelector((state: RootState) => state.subject.loading);

  const topics = useSelector((state: RootState) => state.topics.topics) ;
  const topicLoading = useSelector((state: RootState) => state.topics.loading);

  const questions = useSelector((state: RootState) => state.question) as QuestionType[]

  if (difficultyLevelLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }

  if (subjectLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }

  if (topicLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }
 
  const {
    question,
    answer,
    difficulty_level,
    subject_name,
    topic,
    question_year,
  } = questionData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!questionData) {
      dispatch(setAlert('Question Creation Successful', 'success'));
    }

    dispatch(createQuestion(questionData));
  };

  const deleteHandler = (id: string) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteQuestion(id));
    }
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question(Don't add a ? to the end of the question):</label>
          <input
            type="text"
            name="question"
            value={question}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Answer:</label>
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <h2>Select Difficulty Level:</h2>
          <select
            name="difficulty_level"
            value={difficulty_level}
            onChange={handleInputChange}
          >
            <option key="default" value=""></option>
            {difficultyLevels.map((level: DifficultyLevel) => (
              <option key={level._id} value={level.level}>
                {level.level}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <h2>Select Subject:</h2>
          <select
            name="subject_name"
            value={subject_name}
            onChange={handleInputChange}
          >
            <option key="default" value="">
              Maths
            </option>
            {subjects.map((subject: Subject) => (
              <option key={subject.subject_name} value={subject.subject_name}>
                {subject.subject_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <h2>Select Topic:</h2>
          <select name="topic" value={topic} onChange={handleInputChange}>
            <option key="default" value="">
              Accra
            </option>
            {topics.map((topic: Topic, index: number) => (
              <option key={index} value={topic.topic}>
                {topic.topic}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Question year:</label>
          <input
            type="text"
            name="question_year"
            value={question_year}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Question
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>QUESTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question: QuestionType, index: number) => (
            <tr key={index}>
              <td>{question.question}</td>
              <td>{question.question}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => deleteHandler(question.question)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default QuestionForm;
