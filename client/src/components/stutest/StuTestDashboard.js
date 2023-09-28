import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUniqueTopics } from '../../actions/topic.js';
import { fetchUniqueDifficultyLevels } from '../../actions/difficulty_level.js';
import { fetchUniqueSubjects } from '../../actions/subject.js';
import MainTest from './MainTest.js';
import MainTestTopics from './MainTestTopics.js';
import MainTestDifficultyLevels from './MainTestDifficultyLevels.js';
import MainTestSubjects from './MainTestSubjects.js';

const StuTestDashboard = () => {
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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let [checkedTopics, setCheckedTopics] = useState([]);
  let [checkedDifficultylevels, setCheckedDifficultylevels] = useState([]);
  let [checkedSubjects, setCheckedSubjects] = useState([]);
  let [noofquestions, setNoofquestions] = useState(0);

  const [selectedOption, setSelectedOption] = useState(''); // initial selected option

  const initialTopics = useSelector(
    (state) => state.fetchUniqueTopics.fetchUniqueTopics
  );

  const initialDifficultyLevels = useSelector(
    (state) => state.fetchUniqueDifficultyLevels.fetchUniqueDifficultyLevels
  );

  const initialSubjects = useSelector(
    (state) => state.fetchUniqueSubjects.fetchUniqueSubjects
  );

  useEffect(() => {
    dispatch(fetchUniqueTopics());
  }, []);

  useEffect(() => {
    dispatch(fetchUniqueDifficultyLevels());
  }, []);

  useEffect(() => {
    dispatch(fetchUniqueSubjects());
  }, []);

  const userid = localStorage.getItem('id');

  const newTopics = initialTopics.fetchUniqueTopics;

  const newDifficultyLevels =
    initialDifficultyLevels.fetchUniqueDifficultyLevels;

  const newSubjects = initialSubjects;

  //  console.log('newSubjects:', newSubjects);

  const toggleCheckboxTopic = (topic, level) => {
    if (checkedTopics.includes(topic)) {
      setCheckedTopics(checkedTopics.filter((item) => item !== topic));
    } else {
      setCheckedTopics([...checkedTopics, topic]);
    }
  };

  const toggleCheckboxLevel = (level) => {
    if (checkedDifficultylevels.includes(level)) {
      setCheckedDifficultylevels(
        checkedDifficultylevels.filter((item) => item !== level)
      );
    } else {
      setCheckedDifficultylevels([...checkedDifficultylevels, level]);
    }
  };

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNoofQuestions = (e) => {
    setNoofquestions(e.target.value);
  };
  // I HAVE TO ADD THE SELECTED SUBJECT TO THE FETCH PARAMETERS FOR QUESTIONS!!!!!

  const handleButtonClick = () => {
    checkedSubjects = [selectedOption.toString()];

    if (!checkedSubjects) {
      console.log('Select the subject');
      return;
    }

    console.log('Checked Topics:', checkedTopics);
    console.log('Checked Level:', checkedDifficultylevels);
    console.log('Checked Subjects:', checkedSubjects);
    console.log('noofquestions:', parseInt(noofquestions));

    let url = '';

    setCheckedSubjects([...checkedSubjects, selectedOption]);

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
      checkedSubjects.length > 0
    ) {
      console.log(
        'in checkedTopics && checkedDifficultylevels && checkedsubjects'
      );
      url = `/maintest/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`;
    }

    navigate(url);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className="form-group">
        <h2>Select Subject:</h2>
        <select
          style={selectStyle}
          name="newSubjects"
          value={selectedOption}
          onChange={handleInputChange}
        >
          <option key="default" value="">
            Select subject
          </option>
          {newSubjects.map((newSubject, index) => (
            <option key={index} value={newSubject}>
              {newSubject}
            </option>
          ))}
        </select>
        <input
          type="number"
          style={selectStyle}
          id={noofquestions}
          onChange={handleNoofQuestions}
          value={noofquestions}
          placeholder="Number of questions"
        />
      </div>
      <br />

      <button className="btn btn-primary" onClick={handleButtonClick}>
        Get Checked Questions
      </button>
      <div className="float-left">
        <h2 style={labelStyle}>Topics:</h2>
        <ul>
          {initialTopics.map((topic, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`topic-${index}`}
                checked={checkedTopics.includes(topic)}
                onChange={() => toggleCheckboxTopic(topic)}
              />
              <span> </span>
              <label
                htmlFor={`topic-${index}`}
                style={{ color: 'black', backgroundColor: 'white' }}
              >
                {topic}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <span> </span>
      <div className="float-left">
        <h2 style={labelStyle}>Levels:</h2>
        <ul>
          {initialDifficultyLevels.map((level, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`level-${index}`}
                checked={checkedDifficultylevels.includes(level)}
                onChange={() => toggleCheckboxLevel(level)}
              />
              <span> </span>
              <label
                htmlFor={`level-  ${index}`}
                style={{ color: 'black', backgroundColor: 'white' }}
              >
                {level}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StuTestDashboard;
