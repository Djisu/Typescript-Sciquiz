// components/stutest/StuCreateTest.js

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';

import { fetchTopics } from '../../actions/topic.js';
import { fetchDifficultyLevels } from '../../actions/difficulty_level.js';
import { fetchUniqueSubjects } from '../../actions/subject.js';
//import topicReducer from '../../reducers/topic.js';
import { setAlert } from '../../actions/alert.js';

const StuCreateTest = () => {
  const selectStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '200px',
  };

  const labelStyle = {
    marginBottom: '10px', // Add space below the label
  };

  const checkboxContainerStyle = {
    marginBottom: '10px',
  };

  const checkboxLabelStyle = {
    display: 'inline-block',
    marginLeft: '5px',
    cursor: 'pointer',
  };

  const userid = localStorage.getItem('id');

//Find out if user is authenticated or not
useEffect(() => {
  if (!userid) {
    dispatch(setAlert('You have to login!!', 'danger'));
    return <Navigate to="/login" />;
  }
},[]);

  const [loadTopics, setLoadTopics] = useState(false);
  const [loadDifficultLevel, setLoadDifficultLevel] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState('');

  let [checkedTopics, setCheckedTopics] = useState([]);
  let [checkedDifficultylevel, setCheckedDifficultylevels] = useState([]);
  let [checkedSubjects, setCheckedSubjects] = useState([]);
  let [noofquestions, setNoofquestions] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  //  const topics = useSelector((state) => state.topics.topics);
  const topics = useSelector((state) =>
    state.topics.topics.map(({ topic, count }) => ({ topic, count }))
  );

  const initialDifficultyLevels = useSelector(
    (state) => state.difficultyLevel.difficultyLevels
  );

  //  console.log('TOPICS ARE== ', topics);

  const initialSubjects = useSelector(
    (state) => state.fetchUniqueSubjects.fetchUniqueSubjects
  );

  useEffect(() => {
    dispatch(fetchUniqueSubjects());
  }, []);


  const newSubjects = initialSubjects;

  const handleNoofQuestions = (e) => {
    setNoofquestions(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selectedSubject = e.target.value;

    setSelectedSubject(selectedSubject);

    // Fetch topics based on the selected subject
    if (selectedSubject) {
      dispatch(fetchTopics(selectedSubject));
    }

    //Fetch difficult levels based on the selected subject
    if (selectedSubject) {
      dispatch(fetchDifficultyLevels(selectedSubject));
    }
  };

  const toggleCheckboxTopic = (topicData) => {
    console.log('in toggleCheckboxTopic', topicData.topic);

    setCheckedTopics((prevCheckedTopics) => {
      const updatedTopics = [...prevCheckedTopics];

      if (updatedTopics.includes(topicData.topic)) {
        updatedTopics.splice(updatedTopics.indexOf(topicData.topic), 1);
      } else {
        updatedTopics.push(topicData.topic);
      }

      console.log('checkedTopics:: ', updatedTopics);
      return updatedTopics;
    });
    setIsChecked(!isChecked);
  };

  const toggleCheckboxLevel = (level) => {
    if (checkedDifficultylevel.includes(level)) {
      setCheckedDifficultylevels(
        checkedDifficultylevel.filter((item) => item !== level)
      );
    } else {
      setCheckedDifficultylevels([...checkedDifficultylevel, level]);
    }

    console.log('checkedDifficultylevels:: ', checkedDifficultylevel);
  };
  

  const handleButtonClick = () => {
      console.log('in handleButtonClick');

      checkedSubjects = [selectedSubject.toString()];

      if (!checkedSubjects) {
        console.log('Select the subject');
        return;
      }

      if (checkedDifficultylevel.length == 0 || !checkedDifficultylevel) {
        dispatch(setAlert('Select a difficulty level', 'danger'));
        console.log('Select a difficulty level')
        return
      }

      console.log('Checked Topics:', checkedTopics);
      console.log('Checked Level:', checkedDifficultylevel);
      console.log('Checked Subjects:', checkedSubjects);
      console.log('noofquestions:', parseInt(noofquestions));

      let url = '';

      setCheckedSubjects([...checkedSubjects, selectedSubject]);

      if (
        // checkedTopics
        checkedTopics.length > 0 &&
        checkedDifficultylevel.length == 0 &&
        checkedSubjects.length > 0
      ) {
        console.log(
          'in checkedTopics && !checkedDifficultylevels && checkedsubjects'
        );
        url = `/maintesttopics/${checkedTopics}/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        // checkedDifficultylevels
        checkedDifficultylevel.length > 0 &&
        checkedTopics.length == 0 &&
        checkedSubjects.length > 0
      ) {
        console.log('ONLY DIFFICULTY LEVELS');

        console.log(checkedDifficultylevel && !checkedTopics);
        url = `/maintestdifficultylevels/${checkedDifficultylevel}/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        // checkedSubjects
        checkedSubjects.length > 0 &&
        checkedTopics.length == 0 &&
        checkedDifficultylevel.length == 0
      ) {
        console.log(
          'in checkedsubjects && !checkedTopics && !checkedDifficultylevels'
        );
        url = `/maintestsubjects/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        // checkedTopics checkedDifficultylevels checkedSubjects
        checkedTopics.length > 0 &&
        checkedDifficultylevel.length > 0 &&
        checkedSubjects.length == 0
      ) {
        console.log(
          'in checkedTopics && checkedDifficultylevels && !checkedsubjects'
        );
        url = `/maintesttopicsdifficultylevels/${checkedTopics}/${checkedDifficultylevel}/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        // checkedTopics checkedDifficultylevels checkedSubjects
        checkedTopics.length > 0 &&
        checkedDifficultylevel.length > 0 &&
        checkedSubjects.length > 0 &&
        userid && userid.length > 0 &&
        parseInt(noofquestions) > 0
      ) {
        console.log(
          'in checkedTopics && checkedDifficultylevels && checkedsubjects LOOK',
          checkedTopics,
          checkedDifficultylevel,
          checkedSubjects,
          userid,
          noofquestions
        );
        url = `/maintest/${checkedTopics}/${checkedDifficultylevel}/${checkedSubjects}/${userid}/${noofquestions}`;
      }

      navigate(url);
  };

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="form-group">
        <h4>Select Subject:</h4>
        <select
          style={selectStyle}
          onChange={handleSelectChange}
          value={selectedSubject}
        >
          <option key="default" value="">
            Select a subject
          </option>
          {newSubjects.map((newSubject, index) => (
            <option key={index} value={newSubject}>
              {newSubject}
            </option>
          ))}
        </select>
        &nbsp; &nbsp;
        <input
          type="number"
          style={selectStyle}
          id={noofquestions}
          onChange={handleNoofQuestions}
          value={noofquestions}
          placeholder="Number of questions"
        />
        &nbsp; &nbsp;
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Get Checked Questions
        </button>
      </div>
      <br />
      <br />

      <div className="float-left">
        <h4 style={labelStyle}>Topics:</h4>

        {Array.isArray(topics) ? (
          <ul>
            {topics.map((topicData, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`topic-${index}`}
                  checked={checkedTopics.includes(topicData.topic)}
                  onChange={() => toggleCheckboxTopic(topicData)}
                />
                &nbsp;
                <label
                  htmlFor={`topic-${index}`}
                  style={{ color: 'black', backgroundColor: 'white' }}
                >
                  {topicData.topic}
                </label>{' '}
                &nbsp;
                <label style={{ color: 'red', backgroundColor: 'white' }}>
                  {topicData.count}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <span></span>
      <div className="float-left">
        <h4 style={labelStyle}>Difficulty Levels:</h4>

        {Array.isArray(initialDifficultyLevels) ? (
          <ul>
            {initialDifficultyLevels.map((level, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`level-${index}`}
                  checked={checkedDifficultylevel.includes(level)}
                 
                  onChange={() => toggleCheckboxLevel(level)}
                />
                &nbsp;
                <label
                  htmlFor={`level-${index}`}
                  style={{ color: 'black', backgroundColor: 'white' }}
                >
                  {level}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};
export default StuCreateTest;
