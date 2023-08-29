import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createTests, loadTests, deleteTest } from '../../actions/tests.js';
import { setAlert } from '../../actions/alert.js';
import { loadQuestions } from '../../actions/question.js';
import { findQuestion } from '../../actions/question.js';
import { loadSubjects } from '../../actions/subject.js';

const Question = () => {
  const [testData, setTestData] = useState({
    //
    test_name: '',
    question: '',
    answer: '',
    marks: 0,
    pass_marks: 0,
    subject_name: '',
  });

  const dispatch = useDispatch();

  const tests = useSelector((state) => state.tests.tests);

  console.log('tests===', tests);

  useEffect(() => {
    //console.log('in useEffect');
    dispatch(loadQuestions());
  }, []);

  useEffect(() => {
    //console.log('in useEffect');
    dispatch(loadSubjects());
  }, []);

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadTests());
  }, [dispatch]);

  //   const tests = useSelector((state) => state const tests = useSelector( (state) => (state.tests.tests));.tests.tests);
  const questions = useSelector((state) => state.question.questions);
  const questionLoading = useSelector((state) => state.question.loading);

  const subjects = useSelector((state) => state.subject.subjects);
  const subjectLoading = useSelector((state) => state.subject.loading);

  const otherQuestions = useSelector((state) => state.otherQuestion);
  const otherQuestionLoading = useSelector(
    (state) => state.otherQuestion.loading
  );

  const { questionX } = otherQuestions.questions;

  if (questionLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }

  if (subjectLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }

  const { test_name, question, answer, marks, pass_marks, subject_name } =
    testData;

  testData.marks = 0;

  const handleInputChange = (e) => {
    setTestData({ ...testData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!testData) {
      dispatch(setAlert('Question Creation failed', 'danger'));
    }

    testData.pass_marks = parseInt(testData.pass_marks);
    //testData.answer = otherQuestions.questions.answer;
    //testData.subject_name = otherQuestions.questions.subject;

    //Validation of field
    //test_name, question, answer, marks, pass_marks, subject_name;
    if (!test_name) {
      dispatch(setAlert('Test_name not entered', 'danger'));
      return;
    }
    if (!question) {
      dispatch(setAlert('Question not selected', 'danger'));
      return;
    }
    if (!answer) {
      dispatch(setAlert('Answer not entered', 'danger'));
      return;
    }
    if (pass_marks === 0) {
      dispatch(setAlert('Pass mark not entered', 'danger'));
      return;
    }
    if (!subject_name) {
      dispatch(setAlert('Subject not selected', 'danger'));
      return;
    }

    console.log('testData:', testData);
    dispatch(createTests(testData));
  };

  const handleFocusResults = (question) => {
    dispatch(findQuestion(question));
  };

  const deleteHandler = (id) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteTest(id));
    }
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Test Name: Month/Year/Subject</label>
          <input
            type="text"
            name="test_name"
            value={test_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <h2>Select Question:</h2>
          <select
            name="question"
            value={question}
            onChange={handleInputChange}
            onBlur={(e) => handleFocusResults(e.target.value)}
          >
            <option key="default" value=""></option>
            {questions.map((question) => (
              <option key={question._id} value={question.question}>
                {question.question}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Answer for Question:</label>
          <textarea
            type="text"
            name="answer"
            value={answer}
            //value={otherQuestions.questions.answer}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <textarea
            type="text"
            name="subject_name"
            value={subject_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Pass marks for this question</label>
          <input
            type="number"
            name="pass_marks"
            value={pass_marks}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Test
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>TEST NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tests) ? (
            tests.map((test) => (
              <tr key={test._id}>
                <td>{test._id}</td>
                <td>{test.test_name}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(test._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
        {/*{tests.map((test) => (
            <tr key={test._id}>
              <td>{test._id}</td>
              <td>{test.test_name}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => deleteHandler(test._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}*/}
        {/*</tbody>*/}
      </table>
    </section>
  );
};

export default Question;
