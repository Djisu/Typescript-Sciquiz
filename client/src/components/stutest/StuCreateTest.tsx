import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import { fetchTopicCounts, fetchTopics } from '../../actions/topic.ts';
import { fetchDifficultyLevelsValue } from '../../actions/difficulty_level.ts';
import { fetchUniqueSubjectsAction } from '../../actions/subject.ts';
import { setAlert } from '../../actions/alert.ts';
import { RootState } from '../../reducers/index.ts';
import { Topic } from '../../reducers/topic.ts';
import { ThunkDispatch } from 'redux-thunk';
import { TopicState } from '../../reducers/types/TopicState.ts';
import { DifficultyLevel, DifficultyLevelState } from '../../reducers/difficulty_level.ts';
import { selectTopics } from './selectors';
import { selectFetchUniqueSubjects } from './selectors';
import { TopicCount, TopicsCountState } from '../../reducers/topicCount.ts';

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

  export interface FetchUniqueSubject {
    question: string;
    answer: string;
    difficulty_level: string;
    subject_name: string;
    topic: string;
    question_year: number;
  }
  
  export interface FetchUniqueSubjectsState {
    fetchUniqueSubjects: FetchUniqueSubject[];
    loading: boolean;
    error: null | string;
  }

  interface ITopisCount {
    topic: string
    count: number
  }

  interface IDifficultyLevel {
    _id: string
    difficulty_level: string
  }

const StuCreateTest: React.FC= () => {
  console.log('in StuCreateTest')

  const [loadTopics, setLoadTopics] = useState(false);
  const [loadDifficultLevel, setLoadDifficultLevel] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [checkedTopics, setCheckedTopics] = React.useState<string[]>([]);
  let [checkedDifficultylevel, setCheckedDifficultylevels] = useState<string[]>([]);
  let [checkedSubjects, setCheckedSubjects] = useState<string[]>([]);
  let [noofquestions, setNoofquestions] = useState<number>(0);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();
  const navigate = useNavigate();
  const userid = localStorage.getItem('id');

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
  dispatch(fetchUniqueSubjectsAction());
 }, []);

  const inputRef = useRef(null);

