// Chart.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { getUserPerformance } from '../../actions/user_performance.js';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert.js';

const Chart = ({ email }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  console.log('in Chart.js email: ', email);

  const userPerformances = useSelector(
    (state) => state.onePerformance.onePerformance
  );

  console.log('user performance is== ', userPerformances);

  useEffect(() => {
    console.log('in useEffect getUserPerformance(email)');

    if (!email) {
      console.log('No email provided');
      return;
    }
    dispatch(getUserPerformance(email));
  }, [dispatch, email]);

  useEffect(() => {
    if (userPerformances.length === 0) {
      dispatch(setAlert('No records found', 'danger'));

      //  return <Navigate to="/dashboard" />;
    }
  }, [dispatch, userPerformances]);

  if (userPerformances) console.log('userPerformances:: ', userPerformances);
  //  console.log('data:', data);

  //  const dateFromMongoDB = new Date(userPerformances.date); // Replace with your retrieved date
  //  userPerformances.date = dateFromMongoDB;

  console.log('userPerformances:', userPerformances);

  // Custom function to format the date
  const formatDate = (tick) => {
    // Ensure that 'tick' is a Date object
    const date = new Date(tick);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <h1>Candidate's Performance Graph</h1>
      <BarChart width={800} height={400} data={userPerformances}>
        <XAxis
          dataKey="date"
          tick={{ fontSize: 10 }}
          tickFormatter={formatDate}
        />{' '}
        <YAxis dataKey="score" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="score" fill="#ff7300" />
      </BarChart>
    </div>
  );
};

export default Chart;
