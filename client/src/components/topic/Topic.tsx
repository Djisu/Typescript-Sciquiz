import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { loadSubjects } from '../../actions/subject.ts';
import { createTopic, loadTopics, deleteTopic } from '../../actions/topic.ts';
import { setAlert } from '../../actions/alert.ts';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import {ObjectId} from 'mongoose'
import { Topic as TopicType} from '../../reducers/types/TopicState.ts';

interface TopicDataState {
  _id?: ObjectId | null;
  topic: string;
  subject_name: string;
}

const TopicForm: React.FC = () => {
  const [topicData, setTopicData] = useState<TopicDataState>({
    _id: null,
    topic: '',
    subject_name: '',
  });

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadSubjects());
  }, [dispatch]);

//  useEffect(() => {
//    console.log('in useEffect');
//    dispatch(loadTopics());
//  }, [dispatch]);

  const subjects = useSelector((state: RootState) => state.subject.subjects);

  const subjectLoading = useSelector((state: RootState) => state.subject.loading);

  const topics = useSelector((state: RootState) => state.topics.topics);

  if (subjectLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }

  console.log('subjects:::', subjects);

  const { topic, subject_name } = topicData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    dispatch(loadTopics());

    setTopicData({ ...topicData, [name]: value });
    console.log('topicData:', topicData);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!topicData.topic || !topicData.subject_name) {
      dispatch(setAlert('Please fill in all fields', 'danger'));
    } else {
      dispatch(createTopic(topicData));
      dispatch(setAlert('Topic created successfully', 'success'));
      // Optionally, you can reset the form after submission
      setTopicData({
        _id: null,
        topic: '',
        subject_name: '',
      });
    }
  };

  const deleteHandler = (id: string) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteTopic(id));
    }
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Topic:</label>
          <input
            type="text"
            name="topic"
            value={topic}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <select
            name="subject_name"
            value={subject_name}
            onChange={handleInputChange}
          >
            <option key="default" value="">
              Select a Subject
            </option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject.subject_name}>
                {subject.subject_name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add topic
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>LEVEL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic: TopicType) => (
            <tr key={topic._id.toString()}>
              <td>{topic._id.toString()}</td>
              <td>{topic.topic}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => deleteHandler(topic._id.toString())}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TopicForm;

