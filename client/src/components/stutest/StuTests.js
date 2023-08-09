import React, {useState, useEffect} from 'react'

import { loadTests, getTest } from '../../actions/tests.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setAlert } from '../../actions/alert.js';
import { createStuTests } from '../../actions/stuTest.js';
import { Navigate } from 'react-router-dom';

import { getDataBasedOnParam } from './getDataBasedOnParam.js'; // Replace with the actual path to your selectors.js file


const StuTests = () => {
  const [params, setParam]  = useState('') 
  const [questionData, setQuestionData] = useState('');
  const [sujectNameData, setSujectNameData] = useState('');
  const [index, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stuquestions, setStuQuestions] = useState([]);
  const [stuTestData, setStuTestData] = useState({
    userId: '',
    test_name: '',
    question: '',
    answer: '',
    marks: 0,
    pass_marks: 0,
    subject_name: '',
  });

  // const questionNew = stuquestions[index]?.questionNew;
  const questionNew = stuquestions.length > 0 ? stuquestions[index] : '';

  //console.log('questionNew:', questionNew);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTests());
  }, [dispatch]);


  const tests = useSelector( (state) => (state.tests.tests));

  console.log('tests===', tests);

  const {
    userId,
    test_name,
    question,
    answer,
    marks,
    pass_marks,
    subject_name,
  } = stuTestData;

  stuTestData.marks = 0;
  const id = localStorage.getItem('id');

  if (!id) {
    setAlert('You have to login', 'danger');
    return <Navigate to="/dashboard" />;
  }
  stuTestData.userId = id;

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Optional, align items vertically in the center
    margin: '10px', // Optional, add some margin around the container
  };


  const handleInputChange = (e) => {
    setStuTestData({ ...stuTestData, [e.target.name]: e.target.value });

    //console.log('e.target.name:', e.target.name);
    if (e.target.name === 'test_name') {
      setParam(e.target.value);
    }

    const questions = tests.map((test) => test.question);

    const filteredTests = tests.filter(
      (test) => test.test_name === e.target.value
    );

    console.log('filteredTests====',filteredTests);

    const subjectNames = tests.map((test) => test.subject_name);

    console.log('questions=======', questions);

  
    setStuQuestions(questions);

    setSujectNameData(subjectNames[index]);

    setIsDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    stuTestData.userId = id;
    stuTestData.test_name = stuTestData.test_name;
    stuTestData.question = stuquestions[index - 1];

    stuTestData.subject_name = sujectNameData;

    console.log('stuTestData ready for submission:', stuTestData);

    dispatch(createStuTests(stuTestData));
  };

  const checkNumber = (number) => {
    if (number > stuquestions.length - 1) {
      console.log('stuTestData ready for submission:', stuTestData);

      dispatch(createStuTests(stuTestData));

      setAlert('Test completed', 'success');
      return <Navigate to="/dashboard" />;
    }

    return number;
  };

  const nextQuestion = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }); 
  };

//  const handleFocusResults = (e) => {
//    console.log('handleFocusResults, e.target.value==', e.target.value);
//    //setParam(test_name);
//    //dispatch(getTest(e.target.value));
//  };

  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div style={{ fontWeight: 'bolder' }}>
          <p> Question: {index}</p>
          <p> Student Id: {id}</p>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={nextQuestion}
          >
            Move to Next Test
          </button>
        </div>

        <div className="form-group">
          <div className="form-group">
            <h2>Select Test:</h2>
            <select
              name="test_name"
              value={test_name}
              onChange={handleInputChange}
              //   onBlur={(e) => handleFocusResults(e.target.value)}
              disabled={isDisabled}
            >
              <option key="default" value="">
                1/2023/History
              </option>
              {tests.map((test) => (
                <option key={test._id} value={test.test_name}>
                  {test.test_name}
                </option>
              ))}
            </select>
          </div>

          <p>Question:</p>
          <div style={containerStyle}>
            <textarea
              type="text"
              style={{
                width: '1300px',
                height: '150px',
                padding: '8px',
                margin: '5px',
                border: '2px solid #ccc',
                fontWeight: 'bolder',
              }}
              name="question"
              value={stuquestions[index]}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <p>Answer</p>
          <div style={containerStyle}>
            <textarea
              type="number"
              style={{
                width: '1800px',
                height: '150px',
                padding: '8px',
                margin: '5px',
                border: '2px solid #ccc',
              }}
              name="answer"
              value={answer}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/*{stuquestions.map((question, index) => {
          return <article key={index}>{question}</article>;
        })}*/}
      </form>
    </section>
  );
};

export default StuTests