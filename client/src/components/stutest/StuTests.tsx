import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert.ts';
import { createStuTests } from '../../actions/stuTest.ts';
import { loadTests } from '../../actions/tests.ts';
import { Test } from '../../reducers/types/Test.ts';

import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.js';

interface StuTestData {
  userid: string;
  test_name: string;
  question: string;
  answer: string;
  marks: number;
  pass_marks: number;
  subject_name: string;
}

interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
}


const StuTests: React.FC = () => {
  const [params, setParam] = useState('');
  const [questionData, setQuestionData] = useState('');
  const [subjectNameData, setSubjectNameData] = useState('');
  const [index, setIndex] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stuquestions, setStuQuestions] = React.useState<string[]>([]);
  const [navigate, setNavigate] = useState(false)


  const [stuTestData, setStuTestData] = useState<StuTestData>({
    userid: '',
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

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  useEffect(() => {
    dispatch(loadTests());
  }, [dispatch]);

  const tests = useSelector((state: RootState) => state.tests.tests);

  const {
    userid,
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
  stuTestData.userid = id;

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Optional, align items vertically in the center
    margin: '10px', // Optional, add some margin around the container
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    setStuTestData({ ...stuTestData, [e.target.name]: e.target.value });

    //console.log('e.target.name:', e.target.name);
    if (e.target.name === 'test_name') {
      setParam(e.target.value);
    }

    const questions = tests.map((test: Test) => test.question);

    const filteredTests = tests.filter(
      (test: Test) => test.test_name === e.target.value
    );

    const subjectNames = tests.map((test: Test) => test.subject_name);

    setStuQuestions(questions);

    setSubjectNameData(subjectNames[index]);

    setIsDisabled(true);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    stuTestData.userid = id;
    stuTestData.test_name = stuTestData.test_name;
    stuTestData.question = stuquestions[index - 1];

    stuTestData.subject_name = subjectNameData;

    console.log('stuTestData ready for submission:', stuTestData);

    dispatch(createStuTests(stuTestData));
  };

  const checkNumber = (number: number): number => {
    if (number > stuquestions.length - 1) {
      return -1; // Indicate navigation by returning -1
    }
    return number;
  };

  // const checkNumber = (number: number) => {
  //   if (number > stuquestions.length - 1) {

  //     dispatch(createStuTests(stuTestData));

  //     setAlert('Test completed', 'success');
  //     return <Navigate to="/dashboard" />;
  //   }

  //   return number;
  // };

  const nextQuestion = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      const checkedIndex = checkNumber(newIndex);

      if (checkedIndex === -1) {
        dispatch(createStuTests(stuTestData));

        dispatch(setAlert('Test completed', 'success'));

        setNavigate(true); // Set navigate state to true
        return index; // Return the current index to prevent further updates
      }

      return checkedIndex;
    });
  };

  // const nextQuestion = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  //  const handleFocusResults = (e) => {
  //    console.log('handleFocusResults, e.target.value==', e.target.value);
  //    //setParam(test_name);
  //    //dispatch(getTest(e.target.value));
  //  };

  return (
    <section className="container">
      {navigate && <Navigate to="/dashboard" />}

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
              {tests.map((test: Test) => (
                <option key={test._id} value={test.test_name}>
                  {test.test_name}
                </option>
              ))}
            </select>
          </div>

          <p>Question:</p>
          <div style={containerStyle}>
            <textarea
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
      </form>
    </section>
  );
};

export default StuTests;
