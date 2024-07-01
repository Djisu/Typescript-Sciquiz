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
import { RootState } from '../../reducers/index.js';
import { ThunkDispatch } from 'redux-thunk';

// Custom function to format the date
const formatDate = (tick: any): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const date = new Date(tick);
  return date.toLocaleDateString('en-US', options);
};

interface UserPerformance {
  test_name: string;
  score: number;
  date: Date;
  email: string;
  test_details: string;
}

interface UserPerformanceProps {
  userPerformance: UserPerformance[];
  loading: boolean;
  error: any;
  email: string
}

const Chart: React.FC<UserPerformanceProps> = ({ email }) => {
  const [data, setData] = useState([]);

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  console.log('in Chart.js email: ', email);

  const userPerformance = useSelector(
    (state: RootState) => state.userPerformance
  ) 

  console.log('user performance is== ', userPerformance);

  useEffect(() => {
    console.log('in useEffect getUserPerformance(email)');

    if (!email) {
      console.log('No email provided');
      return;
    }
    dispatch(getUserPerformance(email));
  }, [dispatch, email]);

  useEffect(() => {
    if (userPerformance === null) {
      dispatch(setAlert('No records found', 'danger'));

      //  return <Navigate to="/dashboard" />;
    }
  }, [dispatch, userPerformance]);

  if (userPerformance) console.log('userPerformances:: ', userPerformance);
  //  console.log('data:', data);

  //  const dateFromMongoDB = new Date(userPerformances.date); // Replace with your retrieved date
  //  userPerformances.date = dateFromMongoDB;

  console.log('userPerformances:', userPerformance);

// Custom function to format the date
const formatDate = (tick: any): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const date = new Date(tick); // Assuming 'tick' is a date string or timestamp
  return date.toLocaleDateString('en-US', options);
};


  return (
    <div>
      <h1>Candidate's Performance Graph</h1>
      <BarChart width={800} height={400} data ={userPerformance}>
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
