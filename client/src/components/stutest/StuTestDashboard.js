import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTopics } from '../../actions/topic.js';

//import { fetchUniqueTopics } from '../../actions/topic.js';
//import { fetchUniqueDifficultyLevels } from '../../actions/difficulty_level.js';
//import { fetchUniqueSubjects } from '../../actions/subject.js';
import MainTest from './MainTest.js';
import MainTestTopics from './MainTestTopics.js';
import MainTestDifficultyLevels from './MainTestDifficultyLevels.js';
import MainTestSubjects from './MainTestSubjects.js';
import { setAlert } from '../../actions/alert.js';

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

  const topics = useSelector((state) => state.topics);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [loadTopics, setLoadTopics] = useState(false);

  const initialSubjects = useSelector(
    (state) => state.fetchUniqueSubjects.fetchUniqueSubjects
  );

  const userid = localStorage.getItem('id');

  const newSubjects = initialSubjects;

  //Find out if user is authenticated or not
  useEffect(() => {
    if (!userid || userid.length == 0) {
      dispatch(setAlert('You have to login!!', 'danger'));
      return <Navigate to="/login" />;
    }
  });

  useEffect(() => {
    if (loadTopics && selectedSubject) {
      dispatch(fetchTopics(selectedSubject));
    }
  }, [dispatch, selectedSubject, loadTopics]);

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
    const selectedValue = e.target.value;
    setSelectedSubject(selectedValue);
    //setSelectedOption(e.target.value);

    if (selectedValue) {
      // Fetch topics when a subject is selected
      dispatch(fetchTopics(selectedValue));
    }
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

    let url = '';

    setCheckedSubjects([...checkedSubjects, selectedOption]);

    if (
      // checkedTopics
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length == 0 &&
      checkedSubjects.length > 0
    ) {
      url = `/maintesttopics/${checkedTopics}/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedDifficultylevels
      checkedDifficultylevels.length > 0 &&
      checkedTopics.length == 0 &&
      checkedSubjects.length > 0
    ) {
      url = `/maintestdifficultylevels/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedSubjects
      checkedSubjects.length > 0 &&
      checkedTopics.length == 0 &&
      checkedDifficultylevels.length == 0
    ) {
      url = `/maintestsubjects/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedTopics checkedDifficultylevels checkedSubjects
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length > 0 &&
      checkedSubjects.length == 0
    ) {
      url = `/maintesttopicsdifficultylevels/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`;
    } else if (
      // checkedTopics checkedDifficultylevels checkedSubjects
      checkedTopics.length > 0 &&
      checkedDifficultylevels.length > 0 &&
      checkedSubjects.length > 0
    ) {
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
          //  value={selectedOption}
          onChange={handleInputChange}
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

        {topics.loading ? (
          <p>Loading...</p>
        ) : topics.error ? (
          <p>Error: {topics.error}</p>
        ) : (
          <ul>
            {topics.map((topic, index) => (
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
                  {topic.topic}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StuTestDashboard;
