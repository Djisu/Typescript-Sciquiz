import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTopics } from '../../actions/topic.ts';

//import { fetchUniqueTopics } from '../../actions/topic.ts';
//import { fetchUniqueDifficultyLevels } from '../../actions/difficulty_level.ts';
//import { fetchUniqueSubjects } from '../../actions/subject.ts';
import MainTest from './MainTest.ts';
import MainTestTopics from './MainTestTopics.ts';
import MainTestDifficultyLevels from './MainTestDifficultyLevels.ts';
import MainTestSubjects from './MainTestSubjects.ts';
import { setAlert } from '../../actions/alert.ts';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import { ISubject } from '../../reducers/types/Subject.ts';
import { FetchUniqueSubject } from '../../reducers/fetchUniqueSubjects.ts';
import { Topic } from '../../reducers/topic.ts';


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

const StuTestDashboard: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const navigate = useNavigate();
// 
  const [checkedTopics, setCheckedTopics] = React.useState<string[]>([]);
  let [checkedDifficultylevels, setCheckedDifficultylevels] = React.useState<string[]>([]);
  let [checkedSubjects, setCheckedSubjects] = React.useState<string[]>([]);
  let [noofquestions, setNoofquestions] = useState(0);

  const [selectedOption, setSelectedOption] = useState(''); // initial selected option

  const {topics, loading, error }= useSelector((state: RootState) => state.topics);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const [selectedSubject, setSelectedSubject] = useState('');
  const [loadTopics, setLoadTopics] = useState(false);

  const [shouldRedirect, setShouldRedirect] = useState(false);

  // const {fetchUniqueSubjects, fetchUniqueloading, fetchUniqueerror} = useSelector(
  //   (state: RootState) => state.fetchUniqueSubjects as FetchUniqueSubjectsState
  // );

  const fetchUniqueSubjects = useSelector(
    (state: RootState) => state.fetchUniqueSubjects as FetchUniqueSubject[]
  );

  const userid = localStorage.getItem('id');

  //const newSubjects = initialSubjects;

  //Find out if user is authenticated or not
useEffect(() => {
  if (!userid) {
    dispatch(setAlert('You have to login!!', 'danger'));
    setShouldRedirect(true);
  }
},[userid, dispatch]);

if (shouldRedirect) {
  return <Navigate to="/login" />;
}


  useEffect(() => {
    if (loadTopics && selectedSubject) {
      dispatch(fetchTopics(selectedSubject));
    }
  }, [dispatch, selectedSubject, loadTopics]);

  const toggleCheckboxTopic = (topic: string) => {
    if (checkedTopics.includes(topic)) {
      setCheckedTopics(checkedTopics.filter((item) => item !== topic));
    } else {
      setCheckedTopics([...checkedTopics, topic]);
    }
  };

  const toggleCheckboxLevel = (level: string) => {
    if (checkedDifficultylevels.includes(level)) {
      setCheckedDifficultylevels(
        checkedDifficultylevels.filter((item) => item !== level)
      );
    } else {
      setCheckedDifficultylevels([...checkedDifficultylevels, level]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedSubject(selectedValue);
    //setSelectedOption(e.target.value);

    if (selectedValue) {
      // Fetch topics when a subject is selected
      dispatch(fetchTopics(selectedValue));
    }
  };

  const handleNoofQuestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value;
    const numberValue = parseFloat(stringValue);
    setNoofquestions(numberValue);
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
          {/* {fetchUniqueSubjects.map((newSubject: FetchUniqueSubject, index: number) => (
            <option key={index} value={newSubject.subject_name}>
              {newSubject.subject_name}
            </option>
          ))} */}
           {fetchUniqueSubjects.map((newSubject: FetchUniqueSubject, index: number) => (
          <option key={index} value={newSubject.subject_name}>
            {newSubject.subject_name}
          </option>
        ))}
        </select>
        <input
          type="number"
          style={selectStyle}
          id={noofquestions.toString()}
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
            {topics.map((topic: Topic, index: number) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`topic-${index}`}
                  checked={checkedTopics.includes(topic.topic)}
                  onChange={() => toggleCheckboxTopic(topic.topic)}
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
        
      </div>
    </div>
  );
};

export default StuTestDashboard;
