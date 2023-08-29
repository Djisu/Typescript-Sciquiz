import React, { useState, useEffect } from 'react';
import {
  createUserPerformance,
  loadUserPerformances,
  deleteUserPerformance,
} from '../../actions/user_performance.js';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User_Performance = () => {
  console.log('in User_Performance  component');

  const [userPerformanceData, setUserPerformanceData] = useState({
    userId: '',
    test_name: '',
    score: 0,
    date: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadUserPerformances());
  }, [dispatch]);

  const userPerformances = useSelector(
    (state) => state.userPerformance.userPerformances
  );

  //  console.log('userPerformances==', userPerformances);

  const { userId, test_name, score, date } = userPerformanceData;

  userPerformanceData.userId = localStorage.getItem('id');
  userPerformanceData.date = Date.now();

  const handleInputChange = (e) => {
    setUserPerformanceData({
      ...userPerformanceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userPerformanceData) {
      dispatch(setAlert('User Test Results entry Successful', 'success'));
    }

    if (!test_name) {
      dispatch(setAlert('Test name missing', 'danger'));
    }
    if (score === 0) {
      dispatch(setAlert('Test score missing', 'danger'));
    }

    console.log('user performance data', userPerformanceData);
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
          <label>Test Score</label>
          <input
            type="text"
            name="score"
            value={score}
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
            <th>ID</th>
            <th>TEST NAME</th>
            <th>TEST SCORE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userPerformances.map((userPerformance) => (
            <tr key={userPerformance._id}>
              <td>{userPerformance._id}</td>
              <td>{userPerformance.test_name}</td>
              <td>{userPerformance.score}</td>
              <td>
                <button
                  type="button"
                  className="small"
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
