import React, { useState, useEffect } from 'react';
import { createUserPerformance } from '../../actions/user_performance';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { Link } from 'react-router-dom';

const User_Performance = () => {
    console.log('in User_Performance  component');
  const [userPerformanceData, setUserPerformanceData] = useState({
    userId: '',
    test_name: '',
    score: 0,
    date: "",
  });
  const dispatch = useDispatch();

  const { userId, test_name, score, date } = userPerformanceData;

  userPerformanceData.userId = localStorage.getItem('id');
   userPerformanceData.date = new Date.now();

  const handleInputChange = (e) => {
    setUserPerformanceData({ ...userPerformanceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userPerformanceData) {
      dispatch(setAlert('User Test Results entry Successful', 'success'));
    }

    if (!test_name){
         dispatch(setAlert('Test name missing', 'danger'));
    } 
    if (score === 0) {
      dispatch(setAlert('Test score missing', 'danger'));
    } 
   
    console.log('user performance data', userPerformanceData);
    //dispatch(createUserPerformance(userPerformanceData));
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
    </section>
  );
};

export default User_Performance;
