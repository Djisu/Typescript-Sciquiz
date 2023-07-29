import React, { useState, useEffect } from 'react';
import { createQuestion } from '../../actions/question.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert.js';
import { useSelector } from 'react-redux';
import { loadDifficultyLevels } from '../../actions/difficulty_level.js';
import { loadSubjects } from '../../actions/subject.js'
import { loadTopics } from '../../actions/topic.js';


const Question = () => {
  const [questionData, setQuestionData] = useState({
    question: '',
    answer: '',
    difficulty_level: '',
    subject_name: '',
    topic: '',
    question_year: '',
  });

const dispatch = useDispatch();

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

  const difficultyLevels = useSelector(
    (state) => state.difficultyLevel.difficultyLevels
  );
  const difficultyLevelLoading = useSelector(
    (state) => state.difficultyLevel.loading
  );
 
  const subjects = useSelector((state) => state.subject.subjects);
  const subjectLoading = useSelector((state) => state.subject.loading);

  const topics = useSelector((state) => state.topic.topics);
  const topicLoading = useSelector((state) => state.topic.loading);

 

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
console.log('difficultylevels:::', difficultyLevels);
console.log('subjects:::', subjects);
console.log('topics:::', topics);


  const {
    question,
    answer,
    difficulty_level,
    subject_name,
    topic,
    question_year,
  } = questionData;

  const handleInputChange = (e) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionData) {
      dispatch(setAlert('Question Creation Successful', 'success'));
    }

    dispatch(createQuestion(questionData));
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
          <select name="difficulty_level" value={difficulty_level} onChange={handleInputChange}>
            <option key="default" value="">
              Easy
            </option>
            {difficultyLevels.map((level) => (
              <option key={level._id} value={level.level}>
                {level.level}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <h2>Select Subject:</h2>
          <select name="subject_name" value={subject_name} onChange={handleInputChange}>
            <option key="default" value="">
              Maths
            </option>
            {subjects.map((subject_name) => (
              <option key={subject_name._id} value={subject_name.subject_name}>
                {subject_name.subject_name}
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
            {topics.map((topic) => (
              <option key={topic._id} value={topic.topic}>
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
    </section>
  );
};

export default Question;
