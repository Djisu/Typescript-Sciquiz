import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUniqueTopics } from '../../actions/topic.js';
import { fetchUniqueDifficultyLevels } from '../../actions/difficulty_level.js';
import MainTest from './MainTest.js';
import MainTestTopics from './MainTestTopics.js';
import MainTestDifficultyLevels from './MainTestDifficultyLevels.js';

const StuTestDashboard = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [checkedTopics, setCheckedTopics] = useState([]);
  const [checkedDifficultylevels, setCheckedDifficultylevels] = useState([]);

  const initialTopics = useSelector(
    (state) => state.fetchUniqueTopics.fetchUniqueTopics
  );

  const initialDifficultyLevels = useSelector(
    (state) => state.fetchUniqueDifficultyLevels
  );

  useEffect(() => {
    //try {
    //  dispatch(fetchUniqueTopics());
    //} catch (error) {
    //  console.error('Error fetching topics:', error);
    //}
    dispatch(fetchUniqueTopics());
  }, []);

  useEffect(() => {
    //try {
    //  dispatch(fetchUniqueDifficultyLevels());
    //} catch (error) {
    //  console.error('Error fetching difficulty levels:', error);
    //}
    dispatch(fetchUniqueDifficultyLevels());
  }, []);

  const userid = localStorage.getItem('id');

  const newTopics = initialTopics.fetchUniqueTopics;

  const newDifficultyLevels =
    initialDifficultyLevels.fetchUniqueDifficultyLevels;

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

  const handleButtonClick = () => {
    console.log('Checked Topics:', checkedTopics);
    console.log('Checked Level:', checkedDifficultylevels);

    let url = '';

    if (checkedTopics.length > 0 && checkedDifficultylevels.length == 0) {
      console.log('in checkedTopics && !checkedDifficultylevels');
      url = `/maintesttopics/${checkedTopics}/${userid}`;
    } else if (
      checkedDifficultylevels.length > 0 &&
      checkedTopics.length == 0
    ) {
      console.log(checkedDifficultylevels && !checkedTopics);
      url = `/maintestdifficultylevels/${checkedDifficultylevels}/${userid}`;
    }
    if (checkedTopics.length > 0 && checkedDifficultylevels.length > 0) {
      console.log('in checkedTopics && checkedDifficultylevels');
      url = `/maintest/${checkedTopics}/${checkedDifficultylevels}/${userid}`;
    }

    navigate(url);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="float-left">
          <h2>Topics:</h2>
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
          <h2>Levels:</h2>
          <ul>
            {newDifficultyLevels.map((level, index) => (
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

      <button className="btn btn-primary" onClick={handleButtonClick}>
        Get Checked Values
      </button>
    </div>
  );
};

export default StuTestDashboard;
