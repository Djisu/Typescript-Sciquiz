// components/stutest/StuCreateTest.js

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchTopics } from '../../actions/topic.js';
import { fetchDifficultyLevels } from '../../actions/difficulty_level.js';
import { fetchUniqueSubjects } from '../../actions/subject.js';
import topicReducer from '../../reducers/topic.js';
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

  const [loadTopics, setLoadTopics] = useState(false);
  const [loadDifficultLevel, setLoadDifficultLevel] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState('');

  let [checkedTopics, setCheckedTopics] = useState([]);
  let [checkedDifficultylevels, setCheckedDifficultylevels] = useState([]);
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

  const userid = localStorage.getItem('id');

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
    if (checkedDifficultylevels.includes(level)) {
      setCheckedDifficultylevels(
        checkedDifficultylevels.filter((item) => item !== level)
      );
    } else {
      setCheckedDifficultylevels([...checkedDifficultylevels, level]);
    }

    console.log('checkedDifficultylevels:: ', checkedDifficultylevels);
  };

  const handleButtonClick = () => {
    console.log('in handleButtonClick');

    checkedSubjects = [selectedSubject.toString()];

    if (!checkedSubjects) {
      console.log('Select the subject');
      return;
    }

    if (checkedDifficultylevels.length == 0) {
      dispatch(setAlert('Select a difficulty level', 'danger'));

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }

    console.log('Checked Topics:', checkedTopics);
    console.log('Checked Level:', checkedDifficultylevels);
    console.log('Checked Subjects:', checkedSubjects);
    console.log('noofquestions:', parseInt(noofquestions));

    let url = '';

    setCheckedSubjects([...checkedSubjects, selectedSubject]);

    if (
      // checkedTopics
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length == 0 &&
      checkedSubjects.length > 0
    ) {
      console.log(
        'in checkedTopics && !checkedDifficultylevels && checkedsubjects'
      );
      url = `/maintesttopics/${checkedTopics}/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedDifficultylevels
      checkedDifficultylevels.length > 0 &&
      checkedTopics.length == 0 &&
      checkedSubjects.length > 0
    ) {
      console.log('ONLY DIFFICULTY LEVELS');

      console.log(checkedDifficultylevels && !checkedTopics);
      url = `/maintestdifficultylevels/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedSubjects
      checkedSubjects.length > 0 &&
      checkedTopics.length == 0 &&
      checkedDifficultylevels.length == 0
    ) {
      console.log(
        'in checkedsubjects && !checkedTopics && !checkedDifficultylevels'
      );
      url = `/maintestsubjects/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedTopics checkedDifficultylevels checkedSubjects
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length > 0 &&
      checkedSubjects.length == 0
    ) {
      console.log(
        'in checkedTopics && checkedDifficultylevels && !checkedsubjects'
      );
      url = `/maintesttopicsdifficultylevels/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedTopics checkedDifficultylevels checkedSubjects
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length > 0 &&
      checkedSubjects.length > 0 &&
      userid.length > 0 &&
      parseInt(noofquestions) > 0
    ) {
      console.log(
        'in checkedTopics && checkedDifficultylevels && checkedsubjects LOOOOOK',
        checkedTopics,
        checkedDifficultylevels,
        checkedSubjects,
        userid,
        noofquestions
      );
      url = `/maintest/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`;
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
                  checked={checkedDifficultylevels.includes(level)}
                  ref={inputRef}
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