//const {profiles}: ProfilesState = useSelector((state: RootState) => state.profiles)  //as DifficultyLevel[]
const {topicsCount}: TopicsCountState = useSelector((state: RootState) => state.topicCount)
  
  if (!topicsCount){
    return <div>No topics</div>
  }
  // if (topicsCount.length > 0){
  //   console.log('topicsCount.length: ', topicsCount.length)
  //   console.log('There is topicCount:: ', topicsCount)
  // }


  const {difficultyLevels}: DifficultyLevelState = useSelector(
    (state: RootState) => state.difficultyLevels 
  );

  if (!difficultyLevels){
    return <div>No difficulty Levels</div>
  }

  console.log('difficultyLevels: ', difficultyLevels)

  const { fetchUniqueSubjects, loading, error } = useSelector((state: RootState) => state.fetchUniqueSubjects as FetchUniqueSubjectsState) ;

  // console.log('fetchUniqueSubjects==== ', fetchUniqueSubjects);
  // console.log('loading==== ', loading);
  // console.log('error==== ', error);

  const [subject_name] = fetchUniqueSubjects

 // console.log('subject_name: ', subject_name)
 
  const handleNoofQuestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value;
    const numberValue = parseFloat(stringValue);
    setNoofquestions(numberValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('in handleSelectChange')

        const selectedSubject = e.target.value;

        setSelectedSubject(selectedSubject);

        if (selectedSubject) {
          // console.log('selectedSubject:: ', selectedSubject)

          // console.log('in dispatch(fetchTopicCounts(selectedSubject))')
          dispatch(fetchTopicCounts(selectedSubject));
        }
        if (selectedSubject) {
          dispatch(fetchDifficultyLevelsValue(selectedSubject));
        }
  };

  const toggleCheckboxTopic = (topic: string) => {
        console.log('in toggleCheckboxTopic', topic);
      
        setCheckedTopics((prevCheckedTopics) => {
          const updatedTopics = [...prevCheckedTopics];
      
          if (updatedTopics.includes(topic)) {
            updatedTopics.splice(updatedTopics.indexOf(topic), 1);
          } else {
            updatedTopics.push(topic);
          } 
          console.log('checkedTopics:: ', updatedTopics);
          return updatedTopics;
        });
  };
  
  const toggleCheckboxLevel = (level: string) => {
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
      console.log('noofquestions:', noofquestions.toString());

      let url = '';

      setCheckedSubjects([...checkedSubjects, selectedSubject]);

      if (
        checkedTopics.length > 0 &&
        checkedDifficultylevel.length == 0 &&
        checkedSubjects.length > 0
      ) {
        console.log(
          'in checkedTopics && !checkedDifficultylevels && checkedsubjects'
        );
        url = `/maintesttopics/${checkedTopics}/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        checkedDifficultylevel.length > 0 &&
        checkedTopics.length == 0 &&
        checkedSubjects.length > 0
      ) {
        console.log('ONLY DIFFICULTY LEVELS');

        console.log(checkedDifficultylevel && !checkedTopics);
        url = `/maintestdifficultylevels/${checkedDifficultylevel}/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        checkedSubjects.length > 0 &&
        checkedTopics.length == 0 &&
        checkedDifficultylevel.length == 0
      ) {
        console.log(
          'in checkedsubjects && !checkedTopics && !checkedDifficultylevels'
        );
        url = `/maintestsubjects/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        checkedTopics.length > 0 &&
        checkedDifficultylevel.length > 0 &&
        checkedSubjects.length == 0
      ) {
        console.log(
          'in checkedTopics && checkedDifficultylevels && !checkedsubjects'
        );
        url = `/maintesttopicsdifficultylevels/${checkedTopics}/${checkedDifficultylevel}/${checkedSubjects}/${userid}/${noofquestions}`;
      } else if (
        checkedTopics.length > 0 &&
        checkedDifficultylevel.length > 0 &&
        checkedSubjects.length > 0 &&
        userid && userid.length > 0 &&
        noofquestions > 0
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
          {Array.isArray(fetchUniqueSubjects) && fetchUniqueSubjects.length > 0 ? (
            fetchUniqueSubjects.map((fetchUniqueSubject, index: number) => (
              <option key={index} value={fetchUniqueSubject.subject_name}>
                {fetchUniqueSubject.subject_name}
              </option>
            ))
          ) : (
            <option key="default" value="">
              Loading...
            </option>
          )}
        </select>
        &nbsp; &nbsp;
        <input
          type="number"
          style={selectStyle}
          id={noofquestions.toString()}
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
        {topicsCount && topicsCount.length > 0 ? (
            <ul>
              {topicsCount.map((topic: TopicCount, index: number) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`topic-${index}`}
                    checked={checkedTopics.includes(topic.topic)}
                    onChange={() => toggleCheckboxTopic(topic.topic)}
                  />
                  &nbsp;
                  <label
                    htmlFor={`topic-${index}`}
                    style={{ color: 'black', backgroundColor: 'white' }}
                  >
                    {topic.topic}
                  </label>{' '}
                  &nbsp;
                  <label style={{ color: 'red', backgroundColor: 'white' }}>
                    {topic.count}
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data</p>
          )}
      </div>
      <span></span>
      <div className="float-left">
        <h4 style={labelStyle}>Difficulty Levels:</h4>
        {Array.isArray(difficultyLevels) ? (
            <ul>
              {difficultyLevels.map((level: DifficultyLevel) => (
                <li key={level._id}>
                  <input
                    type="checkbox"
                    id={`level-${level.difficulty_level}`}
                    checked={checkedDifficultylevel.includes(level.difficulty_level)}
                    onChange={() => toggleCheckboxLevel(level.difficulty_level)}
                  />
                  &nbsp;
                  <label
                    htmlFor={`level-${level.difficulty_level}`}
                    style={{ color: 'black', backgroundColor: 'white' }}
                  >
                    {level._id}
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data</p>
          )}
      </div>
    </div>
  );
};
export default StuCreateTest;
