import React, { useState, useEffect } from 'react';
import {
  createUserPerformance,
  loadUserPerformances,
  deleteUserPerformance,
} from '../../actions/user_performance.js';
import { getProfiles } from '../../actions/profile.js';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User_Performance = () => {
  console.log('in User_Performance  component');

  const [selectedProfile, setSelectedProfile] = useState(''); // Initialize selectedProfile state

  let [userPerformanceData, setUserPerformanceData] = useState({
    userId: '',
    test_name: '',
    score: 0,
    date: '',
    email: '',
    test_details: '',
  });

  //  const userEmail = localStorage.getItem('email');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect, loadUserPerformances() ');

    dispatch(loadUserPerformances());
  }, [dispatch]);

  const userPerformances = useSelector(
    (state) => state.userPerformance.userPerformances
  );

  console.log('userPerformances:::', userPerformances);

  useEffect(() => {
    console.log('in useEffect getProfiles()');

    dispatch(getProfiles());
  }, [dispatch]);

  const profiles = useSelector((state) => state.profiles.profiles);

  console.log('profiles==', profiles);

  let { userId, test_name, score, date, email, test_details } =
    userPerformanceData;

  userPerformanceData.userId = localStorage.getItem('id');
  userPerformanceData.date = Date.now();

  const handleInputChange = (e) => {
    setUserPerformanceData({
      ...userPerformanceData,
      [e.target.name]: e.target.value,
    });

    const selectedValue = e.target.value;
    setSelectedProfile(selectedValue); // Update the selectedProfile state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userPerformanceData) {
      dispatch(setAlert('No data found', 'danger'));
    }

    if (!test_name) {
      dispatch(setAlert('Test name missing', 'danger'));
    }
    if (score === 0) {
      dispatch(setAlert('Test score missing', 'danger'));
    }
    email = selectedProfile;

    if (!email) {
      dispatch(setAlert('Email of candidate missing', 'danger'));
    }
    if (!test_details) {
      dispatch(setAlert('Test details missing', 'danger'));
    }
    score = parseInt(score);

    //console.log('USER PERFORMANCE DATA', userPerformanceData);
    dispatch(createUserPerformance(userPerformanceData));
  };

  const deleteHandler = (id) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteUserPerformance(id));
    }
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Test Name: Month/Year/Subject</label>
          <input
            type="text"
            name="test_name"
            value={test_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Test Score:</label>
          <input
            type="text"
            name="score"
            value={score}
            onChange={handleInputChange}
          />
        </div>
        {/* I HAVE TO USE selector to list all users !admin */}
        <h2>Email of student/candidate</h2>
        <select
          name="profiles"
          value={selectedProfile}
          onChange={handleInputChange}
        >
          <option disabled value="">
            Select an email
          </option>
          {profiles.map((profile) => (
            <option key={profile._id} value={profile.email}>
              {profile.email}
            </option>
          ))}
        </select>

        <div className="form-group">
          <label>Test Details: Topic and Score for each question</label>
          <textarea
            type="text"
            name="test_details"
            value={test_details}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Test Score
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>TEST NAME</th>
            <th>TEST SCORE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userPerformances.map((userPerformance) => (
            <tr key={userPerformance._id}>
              <td>{userPerformance.test_name}</td>
              <td>{userPerformance.score}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary small"
                  onClick={() => deleteHandler(userPerformance._id)}
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

export default User_Performance;
