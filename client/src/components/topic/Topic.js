import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loadSubjects } from '../../actions/subject.js';
import { createTopic } from '../../actions/topic.js';
import { setAlert } from '../../actions/alert.js';

const Topic = () => {
  const [topicData, setTopicData] = useState({
    topic: '',
    subject_name: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadSubjects());
  }, [dispatch]);

  const subjects = useSelector((state) => state.subject.subjects);
  const subjectLoading = useSelector((state) => state.subject.loading);

  if (subjectLoading) {
    // Optionally, you can show a loading state while the data is being fetched
    return <p>Loading...</p>;
  }

  console.log('subjects:::', subjects);

  const { topic, subject_name } = topicData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTopicData({ ...topicData, [name]: value });
    console.log('topicData:', topicData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!topicData.topic || !topicData.subject_name) {
      dispatch(setAlert('Please fill in all fields', 'danger'));
    } else {
      dispatch(createTopic(topicData));
      dispatch(setAlert('Topic created successfully', 'success'));
      // Optionally, you can reset the form after submission
      setTopicData({
        topic: '',
        subject_name: '',
      });
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
          <h2>Select Subject:</h2>
          <select
            name="subject_name"
            value={subject_name}
            onChange={handleInputChange}
          >
            <option key="default" value="">
              Select a Subject
            </option>
            {subjects.map((subject) => (
              <option key={subject._id} value={subject.subject_name}>
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
    </section>
  );
};

export default Topic;

//import React, { useState } from 'react';
//import { Link, Navigate } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { loadSubjects } from '../../actions/subject.js';
//import PropTypes from 'prop-types';
//import { createTopic } from '../../actions/topic.js';
//import { useDispatch } from 'react-redux';
//import { setAlert } from '../../actions/alert.js';
//import { useEffect } from 'react';
//import { useSelector } from 'react-redux';
//
//const Topic = () => {
//  const [topicData, setTopicData] = useState({
//    topic: '',
//    subject_name: '',
//  });
//  const dispatch = useDispatch();
//
//  useEffect(() => {
//    console.log('in useEffect');
//    dispatch(loadSubjects());
//  }, [dispatch]);
//
// const subjects = useSelector((state) => state.subject.subjects);
// const subjectLoading = useSelector((state) => state.subject.loading);
//
//  if (subjectLoading) {
//    // Optionally, you can show a loading state while the data is being fetched
//    return <p>Loading...</p>;
//  }
//
//  console.log('subjects:::', subjects);
//
//  const { topic, subject_name } = topicData;
//
//  const handleInputChange = (e) => {
//    setTopicData({ ...topicData, [e.target.name]: e.target.value });
//  };
//
//  const handleSubmit = (e) => {
//    e.preventDefault();
//
//    if (!topicData) {
//      dispatch(setAlert('Subject Creation Successful', 'success'));
//    }
//
//    dispatch(createTopic(topicData));
//  };
//
//  return (
//    <section className="container">
//      <br />
//      <br />
//      <br />
//
//      <form className="form" onSubmit={handleSubmit}>
//        <div className="form-group">
//          <label>Topic:</label>
//          <input
//            type="text"
//            name="topic"
//            value={topic}
//            onChange={handleInputChange}
//          />
//        </div>
//
//        <div className="form-group">
//          <h2>Select Subject:</h2>
//          <select value={subject_name} onChange={handleInputChange}>
//            <option key="default" value="">
//              Maths
//            </option>
//            {subjects.map((subject_name) => (
//              <option key={subject_name} value={subject_name.subject_name}>
//                {subject_name.subject_name}
//              </option>
//            ))}
//          </select>
//        </div>
//
//        <button type="submit" className="btn btn-primary">
//          Add topic
//        </button>
//        <Link to="/dashboard" className="primary m-3">
//          Go Back
//        </Link>
//      </form>
//    </section>
//  );
//};
//
////const mapStateToProps = (state) => ({
////  isAuthenticated: state.auth.isAuthenticated,
////});
//export default Topic;
